"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import type { MotionValue } from "framer-motion";
import { generateNetwork } from "./generateNetwork";

const FG = new THREE.Color("#f3f2ef");
const ACCENT = new THREE.Color("#c9a875");

export function ParticleNetwork({
  scrollProgress,
  pointCount = 220,
}: {
  scrollProgress: MotionValue<number>;
  pointCount?: number;
}) {
  const group = useRef<THREE.Group>(null);
  const targetRotation = useRef({ x: 0, y: 0 });

  const { positions, linePositions, colors } = useMemo(() => {
    const data = generateNetwork(pointCount, 1.15);
    const colorArray = new Float32Array(pointCount * 3);
    for (let i = 0; i < pointCount; i++) {
      const c = data.accentMask[i] ? ACCENT : FG;
      colorArray[i * 3] = c.r;
      colorArray[i * 3 + 1] = c.g;
      colorArray[i * 3 + 2] = c.b;
    }
    return { ...data, colors: colorArray };
  }, [pointCount]);

  useFrame((state, delta) => {
    if (!group.current) return;

    targetRotation.current.x = state.pointer.y * 0.18;
    targetRotation.current.y = state.pointer.x * 0.26;

    const scroll = scrollProgress.get();
    const damp = 1 - Math.pow(0.001, delta);

    group.current.rotation.x +=
      (targetRotation.current.x - group.current.rotation.x) * damp;
    group.current.rotation.y +=
      (targetRotation.current.y + scroll * 1.1 - group.current.rotation.y) * damp;
    group.current.rotation.z +=
      (scroll * 0.35 - group.current.rotation.z) * damp;

    group.current.position.z = -scroll * 1.4;
    group.current.rotation.y += delta * 0.035;
  });

  return (
    <group ref={group}>
      <Points positions={positions} colors={colors} stride={3}>
        <PointMaterial
          transparent
          vertexColors
          size={0.045}
          sizeAttenuation
          depthWrite={false}
          opacity={0.9}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#f3f2ef"
          transparent
          opacity={0.08}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}
