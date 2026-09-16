"use client";

import { motion, useReducedMotion } from "framer-motion";
import { easeSwiss } from "@/lib/content";

/**
 * An animated section divider - a thin line with a numbered marker that
 * draws in on scroll. Used between homepage sections for editorial rhythm.
 */
export function SectionDivider({
  no,
  label,
  variant = "light",
}: {
  no?: string;
  label?: string;
  variant?: "light" | "dark";
}) {
  const reduce = useReducedMotion();
  const dark = variant === "dark";

  return (
    <div
      className={`udyam-container ${
        dark ? "text-background" : "text-foreground"
      }`}
      aria-hidden
    >
      <div className="flex items-center gap-4 py-6">
        {no && (
          <span
            className={`eyebrow-sm tnum ${dark ? "text-background/50" : "text-muted-foreground"}`}
          >
            {no}
          </span>
        )}
        <motion.span
          className="block h-px flex-1 origin-left"
          style={{ backgroundColor: dark ? "currentColor" : "var(--border)" }}
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: easeSwiss }}
        />
        {label && (
          <span
            className={`eyebrow-sm ${dark ? "text-background/50" : "text-muted-foreground"}`}
          >
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
