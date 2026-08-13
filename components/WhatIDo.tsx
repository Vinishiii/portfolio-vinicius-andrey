"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Code2, Sparkles, Database, Briefcase } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const ease = [0.16, 1, 0.3, 1] as const;
const areas = [
  { key: "software", icon: Code2 },
  { key: "ai", icon: Sparkles },
  { key: "data", icon: Database },
  { key: "business", icon: Briefcase },
] as const;

export function WhatIDo() {
  const t = useTranslations("whatIDo");

  return (
    <section className="relative border-t border-border-soft bg-bg-elevated py-28 md:py-36">
      <Container className="flex flex-col gap-16">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />

        <div className="grid gap-px overflow-hidden rounded-lg border border-border-soft bg-border-soft sm:grid-cols-2">
          {areas.map(({ key, icon: Icon }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease, delay: i * 0.08 }}
              className="group relative flex flex-col gap-6 bg-bg-elevated p-8 transition-colors duration-500 hover:bg-bg md:p-10"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-fg-faint">
                  {t(`items.${key}.index`)}
                </span>
                <Icon
                  className="h-5 w-5 text-fg-faint transition-colors duration-500 group-hover:text-accent"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-xl font-medium text-fg md:text-2xl">
                {t(`items.${key}.title`)}
              </h3>
              <p className="text-sm leading-relaxed text-fg-muted md:text-base">
                {t(`items.${key}.description`)}
              </p>
              <div
                aria-hidden
                className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-[width] duration-500 group-hover:w-full"
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
