/**
 * Analytics is intentionally disabled until a real provider (GA, Plausible,
 * Vercel Analytics) and IDs are configured. Never hardcode placeholder IDs.
 */
export const analyticsConfig = {
  enabled: false,
  provider: null as "google" | "plausible" | "vercel" | null,
};
