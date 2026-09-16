"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { growthLeaks, easeSwiss } from "@/lib/content";
import { Reveal, EditorialHeading, TextRollButton, SectionLabel } from "../primitives";
import { cn } from "@/lib/utils";

export function GrowthLeaks() {
  const [active, setActive] = React.useState(0);
  const reduce = useReducedMotion();

  return (
    <section id="growth-leaks" className="section-pad bg-background">
      <div className="udyam-container">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel no="04">Growth Leaks</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <EditorialHeading className="mt-6">
                Most businesses don&apos;t have a marketing problem.
              </EditorialHeading>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 font-serif italic text-2xl sm:text-3xl text-foreground">
                They have a growth leak.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-md text-muted-foreground leading-relaxed">
                Growth rarely breaks in one place. It leaks - quietly, across
                four stages. Find the leak, and you find the next move worth
                making.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8">
                <TextRollButton href="/business-health-check" variant="primary">
                  Find your biggest growth leak
                </TextRollButton>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="flex flex-col">
              {growthLeaks.map((leak, i) => {
                const Icon = leak.icon;
                const isActive = active === i;
                return (
                  <button
                    key={leak.key}
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={cn(
                      "group relative grid grid-cols-[auto_1fr_auto] items-center gap-5 border-t border-border py-6 text-left transition-colors",
                      i === growthLeaks.length - 1 && "border-b",
                      isActive ? "bg-paper/60" : "hover:bg-paper/40",
                    )}
                  >
                    <span className="eyebrow-sm tnum text-muted-foreground w-8">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex items-start gap-4">
                      <Icon
                        className="mt-1 h-5 w-5 shrink-0 text-foreground"
                        strokeWidth={1.25}
                      />
                      <div>
                        <div className="flex items-baseline gap-3">
                          <span className="eyebrow text-foreground">{leak.key}</span>
                        </div>
                        <p className="mt-1 font-serif text-xl sm:text-2xl leading-snug">
                          {leak.title}
                        </p>
                        <motion.div
                          initial={false}
                          animate={{
                            height: isActive ? "auto" : 0,
                            opacity: isActive ? 1 : 0,
                          }}
                          transition={{ duration: 0.4, ease: easeSwiss }}
                          className="overflow-hidden"
                        >
                          <p className="mt-3 max-w-xl text-sm text-muted-foreground leading-relaxed">
                            {leak.detail}
                          </p>
                        </motion.div>
                      </div>
                    </div>
                    <span
                      className={cn(
                        "mr-4 inline-flex h-9 w-9 items-center justify-center rounded-full border text-xs transition-all",
                        isActive
                          ? "border-foreground bg-foreground text-background"
                          : "border-foreground/20 text-foreground",
                      )}
                      aria-hidden
                    >
                      {isActive ? "-" : "+"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
