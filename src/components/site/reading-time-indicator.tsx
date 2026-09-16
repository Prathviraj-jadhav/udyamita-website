"use client";

import * as React from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

/**
 * A sticky reading-time progress indicator for article pages.
 * Shows a small "Reading" label + a thin progress bar that fills as the
 * user scrolls through the article body. Fixed to the top-right on desktop.
 * Respects reduced motion (static fill, no spring).
 */
export function ReadingTimeIndicator({ label = "Reading" }: { label?: string }) {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  if (reduce) return null;

  return (
    <div ref={ref} className="fixed right-6 top-28 z-30 hidden lg:block">
      <div className="flex items-center gap-3">
        <span className="eyebrow-sm text-muted-foreground">{label}</span>
        <div className="relative h-1 w-24 overflow-hidden rounded-full bg-border">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full bg-foreground"
            style={{ scaleX: progress, transformOrigin: "left" }}
          />
        </div>
      </div>
    </div>
  );
}
