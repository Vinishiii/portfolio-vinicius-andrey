"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { useMagnetic } from "@/hooks/useMagnetic";
import { buttonBase, buttonVariants, type ButtonVariant } from "./buttonStyles";

type LinkButtonProps = {
  variant?: ButtonVariant;
  magnetic?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ className, variant = "primary", magnetic = true, children, ...props }, forwardedRef) => {
    const { ref, onPointerMove, onPointerLeave } = useMagnetic<HTMLAnchorElement>(0.25);

    return (
      <a
        ref={(node) => {
          ref.current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) forwardedRef.current = node;
        }}
        onPointerMove={magnetic ? onPointerMove : undefined}
        onPointerLeave={magnetic ? onPointerLeave : undefined}
        className={cn(buttonBase, buttonVariants[variant], className)}
        {...props}
      >
        {children}
      </a>
    );
  }
);
LinkButton.displayName = "LinkButton";
