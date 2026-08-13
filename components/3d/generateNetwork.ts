// Deterministic PRNG (mulberry32) so the network shape is stable across renders.
function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export type NetworkData = {
  positions: Float32Array;
  accentMask: Float32Array;
  linePositions: Float32Array;
};

/**
 * Scatters points across a flattened, slightly irregular lattice volume —
 * evocative of a data graph / neural structure rather than a generic sphere.
 */
export function generateNetwork(
  count: number,
  connectionDistance: number,
  seed = 7
): NetworkData {
  const rand = mulberry32(seed);
  const positions = new Float32Array(count * 3);
  const accentMask = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    const radius = 2.6 + rand() * 1.4;
    const theta = rand() * Math.PI * 2;
    const phi = Math.acos(2 * rand() - 1);

    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.62;
    positions[i * 3 + 2] = radius * Math.cos(phi) * 0.85;

    accentMask[i] = rand() < 0.07 ? 1 : 0;
  }

  const segments: number[] = [];
  for (let i = 0; i < count; i++) {
    let links = 0;
    for (let j = i + 1; j < count && links < 3; j++) {
      const dx = positions[i * 3] - positions[j * 3];
      const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
      const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
      if (dist < connectionDistance) {
        segments.push(
          positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
          positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
        );
        links++;
      }
    }
  }

  return {
    positions,
    accentMask,
    linePositions: new Float32Array(segments),
  };
}
