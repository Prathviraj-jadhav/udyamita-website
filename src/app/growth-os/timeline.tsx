"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { easeSwiss } from "@/lib/content";
import { StaggerGroup, StaggerItem } from "@/components/site/primitives";
import { ChevronDown } from "lucide-react";

type Stage = {
  no: string;
  name: string;
  purpose: string;
  activities: readonly string[];
  deliverable: string;
  outcome: string;
};

/**
 * Interactive 10-stage timeline.
 * - Desktop: clickable stage rail + detail panel.
 * - Mobile: vertical accordion.
 */
export function GrowthOSTimeline({ stages }: { stages: readonly Stage[] }) {
  const reduce = useReducedMotion();
  const [active, setActive] = React.useState(0);
  const stage = stages[active];

  return (
    <div>
      {/* ===== Desktop / tablet: rail + detail panel ===== */}
      <div className="hidden sm:block">
        <div className="grid grid-cols-5 gap-px border border-border bg-border sm:grid-cols-10">
          {stages.map((s, i) => {
            const isActive = active === i;
            return (
              <button
                key={s.no}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className={cn(
                  "relative bg-background px-2 py-4 text-center transition-colors",
                  isActive
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground",
                )}
                aria-pressed={isActive}
                aria-label={`Stage ${s.no}: ${s.name}`}
              >
                <span className="block tnum text-sm font-medium">{s.no}</span>
                <span className="mt-1 hidden text-[0.6rem] uppercase tracking-wider md:block">
                  {s.name}
                </span>
              </button>
            );
          })}
        </div>

        <motion.div
          key={stage.no}
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: easeSwiss }}
          className={cn(
            "mt-px border border-t-0 border-border p-6 sm:p-8",
            "bg-paper",
          )}
        >
          <div className="flex items-baseline justify-between">
            <h3 className="font-serif text-3xl sm:text-4xl">
              <span className="tnum text-muted-foreground/40 mr-3">{stage.no}</span>
              {stage.name}
            </h3>
            <span className="eyebrow-sm text-muted-foreground">Stage</span>
          </div>
          <p className="mt-4 max-w-lg text-foreground/80">{stage.purpose}</p>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <DetailBlock label="Activities" items={stage.activities} />
            <DetailBlock label="Deliverable" text={stage.deliverable} />
            <DetailBlock label="Business outcome" text={stage.outcome} />
          </div>
        </motion.div>
      </div>

      {/* ===== Mobile: vertical accordion ===== */}
      <div className="sm:hidden">
        <StaggerGroup className="flex flex-col">
          {stages.map((s, i) => (
            <StaggerItem key={s.no} className="border-t border-border last:border-b">
              <MobileStageRow stage={s} defaultOpen={i === 0} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </div>
  );
}

function MobileStageRow({
  stage,
  defaultOpen,
}: {
  stage: Stage;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = React.useState(!!defaultOpen);
  const reduce = useReducedMotion();
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="eyebrow-sm tnum text-muted-foreground w-8">{stage.no}</span>
        <span className="font-serif text-xl flex-1">{stage.name}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-muted-foreground transition-transform",
            open && "rotate-180",
          )}
          strokeWidth={1.5}
        />
      </button>
      <motion.div
        initial={false}
        animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.35, ease: easeSwiss }}
        className="overflow-hidden"
      >
        <div className="pb-6 pl-12 pr-1 flex flex-col gap-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {stage.purpose}
          </p>
          <DetailBlock label="Activities" items={stage.activities} compact />
          <DetailBlock label="Deliverable" text={stage.deliverable} compact />
          <DetailBlock label="Outcome" text={stage.outcome} compact />
        </div>
      </motion.div>
    </div>
  );
}

function DetailBlock({
  label,
  items,
  text,
  compact,
}: {
  label: string;
  items?: readonly string[];
  text?: string;
  compact?: boolean;
}) {
  return (
    <div className={cn("border-t border-border pt-3", compact && "border-t border-border/60")}>
      <p className="eyebrow-sm text-muted-foreground">{label}</p>
      {items ? (
        <ul className={cn("mt-2 space-y-1", compact ? "text-xs" : "text-sm")}>
          {items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      ) : (
        <p className={cn("mt-2", compact ? "text-xs" : "text-sm")}>{text}</p>
      )}
    </div>
  );
}

/** How the stages compound - a small visualization. */
export function CompoundsRail({ stages }: { stages: readonly Stage[] }) {
  return (
    <StaggerGroup className="flex flex-wrap items-center gap-y-3 gap-x-2 text-sm">
      {stages.map((s, i) => (
        <StaggerItem
          key={s.no}
          className="flex items-center gap-2"
        >
          <span className="inline-flex items-baseline gap-2 rounded-full border border-border px-3 py-1.5">
            <span className="eyebrow-sm tnum text-muted-foreground">{s.no}</span>
            <span className="font-serif text-base">{s.name}</span>
          </span>
          {i < stages.length - 1 && (
            <span aria-hidden className="text-muted-foreground/50">
              →
            </span>
          )}
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
