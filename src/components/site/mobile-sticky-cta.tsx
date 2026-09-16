"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * A sticky bottom CTA bar on mobile (below md).
 * Appears after scrolling past the hero, stays fixed at the bottom.
 * Provides a persistent "Run Health Check" action.
 */
export function MobileStickyCta() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      // Show after scrolling past ~1 viewport height
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-x-3 bottom-3 z-[54] md:hidden"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-2 rounded-full border border-border bg-background/95 p-1.5 shadow-lg backdrop-blur-md">
            <Link
              href="/business-health-check"
              className="group flex flex-1 items-center justify-between gap-3 rounded-full bg-foreground pl-5 pr-2 py-2.5 text-sm font-medium text-background"
            >
              <span>Run your health check</span>
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-background/30 transition-transform duration-500 group-hover:rotate-[-45deg]">
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </span>
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-medium text-foreground"
            >
              Talk
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
