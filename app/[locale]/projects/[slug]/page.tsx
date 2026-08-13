import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { PlaceholderBlock } from "@/components/ui/PlaceholderBlock";
import { GithubIcon } from "@/components/icons/BrandIcons";
import { MediaGallery } from "@/components/MediaGallery";
import { VideoEmbed } from "@/components/VideoEmbed";
import { getProjectBySlug, getPublishedProjects } from "@/data/projects";
import { pickLocalized } from "@/lib/utils";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getPublishedProjects().map((p) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  const t = await getTranslations({ locale, namespace: "projects" });
  return {
    title: `${pickLocalized(project.title, locale)} — ${t("title")}`,
    description: pickLocalized(project.shortDescription, locale),
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const title = pickLocalized(project.title, locale);
  const description = pickLocalized(project.description, locale);
  const category = pickLocalized(project.category, locale);

  const t = await getTranslations("projectDetail");
  const caseStudyRows = [
    { label: t("problem"), value: project.caseStudy?.problem },
    { label: t("approach"), value: project.caseStudy?.approach },
    { label: t("solution"), value: project.caseStudy?.solution },
    { label: t("results"), value: project.caseStudy?.results },
  ]
    .filter((row) => row.value)
    .map((row) => ({ label: row.label, value: pickLocalized(row.value!, locale) }));

  return (
    <article className="pb-28 pt-32 md:pb-36">
      <Container className="flex flex-col gap-16">
        <Link
          href="/#work"
          className="inline-flex w-fit items-center gap-2 text-sm text-fg-muted transition-colors hover:text-fg"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
          {t("back")}
        </Link>

        <header className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-border-soft px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-fg-faint">
              {category}
            </span>
            {project.year && (
              <span className="font-mono text-xs text-fg-faint">{project.year}</span>
            )}
          </div>
          <h1 className="max-w-3xl text-balance text-4xl font-medium tracking-tight text-fg md:text-6xl">
            {title}
          </h1>
          <p className="max-w-2xl text-lg text-fg-muted">{description}</p>

          <div className="flex flex-wrap gap-3 pt-2">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3 text-sm font-medium text-bg transition-colors hover:bg-accent"
              >
                {t("visitProject")}
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-fg transition-colors hover:border-accent hover:text-accent"
              >
                <GithubIcon className="h-4 w-4" strokeWidth={1.5} />
                {t("viewCode")}
              </a>
            )}
          </div>
        </header>

        {project.image ? (
          <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border-soft">
            <Image src={project.image} alt={title} fill className="object-cover" priority />
          </div>
        ) : (
          <PlaceholderBlock label={title} aspect="aspect-video" />
        )}

        {project.video && <VideoEmbed video={project.video} />}

        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          {caseStudyRows.length > 0 && (
            <dl className="flex flex-col gap-10">
              {caseStudyRows.map((row) => (
                <div key={row.label} className="flex flex-col gap-2 border-t border-border-soft pt-6">
                  <dt className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                    {row.label}
                  </dt>
                  <dd className="text-base leading-relaxed text-fg-muted">{row.value}</dd>
                </div>
              ))}
            </dl>
          )}

          {project.technologies.length > 0 && (
            <div className="flex flex-col gap-4 border-t border-border-soft pt-6 lg:border-t-0 lg:pt-0">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {t("technologies")}
              </span>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border-soft px-3 py-1.5 text-sm text-fg-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {project.gallery.length > 0 && (
          <MediaGallery images={project.gallery} alt={title} />
        )}
      </Container>
    </article>
  );
}
