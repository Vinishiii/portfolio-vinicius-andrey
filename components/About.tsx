"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlaceholderBlock } from "@/components/ui/PlaceholderBlock";
import { profile } from "@/data/profile";

const ease = [0.16, 1, 0.3, 1] as const;

export function About() {
  const t = useTranslations("about");
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section id="about" className="relative border-t border-border-soft bg-bg py-28 md:py-36">
      <Container className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="relative"
        >
          {photoFailed ? (
            <PlaceholderBlock label={t("photoPlaceholder")} aspect="aspect-[4/5]" />
          ) : (
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border-soft bg-bg-elevated">
              <Image
                src={profile.photo}
                alt={t("photoAlt")}
                fill
                sizes="(max-width: 1024px) 90vw, 480px"
                className="object-cover grayscale transition-[filter] duration-700 hover:grayscale-0"
                onError={() => setPhotoFailed(true)}
              />
            </div>
          )}
          <div
            aria-hidden
            className="absolute -bottom-5 -right-5 -z-10 hidden h-full w-full rounded-lg border border-accent/25 lg:block"
          />
        </motion.div>

        <div className="flex flex-col gap-10">
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />

          <div className="flex flex-col gap-6">
            {t.raw("paragraphs").map((paragraph: string, i: number) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease, delay: i * 0.08 }}
                className="text-balance text-base leading-relaxed text-fg-muted md:text-lg"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-6 border-t border-border-soft pt-8">
            {profile.education.map((edu) => (
              <div key={edu.institution} className="flex flex-col gap-1">
                <span className="text-sm text-fg">{edu.degree}</span>
                <span className="text-xs text-fg-faint">
                  {edu.institution} · {edu.detail}
                </span>
              </div>
            ))}
            <div className="flex flex-col gap-1">
              <span className="text-sm text-fg">
                {profile.languages.map((l) => l.name).join(" · ")}
              </span>
              <span className="text-xs text-fg-faint">{profile.location}</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
