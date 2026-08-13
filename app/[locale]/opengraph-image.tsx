import { ImageResponse } from "next/og";
import { buildOgImageElement, ogImageSize } from "@/lib/ogImage";

export const size = ogImageSize;
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return new ImageResponse(buildOgImageElement(locale), { ...size });
}
