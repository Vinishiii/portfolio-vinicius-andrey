"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const labels: Record<string, string> = { pt: "PT", en: "EN", es: "ES" };

export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("a11y");

  return (
    <div
      role="group"
      aria-label={t("switchLanguage")}
      className={cn("flex items-center gap-1 font-mono text-xs tracking-wide", className)}
    >
      {routing.locales.map((loc, i) => (
        <span key={loc} className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => router.replace(pathname, { locale: loc })}
            aria-current={loc === locale}
            className={cn(
              "rounded-sm px-1.5 py-1 uppercase transition-colors",
              loc === locale ? "text-fg" : "text-fg-faint hover:text-fg-muted"
            )}
          >
            {labels[loc]}
          </button>
          {i < routing.locales.length - 1 && <span className="text-fg-faint">/</span>}
        </span>
      ))}
    </div>
  );
}
