import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  projectType: z.enum(["job", "freelance", "product", "consulting", "other"]),
  message: z.string().min(10),
});

export type ContactPayload = z.infer<typeof contactSchema>;

export interface ContactProvider {
  send(payload: ContactPayload): Promise<{ ok: boolean }>;
}

/**
 * Placeholder provider — logs the message server-side and reports success.
 * Swap this for a real integration (Resend, Formspree, Supabase, own API)
 * once one is configured; the rest of the app only depends on the
 * `ContactProvider` interface above, so nothing else needs to change.
 */
const devNullProvider: ContactProvider = {
  async send(payload) {
    console.info("[contact] no provider configured, message received:", payload);
    return { ok: true };
  },
};

export const contactProvider: ContactProvider = devNullProvider;

/**
 * WhatsApp has no free way to receive automated, business-initiated
 * messages without a paid/verified Business API integration. Instead, we
 * build a wa.me deep link with the message pre-filled — the visitor's own
 * WhatsApp opens with everything typed in, and they just hit send. The
 * message lands in Vinícius's WhatsApp for real, with no backend or API
 * keys required.
 */
export function buildWhatsAppUrl(phoneDigits: string, text: string): string {
  return `https://wa.me/${phoneDigits}?text=${encodeURIComponent(text)}`;
}
