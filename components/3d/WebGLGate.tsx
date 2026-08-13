"use client";

import dynamic from "next/dynamic";
import type { MotionValue } from "framer-motion";
import { useTranslations } from "next-intl";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useWebGLSupport } from "@/hooks/useWebGLSupport";

const HeroScene = dynamic(() => import("./HeroScene").then((m) => m.HeroScene), {
  ssr: false,
});

function StaticFallback() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 opacity-70"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 60% 50% at 60% 35%, rgba(201,168,117,0.16), transparent 65%), radial-gradient(ellipse 45% 40% at 20% 70%, rgba(243,242,239,0.05), transparent 60%)",
      }}
    />
  );
}

export function WebGLGate({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  const reducedMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const webglSupported = useWebGLSupport();
  const t = useTranslations("a11y");

  const canRender3D = webglSupported === true && !isMobile && !reducedMotion;

  return (
    <div className="pointer-events-none absolute inset-0">
      {canRender3D ? (
        <HeroScene scrollProgress={scrollProgress} />
      ) : (
        <StaticFallback />
      )}
      {webglSupported === false && <span className="sr-only">{t("webglDisabled")}</span>}
    </div>
  );
}
