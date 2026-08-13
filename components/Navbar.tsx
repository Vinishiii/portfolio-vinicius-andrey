"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { cn } from "@/lib/utils";

const sectionIds = ["about", "work", "experience", "skills", "testimonials"] as const;

export function Navbar() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        scrolled
          ? "border-b border-border-soft bg-bg/70 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <Container className="flex h-18 items-center justify-between py-4">
        <Link href="/" className="font-mono text-sm tracking-tight text-fg" data-cursor="">
          Vinícius Andrey
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {sectionIds.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-sm text-fg-muted transition-colors hover:text-fg"
            >
              {t(id === "work" ? "work" : id)}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <LanguageSwitcher />
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-border px-5 py-2.5 text-xs font-medium tracking-tight text-fg transition-colors duration-300 hover:border-accent hover:text-accent"
          >
            {t("contactCta")}
          </a>
        </div>

        <button
          type="button"
          className="flex items-center justify-center rounded-full p-2 text-fg lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? t("closeMenu") : t("openMenu")}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-b border-border-soft bg-bg lg:hidden"
          >
            <Container className="flex flex-col gap-6 py-8">
              <nav className="flex flex-col gap-5" aria-label="Mobile">
                {sectionIds.map((id) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    className="text-lg text-fg-muted transition-colors hover:text-fg"
                  >
                    {t(id === "work" ? "work" : id)}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="text-lg text-fg transition-colors hover:text-accent"
                >
                  {t("contactCta")}
                </a>
              </nav>
              <LanguageSwitcher />
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
