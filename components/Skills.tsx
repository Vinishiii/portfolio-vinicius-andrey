"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillCategories, skills } from "@/data/skills";

const ease = [0.16, 1, 0.3, 1] as const;

export function Skills() {
  const t = useTranslations("skills");

  return (
    <section id="skills" className="relative border-t border-border-soft bg-bg-elevated py-28 md:py-36">
      <Container className="flex flex-col gap-16">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />

        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease, delay: (i % 3) * 0.06 }}
              className="flex flex-col gap-4"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-fg-faint">
                {t(`categories.${category}`)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills[category].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border-soft px-3.5 py-1.5 text-sm text-fg-muted transition-colors hover:border-accent/50 hover:text-fg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
