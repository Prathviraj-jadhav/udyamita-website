"use client";

import * as React from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { Reveal, SectionLabel } from "@/components/site/primitives";
import { easeSwiss } from "@/lib/content";

/**
 * Side-by-side comparison of the traditional vendor flow (3 steps,
 * struck-through) and the Udyamita Growth OS flow (10 steps, animated rail).
 */
export function WhyUdyamitaComparison({
  traditional,
  udyamita,
}: {
  traditional: string[];
  udyamita: string[];
}) {
  const reduce = useReducedMotion();
  const railRef = React.useRef<HTMLDivElement>(null);
  const inView = useInView(railRef, { once: true, margin: "-100px" });

  return (
    <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-12">
      {/* Traditional vendor flow - muted, struck-through */}
      <div className="lg:col-span-4">
        <Reveal>
          <SectionLabel className="text-muted-foreground">
            Traditional vendor
          </SectionLabel>
          <div className="mt-6 flex flex-col">
            {traditional.map((step, i) => (
              <div
                key={step}
                className="flex items-center gap-4 border-t border-border py-5"
              >
                <span className="eyebrow-sm tnum text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-serif text-2xl text-muted-foreground line-through decoration-1">
                  {step}
                </span>
              </div>
            ))}
            <div className="border-t border-border py-5">
              <p className="text-sm text-muted-foreground">
                Then repeat. Nothing compounds. Nothing is measured.
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Udyamita rail */}
      <div className="lg:col-span-8 min-w-0" ref={railRef}>
        <Reveal>
          <SectionLabel>Udyamita Growth OS</SectionLabel>
        </Reveal>
        <div className="mt-6 overflow-x-auto no-scrollbar">
          <div className="relative min-w-[640px] pb-2">
            {/* baseline */}
            <div className="absolute left-0 right-0 top-[1.4rem] h-px bg-border" />
            <motion.div
              className="absolute left-0 top-[1.4rem] h-px bg-foreground"
              initial={{ width: "0%" }}
              animate={inView && !reduce ? { width: "100%" } : { width: "0%" }}
              transition={{ duration: 1.6, ease: easeSwiss, delay: 0.2 }}
              aria-hidden
            />
            <ol className="grid grid-flow-col auto-cols-fr">
              {udyamita.map((step, i) => (
                <li key={step} className="relative pt-12">
                  <motion.span
                    className="absolute left-0 top-[1.05rem] block h-3 w-3 rounded-full border-2 border-foreground bg-background"
                    initial={reduce ? false : { scale: 0, opacity: 0 }}
                    animate={
                      inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
                    }
                    transition={{
                      duration: 0.3,
                      ease: easeSwiss,
                      delay: 0.3 + i * 0.1,
                    }}
                    aria-hidden
                  />
                  <motion.div
                    initial={reduce ? false : { opacity: 0, y: 8 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                    transition={{
                      duration: 0.4,
                      ease: easeSwiss,
                      delay: 0.4 + i * 0.1,
                    }}
                  >
                    <span className="eyebrow-sm tnum text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-1 font-serif text-base leading-tight">
                      {step}
                    </p>
                  </motion.div>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <Reveal delay={0.2}>
          <p className="mt-10 max-w-lg text-sm text-muted-foreground leading-relaxed">
            Ten stages, run in order, measured at every step. Each stage lifts
            the next - so the business runs better every quarter, not just this
            quarter.
          </p>
        </Reveal>
      </div>
    </div>
  );
}
