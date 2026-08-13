export type ButtonVariant = "primary" | "secondary" | "ghost";

export const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-tight transition-[background-color,color,border-color,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform";

export const buttonVariants: Record<ButtonVariant, string> = {
  primary: "bg-fg text-bg hover:bg-accent hover:text-bg border border-transparent",
  secondary:
    "bg-transparent text-fg border border-border hover:border-accent hover:text-accent",
  ghost: "bg-transparent text-fg-muted hover:text-fg border border-transparent",
};
