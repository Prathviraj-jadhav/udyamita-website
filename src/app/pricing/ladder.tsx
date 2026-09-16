"use client";

import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { easeSwiss } from "@/lib/content";

type Rung = {
  no: string;
  name: string;
  problem: string;
  services: readonly string[];
  indicative: string;
  timeToValue: string;
  nextRung: string;
};

/**
 * Pricing ladder as an accordion of full-width cards.
 * Default open = first rung.
 */
export function PricingLadder({ rungs }: { rungs: readonly Rung[] }) {
  const [open, setOpen] = React.useState(0);
  const reduce = useReducedMotion();

  return (
    <div className="flex flex-col">
      {rungs.map((rung, i) => {
        const isOpen = open === i;
        return (
          <div
            key={rung.no}
            className={cn(
              "border-t border-border",
              i === rungs.length - 1 && "border-b",
            )}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-5 py-6 text-left sm:py-8"
              aria-expanded={isOpen}
              aria-controls={`rung-${rung.no}-panel`}
              id={`rung-${rung.no}-trigger`}
            >
              <span className="eyebrow-sm tnum text-muted-foreground w-10">
                {rung.no}
              </span>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                <span className="font-serif text-2xl sm:text-3xl">
                  {rung.name}
                </span>
                <span className="hidden sm:inline text-xs text-muted-foreground">
                  {rung.indicative}
                </span>
                <span className="sm:hidden text-xs text-muted-foreground">
                  {rung.indicative}
                </span>
              </div>
              <span
                className={cn(
                  "mr-2 inline-flex h-9 w-9 items-center justify-center rounded-full border text-sm transition-all duration-300",
                  isOpen
                    ? "rotate-45 border-foreground bg-foreground text-background"
                    : "border-foreground/20 text-foreground group-hover:border-foreground/50",
                )}
                aria-hidden
              >
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="panel"
                  id={`rung-${rung.no}-panel`}
                  role="region"
                  aria-labelledby={`rung-${rung.no}-trigger`}
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: easeSwiss }}
                  className="overflow-hidden"
                >
                  <div className="grid gap-6 pb-8 sm:grid-cols-2 lg:grid-cols-4 pl-0 sm:pl-[3.75rem]">
                    <Detail label="Problem" text={rung.problem} />
                    <Detail label="What's included" items={rung.services} />
                    <Detail label="Indicative range" text={rung.indicative} />
                    <div className="flex flex-col gap-3">
                      <Detail
                        label="Time to first value"
                        text={rung.timeToValue}
                      />
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
