import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { LocalizedText } from "@/data/projects";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function pickLocalized(text: LocalizedText, locale: string): string {
  return text[locale as keyof LocalizedText] ?? text.pt;
}
