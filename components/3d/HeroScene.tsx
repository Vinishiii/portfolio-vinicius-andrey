"use client";

import { Canvas } from "@react-three/fiber";
import type { MotionValue } from "framer-motion";
import { ParticleNetwork } from "./ParticleNetwork";

export function HeroScene({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  return (
    <Canvas
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 6.5], fov: 42 }}
      className="!absolute inset-0"
    >
      <ambientLight intensity={0.6} />
      <ParticleNetwork scrollProgress={scrollProgress} />
    </Canvas>
  );
}
