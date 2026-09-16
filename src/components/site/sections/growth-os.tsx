"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { growthOS, easeSwiss } from "@/lib/content";
import {
  Reveal,
  EditorialHeading,
  SectionLabel,
  StaggerGroup,
  StaggerItem,
} from "../primitives";
import { cn } from "@/lib/utils";

export function GrowthOS() {
  const reduce = useReducedMotion();
  const [active, setActive] = React.useState(0);
  const stage = growthOS[active];

  return (
    <section id="growth-os" className="section-pad bg-foreground text-background">
      <div className="udyam-container">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel no="06" className="text-background">
                Udyamita Growth OS
              </SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <EditorialHeading className="mt-6 text-background">
                Stop guessing what to fix next.
              </EditorialHeading>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-background/70 leading-relaxed">
                Ten stages, run in order, measured at every step. The Growth OS
                turns growth from a series of opinions into a system that
                compounds.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex items-center gap-6 border-t border-background/15 pt-6">
                <div>
                  <p className="font-serif text-4xl tnum">{growthOS.length}</p>
                  <p className="eyebrow-sm text-background/60 mt-1">Stages</p>
                </div>
                <div className="h-10 w-px bg-background/15" />
                <div>
                  <p className="font-serif text-4xl">1</p>
                  <p className="eyebrow-sm text-background/60 mt-1">System</p>
                </div>
                <div className="h-10 w-px bg-background/15" />
                <div>
                  <p className="font-serif text-4xl">∞</p>
                  <p className="eyebrow-sm text-background/60 mt-1">Compounds</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            {/* Stage selector rail */}
            <div className="grid grid-cols-5 gap-px border border-background/15 bg-background/15 sm:grid-cols-10">
              {growthOS.map((s, i) => (
                <button
                  key={s.no}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={cn(
                    "relative bg-foreground px-2 py-4 text-center transition-colors",
                    active === i ? "bg-background text-foreground" : "text-background/60 hover:text-background",
                  )}
                  aria-pressed={active === i}
                >
                  <span className="block tnum text-sm font-medium">{s.no}</span>
                  <span className="mt-1 hidden text-[0.6rem] uppercase tracking-wider sm:block">
                    {s.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Stage detail */}
            <motion.div
              key={stage.no}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: easeSwiss }}
              className="mt-px border border-t-0 border-background/15 p-6 sm:p-8"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-3xl sm:text-4xl">
                  <span className="tnum text-background/40 mr-3">{stage.no}</span>
                  {stage.name}
                </h3>
                <span className="eyebrow-sm text-background/50">Stage</span>
              </div>
              <p className="mt-4 max-w-lg text-background/80">{stage.purpose}</p>

              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                <DetailBlock label="Activities" items={stage.activities} />
                <DetailBlock label="Deliverable" text={stage.deliverable} />
                <DetailBlock label="Business outcome" text={stage.outcome} />
              </div>
            </motion.div>

            {/* Mobile vertical timeline (compact) */}
            <StaggerGroup className="mt-10 hidden">
              {growthOS.map((s) => (
                <StaggerItem key={s.no}>
                  <span>{s.name}</span>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </div>
    </section>
  );
}

function DetailBlock({
  label,
  items,
  text,
}: {
  label: string;
  items?: readonly string[];
  text?: string;
}) {
  return (
    <div className="border-t border-background/15 pt-4">
      <p className="eyebrow-sm text-background/50">{label}</p>
      {items ? (
        <ul className="mt-3 space-y-1.5">
          {items.map((it) => (
            <li key={it} className="text-sm text-background/85">
              {it}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-3 text-sm text-background/85">{text}</p>
      )}
    </div>
  );
}
