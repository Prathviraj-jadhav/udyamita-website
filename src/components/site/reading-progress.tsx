"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * A thin progress bar fixed to the top of the viewport that fills as the
 * user scrolls down the page. Hidden on short pages and reduced-motion.
 */
export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[55] h-[3px] origin-left bg-royal"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
