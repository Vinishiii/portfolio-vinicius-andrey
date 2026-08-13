"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { PlaceholderBlock } from "@/components/ui/PlaceholderBlock";
import { pickLocalized } from "@/lib/utils";
import type { Project } from "@/data/projects";

const ease = [0.16, 1, 0.3, 1] as const;

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const t = useTranslations("projects");
  const locale = useLocale();
  const title = pickLocalized(project.title, locale);
  const shortDescription = pickLocalized(project.shortDescription, locale);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease, delay: (index % 3) * 0.1 }}
    >
      <Link
        href={`/projects/${project.slug}`}
        data-cursor={t("viewCaseStudy")}
        className="group flex flex-col gap-5"
      >
        <div className="relative aspect-[16/11] overflow-hidden rounded-lg border border-border-soft bg-bg-elevated">
          {project.image ? (
            <Image
              src={project.image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
            />
          ) : (
            <PlaceholderBlock label={title} aspect="aspect-[16/11]" className="h-full" />
          )}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
          <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-fg/20 bg-bg/60 opacity-0 backdrop-blur transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 -translate-x-2">
            <ArrowUpRight className="h-4 w-4 text-fg" strokeWidth={1.5} />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-lg font-medium text-fg transition-colors group-hover:text-accent md:text-xl">
              {title}
            </h3>
            {project.year && (
              <span className="font-mono text-xs text-fg-faint">{project.year}</span>
            )}
          </div>
          <p className="text-sm text-fg-muted">{shortDescription}</p>
          {project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border-soft px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-fg-faint"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
