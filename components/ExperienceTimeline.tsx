"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";
import { cn } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;

export function ExperienceTimeline() {
  const t = useTranslations("experience");
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="experience" className="relative border-t border-border-soft bg-bg py-28 md:py-36">
      <Container className="flex flex-col gap-16">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />

        <ol className="relative flex flex-col">
          <div aria-hidden className="absolute bottom-2 left-[7px] top-2 w-px bg-border" />

          {experience.map((item, i) => {
            const isOpen = openId === item.id;
            return (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease, delay: i * 0.05 }}
                className="relative pb-10 pl-10 last:pb-0"
              >
                <span
                  aria-hidden
                  className={cn(
                    "absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2",
                    item.current ? "border-accent bg-accent" : "border-border bg-bg"
                  )}
                />

                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="flex w-full flex-col items-start gap-1.5 text-left sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                >
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-medium text-fg md:text-xl">{item.role}</h3>
                      {item.current && (
                        <span className="rounded-full bg-accent-soft px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-accent">
                          {t("present")}
                        </span>
                      )}
                    </div>
                    {item.company && <p className="text-sm text-fg-muted">{item.company}</p>}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-fg-faint">{item.period}</span>
                    <Plus
                      className={cn(
                        "h-4 w-4 shrink-0 text-fg-faint transition-transform duration-300",
                        isOpen && "rotate-45 text-accent"
                      )}
                      strokeWidth={1.5}
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pt-4 text-sm leading-relaxed text-fg-muted">
                        {item.summary ?? (
                          <span className="italic text-fg-faint">{t("summaryPlaceholder")}</span>
                        )}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
