"use client";

import * as React from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * A subtle parallax wrapper for the hero video.
 * As the user scrolls, the video translates slightly slower than the content,
 * creating depth. Respects reduced motion (no transform).
 */
export function ParallaxVideo({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  if (reduce) {
    return <div ref={ref} className="absolute inset-0">{children}</div>;
  }

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0 h-[115%]"
        style={{ y }}
      >
        {children}
      </motion.div>
    </div>
  );
}
