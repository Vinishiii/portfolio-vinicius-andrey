import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getPublishedProjects } from "@/data/projects";
import { social } from "@/data/social";

const siteUrl = social.portfolio ?? "https://vinicius-andrey.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", ...getPublishedProjects().map((p) => `/projects/${p.slug}`)];

  return routing.locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${siteUrl}/${locale}${route}`,
      lastModified: new Date(),
    }))
  );
}
