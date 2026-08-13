"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Quote, MessageSquareText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialForm } from "@/components/TestimonialForm";
import { testimonials } from "@/data/testimonials";

const ease = [0.16, 1, 0.3, 1] as const;

export function Testimonials() {
  const t = useTranslations("testimonials");

  return (
    <section id="testimonials" className="relative border-t border-border-soft bg-bg-elevated py-28 md:py-36">
      <Container className="flex flex-col gap-16">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />

        {testimonials.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, i) => (
              <motion.figure
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease, delay: (i % 3) * 0.08 }}
                className="flex flex-col gap-6 rounded-lg border border-border-soft p-8"
              >
                <Quote className="h-5 w-5 text-accent" strokeWidth={1.5} />
                <blockquote className="text-base leading-relaxed text-fg-muted">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-3 border-t border-border-soft pt-5">
                  {item.photo && (
                    <div className="relative h-10 w-10 overflow-hidden rounded-full">
                      <Image src={item.photo} alt={item.author} fill className="object-cover" />
                    </div>
                  )}
                  <div className="flex flex-col">
                    <span className="text-sm text-fg">{item.author}</span>
                    <span className="text-xs text-fg-faint">
                      {item.role} · {item.company}
                    </span>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 rounded-lg border border-dashed border-border py-24 text-center">
            <MessageSquareText className="h-6 w-6 text-fg-faint" strokeWidth={1.5} />
            <h3 className="text-lg text-fg">{t("emptyTitle")}</h3>
            <p className="max-w-sm text-sm text-fg-muted">{t("emptyDescription")}</p>
          </div>
        )}

        <TestimonialForm />
      </Container>
    </section>
  );
}
