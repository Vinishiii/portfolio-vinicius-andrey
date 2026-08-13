"use client";

import { useRef, type PointerEvent as ReactPointerEvent } from "react";

/**
 * Subtle magnetic-button effect: the element leans toward the pointer
 * within its own bounds, then eases back to rest on pointer leave.
 */
export function useMagnetic<T extends HTMLElement>(strength = 0.35) {
  const ref = useRef<T | null>(null);

  const onPointerMove = (event: ReactPointerEvent<T>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * strength;
    const y = (event.clientY - rect.top - rect.height / 2) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };

  const onPointerLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
  };

  return { ref, onPointerMove, onPointerLeave };
}
