import type { MetadataRoute } from "next";
import { social } from "@/data/social";

const siteUrl = social.portfolio ?? "https://vinicius-andrey.dev";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
