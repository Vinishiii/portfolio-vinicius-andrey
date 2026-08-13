"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { WebGLGate } from "@/components/3d/WebGLGate";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const t = useTranslations("hero");
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-bg"
    >
      <WebGLGate scrollProgress={scrollYProgress} />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/40"
      />

      <Container className="relative z-10 flex flex-col gap-8 pt-28">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="font-mono text-xs uppercase tracking-[0.28em] text-accent"
        >
          {t("eyebrow")}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.1 }}
          className="text-balance max-w-4xl text-4xl font-medium leading-[1.08] tracking-tight text-fg sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {t("headline")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.25 }}
          className="max-w-xl text-balance text-lg text-fg-muted md:text-xl"
        >
          {t("subheadline")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.4 }}
          className="flex flex-wrap items-center gap-4 pt-2"
        >
          <LinkButton href="#work" variant="primary" data-cursor="">
            {t("ctaPrimary")}
          </LinkButton>
          <LinkButton href="#contact" variant="secondary" data-cursor="">
            {t("ctaSecondary")}
          </LinkButton>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-fg-faint"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
          {t("scrollHint")}
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" strokeWidth={1.5} />
        </motion.span>
      </motion.div>
    </section>
  );
}
