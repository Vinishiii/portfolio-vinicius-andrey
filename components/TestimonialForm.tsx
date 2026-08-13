"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { testimonialSchema, type TestimonialPayload } from "@/services/testimonial";
import { buildWhatsAppUrl } from "@/services/contact";
import { social } from "@/data/social";
import { cn } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;

type Status = "idle" | "submitting" | "success" | "error";

export function TestimonialForm() {
  const t = useTranslations("testimonials");
  const tf = useTranslations("testimonials.form");
  const [status, setStatus] = useState<Status>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TestimonialPayload>({ resolver: zodResolver(testimonialSchema) });

  const onSubmit = (data: TestimonialPayload) => {
    setStatus("submitting");

    const message = [
      `*${tf("messageTitle")}*`,
      `${tf("name")}: ${data.name}`,
      data.roleCompany ? `${tf("roleCompany")}: ${data.roleCompany}` : null,
      "",
      data.comment,
    ]
      .filter(Boolean)
      .join("\n");

    const url = buildWhatsAppUrl(social.whatsapp, message);

    try {
      const opened = window.open(url, "_blank", "noopener,noreferrer");
      if (!opened) window.location.assign(url);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease }}
      className="mx-auto flex w-full max-w-xl flex-col gap-6 rounded-lg border border-border-soft p-8 md:p-10"
    >
      <div className="flex flex-col gap-2 text-center">
        <h3 className="text-xl font-medium text-fg">{t("formTitle")}</h3>
        <p className="text-sm text-fg-muted">{t("formSubtitle")}</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
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
          <Field label={tf("roleCompany")}>
            <input
              {...register("roleCompany")}
              type="text"
              placeholder={tf("roleCompanyPlaceholder")}
              className={inputClass}
            />
          </Field>
        </div>

        <Field label={tf("comment")} error={errors.comment && tf("errors.comment")}>
          <textarea
            {...register("comment")}
            rows={4}
            placeholder={tf("commentPlaceholder")}
            className={cn(inputClass, "resize-none")}
          />
        </Field>

        <p className="text-xs text-fg-faint">{tf("hint")}</p>

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
      </form>
    </motion.div>
  );
}

const inputClass =
  "w-full rounded-md border border-border-soft bg-bg px-4 py-3 text-sm text-fg placeholder:text-fg-faint outline-none transition-colors focus:border-accent";

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
