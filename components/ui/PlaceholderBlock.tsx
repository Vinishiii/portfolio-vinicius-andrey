import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

export function PlaceholderBlock({
  label,
  className,
  aspect = "aspect-[4/5]",
}: {
  label: string;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      className={cn(
        aspect,
        "flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-border bg-bg-elevated text-center",
        className
      )}
    >
      <ImageOff className="h-6 w-6 text-fg-faint" strokeWidth={1.5} aria-hidden />
      <span className="max-w-[16ch] font-mono text-[11px] uppercase tracking-[0.14em] text-fg-faint">
        {label}
      </span>
    </div>
  );
}
