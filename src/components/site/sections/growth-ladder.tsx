"use client";

import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { growthLadder, easeSwiss } from "@/lib/content";
import {
  Reveal,
  EditorialHeading,
  SectionLabel,
  TextRollButton,
} from "../primitives";
import { cn } from "@/lib/utils";

export function GrowthLadder() {
  const [open, setOpen] = React.useState(0);
  const reduce = useReducedMotion();

  return (
    <section id="ladder" className="section-pad bg-paper">
      <div className="udyam-container">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionLabel no="08">Growth Ladder</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <EditorialHeading className="mt-6">
                Start where the problem starts.
              </EditorialHeading>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 font-serif italic text-2xl text-muted-foreground">
                Grow from there.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-sm text-muted-foreground leading-relaxed">
                Six rungs, from getting discovered to becoming an enterprise
                growth partner. Each one has a problem, a deliverable, a price
                band and a clear next step.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8">
                <TextRollButton href="/contact" variant="ghost">
                  See full pricing
                </TextRollButton>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="flex flex-col">
              {growthLadder.map((rung, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={rung.no}
                    className={cn(
                      "border-t border-border",
                      i === growthLadder.length - 1 && "border-b",
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-5 py-6 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="eyebrow-sm tnum text-muted-foreground w-10">
                        {rung.no}
                      </span>
                      <div className="flex items-baseline gap-4">
                        <span
                          className={cn(
                            "font-serif text-2xl sm:text-3xl transition-colors",
                            isOpen ? "text-foreground" : "text-foreground",
                          )}
                        >
                          {rung.name}
                        </span>
                        <span className="hidden sm:inline text-xs text-muted-foreground">
                          {rung.indicative}
                        </span>
                      </div>
                      <span
                        className={cn(
                          "mr-2 inline-flex h-9 w-9 items-center justify-center rounded-full border text-sm transition-all",
                          isOpen
                            ? "rotate-45 border-foreground bg-foreground text-background"
                            : "border-foreground/20 text-foreground",
                        )}
                        aria-hidden
                      >
                        +
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={reduce ? false : { height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                          transition={{ duration: 0.45, ease: easeSwiss }}
                          className="overflow-hidden"
                        >
                          <div className="grid gap-6 pb-8 sm:grid-cols-2 lg:grid-cols-4 pl-0 sm:pl-[3.75rem]">
                            <Detail label="Problem" text={rung.problem} />
                            <Detail
                              label="Deliverables"
                              items={rung.services}
                            />
                            <Detail
                              label="Indicative range"
                              text={rung.indicative}
                            />
                            <div className="flex flex-col gap-2">
                              <Detail label="Time to first value" text={rung.timeToValue} />
                              <Detail label="Next rung" text={rung.nextRung} />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Detail({
  label,
  text,
  items,
}: {
  label: string;
  text?: string;
  items?: readonly string[];
}) {
  return (
    <div className="border-t border-border pt-3">
      <p className="eyebrow-sm text-muted-foreground">{label}</p>
      {items ? (
        <ul className="mt-2 space-y-1">
          {items.map((it) => (
            <li key={it} className="text-sm">
              {it}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-2 text-sm">{text}</p>
      )}
    </div>
  );
}
