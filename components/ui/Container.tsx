import { createElement } from "react";
import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
  as = "div",
}: {
  className?: string;
  children: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  return createElement(
    as,
    { className: cn("mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-16", className) },
    children
  );
}
