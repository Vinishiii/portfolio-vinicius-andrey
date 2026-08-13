"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Award, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certifications } from "@/data/certifications";

const ease = [0.16, 1, 0.3, 1] as const;

export function Certifications() {
  const t = useTranslations("certifications");

  return (
    <section className="relative border-t border-border-soft bg-bg py-28 md:py-36">
      <Container className="flex flex-col gap-16">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease, delay: (i % 6) * 0.05 }}
              className="flex items-start gap-4 rounded-lg border border-border-soft p-5 transition-colors hover:border-accent/40"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-soft text-fg-faint">
                <Award className="h-4 w-4" strokeWidth={1.5} />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-medium text-fg">{cert.name}</h3>
                {cert.issuer && <p className="text-xs text-fg-muted">{cert.issuer}</p>}
                {cert.date && <p className="font-mono text-[11px] text-fg-faint">{cert.date}</p>}
                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-xs text-accent hover:underline"
                  >
                    {t("addLink")}
                    <ExternalLink className="h-3 w-3" strokeWidth={1.5} />
                  </a>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
