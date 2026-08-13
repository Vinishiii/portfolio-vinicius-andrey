"use client";

import { useTranslations } from "next-intl";
import { ArrowUp, Globe, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { GithubIcon, LinkedinIcon, InstagramIcon, YoutubeIcon } from "@/components/icons/BrandIcons";
import { profile } from "@/data/profile";
import { social } from "@/data/social";

const socialLinks = [
  { key: "email", href: `mailto:${social.email}`, icon: Mail, always: true },
  { key: "linkedin", href: social.linkedin, icon: LinkedinIcon, always: false },
  { key: "github", href: social.github, icon: GithubIcon, always: false },
  { key: "instagram", href: social.instagram, icon: InstagramIcon, always: false },
  { key: "youtube", href: social.youtube, icon: YoutubeIcon, always: false },
  { key: "portfolio", href: social.portfolio, icon: Globe, always: false },
];

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="relative border-t border-border-soft bg-bg">
      <Container className="flex flex-col gap-10 py-14 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-3">
          <span className="font-serif text-2xl italic text-fg">Vinícius Andrey</span>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-faint">
            {t("tagline")}
          </p>
          <p className="text-sm text-fg-muted">{profile.location}</p>
        </div>

        <div className="flex flex-col gap-6 md:items-end">
          <div className="flex items-center gap-4">
            {socialLinks
              .filter((link) => link.always || link.href)
              .map(({ key, href, icon: Icon }) => (
                <a
                  key={key}
                  href={href ?? undefined}
                  target={key === "email" ? undefined : "_blank"}
                  rel={key === "email" ? undefined : "noreferrer"}
                  aria-label={key}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-fg-muted transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
          </div>
          <LanguageSwitcher />
        </div>
      </Container>

      <Container className="flex flex-col-reverse items-center justify-between gap-4 border-t border-border-soft py-6 md:flex-row">
        <p className="text-xs text-fg-faint">
          © {new Date().getFullYear()} Vinícius Andrey Ribeiro Lima. {t("rights")}
        </p>
        <a
          href="#top"
          className="flex items-center gap-2 text-xs text-fg-muted transition-colors hover:text-fg"
        >
          {t("backToTop")}
          <ArrowUp className="h-3.5 w-3.5" strokeWidth={1.5} />
        </a>
      </Container>
    </footer>
  );
}
