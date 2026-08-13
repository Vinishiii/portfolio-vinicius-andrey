"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { CheckCircle2, AlertCircle, Loader2, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkedinIcon } from "@/components/icons/BrandIcons";
import { contactSchema, buildWhatsAppUrl, type ContactPayload } from "@/services/contact";
import { profile } from "@/data/profile";
import { social } from "@/data/social";
import { cn } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;
const projectTypeKeys = ["job", "freelance", "product", "consulting", "other"] as const;

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const t = useTranslations("contact");
  const tf = useTranslations("contact.form");
  const [status, setStatus] = useState<Status>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactPayload>({
    resolver: zodResolver(contactSchema),
    defaultValues: { projectType: "job" },
  });

  const onSubmit = (data: ContactPayload) => {
    setStatus("submitting");

    const message = [
      `*${tf("whatsappMessageTitle")}*`,
      `${tf("name")}: ${data.name}`,
      `${tf("email")}: ${data.email}`,
      data.company ? `${tf("company")}: ${data.company}` : null,
      `${tf("projectType")}: ${tf(`projectTypeOptions.${data.projectType}`)}`,
      "",
      data.message,
    ]
      .filter(Boolean)
      .join("\n");

    const url = buildWhatsAppUrl(social.whatsapp, message);

    try {
      // window.open must run synchronously in the click handler, or popup
      // blockers treat it as an unsolicited popup instead of a user action.
      const opened = window.open(url, "_blank", "noopener,noreferrer");
      if (!opened) window.location.assign(url);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
      return;
    }

    // Fire-and-forget server-side log; the WhatsApp handoff above is the
    // actual delivery mechanism, so this must never block or fail it.
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).catch(() => {});
  };

  return (
    <section id="contact" className="relative border-t border-border-soft bg-bg py-28 md:py-36">
      <Container className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div className="flex flex-col gap-8">
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
          <p className="max-w-md text-balance text-base text-fg-muted md:text-lg">
            {t("subtitle")}
          </p>

          <div className="flex flex-col gap-3 border-t border-border-soft pt-6">
            <span className="text-xs text-fg-faint">{t("directLabel")}</span>
            <a
              href={`mailto:${profile.email}`}
              className="w-fit text-base text-fg transition-colors hover:text-accent"
            >
              {profile.email}
            </a>
            <a
              href={`https://wa.me/${social.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 text-base text-fg transition-colors hover:text-accent"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
              {t("whatsapp")}
            </a>
            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 text-base text-fg transition-colors hover:text-accent"
              >
                <LinkedinIcon className="h-4 w-4" strokeWidth={1.5} />
                LinkedIn
              </a>
            )}
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5"
          noValidate
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label={tf("name")} error={errors.name && tf("errors.name")}>
              <input
                {...register("name")}
                type="text"
                placeholder={tf("namePlaceholder")}
                autoComplete="name"
                className={inputClass}
              />
            </Field>
            <Field label={tf("email")} error={errors.email && tf("errors.email")}>
              <input
                {...register("email")}
                type="email"
                placeholder={tf("emailPlaceholder")}
                autoComplete="email"
                className={inputClass}
              />
            </Field>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label={tf("company")}>
              <input
                {...register("company")}
                type="text"
                placeholder={tf("companyPlaceholder")}
                autoComplete="organization"
                className={inputClass}
              />
            </Field>
            <Field label={tf("projectType")}>
              <select {...register("projectType")} className={inputClass}>
                {projectTypeKeys.map((key) => (
                  <option key={key} value={key}>
                    {tf(`projectTypeOptions.${key}`)}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <Field label={tf("message")} error={errors.message && tf("errors.message")}>
            <textarea
              {...register("message")}
              rows={5}
              placeholder={tf("messagePlaceholder")}
              className={cn(inputClass, "resize-none")}
            />
          </Field>

          <p className="text-xs text-fg-faint">{tf("whatsappHint")}</p>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-fg px-7 py-3.5 text-sm font-medium text-bg transition-colors duration-300 hover:bg-accent disabled:opacity-60"
          >
            {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
            {status === "submitting" ? tf("submitting") : tf("submit")}
          </button>

          {status === "success" && (
            <StatusNote icon={CheckCircle2} title={tf("successTitle")} desc={tf("successDescription")} tone="success" />
          )}
          {status === "error" && (
            <StatusNote icon={AlertCircle} title={tf("errorTitle")} desc={tf("errorDescription")} tone="error" />
          )}
        </motion.form>
      </Container>
    </section>
  );
}

const inputClass =
  "w-full rounded-md border border-border-soft bg-bg-elevated px-4 py-3 text-sm text-fg placeholder:text-fg-faint outline-none transition-colors focus:border-accent";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string | false;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs text-fg-muted">{label}</span>
      {children}
      {error && <span className="text-xs text-red-400">{error}</span>}
    </label>
  );
}

function StatusNote({
  icon: Icon,
  title,
  desc,
  tone,
}: {
  icon: typeof CheckCircle2;
  title: string;
  desc: string;
  tone: "success" | "error";
}) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-md border px-4 py-3.5",
        tone === "success" ? "border-accent/40 bg-accent-soft" : "border-red-500/30 bg-red-500/5"
      )}
    >
      <Icon
        className={cn("mt-0.5 h-4 w-4 shrink-0", tone === "success" ? "text-accent" : "text-red-400")}
        strokeWidth={1.5}
      />
      <div className="flex flex-col gap-0.5">
        <span className="text-sm text-fg">{title}</span>
        <span className="text-xs text-fg-muted">{desc}</span>
      </div>
    </div>
  );
}
