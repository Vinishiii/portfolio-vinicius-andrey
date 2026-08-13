"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { useMagnetic } from "@/hooks/useMagnetic";
import { buttonBase, buttonVariants, type ButtonVariant } from "./buttonStyles";

type ButtonProps = {
  variant?: ButtonVariant;
  magnetic?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", magnetic = true, children, ...props }, forwardedRef) => {
    const { ref, onPointerMove, onPointerLeave } = useMagnetic<HTMLButtonElement>(0.25);

    return (
      <button
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
      </button>
    );
  }
);
Button.displayName = "Button";
