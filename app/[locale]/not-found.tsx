import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";

export default async function NotFound() {
  const t = await getTranslations("projectDetail");

  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-6 py-32 text-center">
      <span className="font-mono text-xs uppercase tracking-[0.28em] text-accent">404</span>
      <h1 className="text-3xl font-medium text-fg md:text-5xl">{t("notFoundTitle")}</h1>
      <Link href="/" className="text-sm text-fg-muted underline underline-offset-4 hover:text-fg">
        {t("back")}
      </Link>
    </Container>
  );
}
