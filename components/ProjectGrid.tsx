"use client";

import { useTranslations } from "next-intl";
import { FolderKanban } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { getPublishedProjects } from "@/data/projects";

export function ProjectGrid() {
  const t = useTranslations("projects");
  const published = getPublishedProjects();

  return (
    <section id="work" className="relative border-t border-border-soft bg-bg py-28 md:py-36">
      <Container className="flex flex-col gap-16">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />

        {published.length > 0 ? (
          <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {published.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 rounded-lg border border-dashed border-border py-24 text-center">
            <FolderKanban className="h-6 w-6 text-fg-faint" strokeWidth={1.5} />
            <h3 className="text-lg text-fg">{t("emptyTitle")}</h3>
            <p className="max-w-sm text-sm text-fg-muted">{t("emptyDescription")}</p>
          </div>
        )}
      </Container>
    </section>
  );
}
