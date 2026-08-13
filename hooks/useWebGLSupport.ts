"use client";

import { useSyncExternalStore } from "react";

let cached: boolean | null = null;

function detectWebGL(): boolean {
  if (cached !== null) return cached;
  try {
    const canvas = document.createElement("canvas");
    cached = !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl2") || canvas.getContext("webgl"))
    );
  } catch {
    cached = false;
  }
  return cached;
}

function subscribe() {
  return () => {};
}

function getServerSnapshot() {
  return null;
}

/** Returns `null` while detection hasn't run yet (server / first paint). */
export function useWebGLSupport(): boolean | null {
  return useSyncExternalStore(subscribe, detectWebGL, getServerSnapshot);
}
