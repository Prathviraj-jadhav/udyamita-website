"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { brand } from "@/lib/content";

const KEY = "udyamita_cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    try {
      const v = localStorage.getItem(KEY);
      if (!v) {
        const t = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(t);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  function decide(choice: "accepted" | "declined") {
    try {
      localStorage.setItem(KEY, choice);
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-3 bottom-3 z-[55] sm:inset-x-auto sm:right-6 sm:bottom-6 sm:max-w-sm"
        >
          <div className="liquid-glass-strong rounded-2xl p-5 shadow-2xl">
            <p className="eyebrow-sm text-muted-foreground">Cookies</p>
            <p className="mt-2 text-sm leading-relaxed">
              We use cookies to measure what&apos;s useful and improve the site.
              No third-party ad tracking. See our Privacy &amp; Cookies policy.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <button
                type="button"
                onClick={() => decide("accepted")}
                className="inline-flex items-center rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
              >
                Accept
              </button>
              <button
                type="button"
                onClick={() => decide("declined")}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Decline
              </button>
            </div>
            <p className="mt-3 text-[0.7rem] text-muted-foreground">
              {brand.legalName}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
