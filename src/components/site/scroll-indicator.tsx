"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * A subtle scroll indicator at the bottom of the hero section.
 * Animated mouse/chevron that bounces gently. Respects reduced motion.
 */
export function ScrollIndicator() {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className="flex flex-col items-center gap-2 text-background/50">
        <span className="eyebrow-sm">Scroll</span>
        <span className="text-xs" aria-hidden>↓</span>
      </div>
    );
  }

  return (
    <motion.div
      className="flex flex-col items-center gap-2 text-background/50"
      animate={{ y: [0, 6, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden
    >
      <span className="eyebrow-sm">Scroll</span>
      <svg
        width="16"
        height="24"
        viewBox="0 0 16 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="0.5"
          width="15"
          height="23"
          rx="7.5"
          stroke="currentColor"
          strokeOpacity="0.4"
        />
        <motion.rect
          x="7"
          y="5"
          width="2"
          height="6"
          rx="1"
          fill="currentColor"
          animate={{ y: [5, 11, 5], opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </motion.div>
  );
}
