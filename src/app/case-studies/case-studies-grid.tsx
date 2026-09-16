"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/lib/seo-content";
import { VideoPanel } from "@/components/site/primitives";
import { cn } from "@/lib/utils";

/**
 * Filterable grid of case-study cards. Each card surfaces:
 * - video (if available) or poster image
 * - title, sector + rung badges, summary, reading time
 * - expanding-pill hover ("circle → pill with Read text") linking to detail page
 *
 * Pure CSS hover (no JS) - works on touch via the explicit link.
 */
export function CaseStudiesGrid({ items }: { items: CaseStudy[] }) {
  // Build filter facets - preserves original order, dedupes.
  const sectors = React.useMemo(
    () => Array.from(new Set(items.map((c) => c.sector))),
    [items],
  );
  const rungs = React.useMemo(
    () => Array.from(new Set(items.map((c) => c.rung))),
    [items],
  );

  const [sector, setSector] = React.useState<string | null>(null);
  const [rung, setRung] = React.useState<string | null>(null);

  const filtered = items.filter(
    (c) =>
      (!sector || c.sector === sector) && (!rung || c.rung === rung),
  );

  const active = sector || rung;

  return (
    <section className="section-pad bg-paper" id="case-studies-grid">
      <div className="udyam-container">
        {/* Filters */}
        <div className="flex flex-col gap-6 border-b border-border pb-8">
          <div className="flex flex-col gap-3">
            <span className="eyebrow-sm text-muted-foreground">Sector</span>
            <div className="flex flex-wrap gap-2">
              <FilterPill
                active={sector === null}
                onClick={() => setSector(null)}
              >
                All
              </FilterPill>
              {sectors.map((s) => (
                <FilterPill
                  key={s}
                  active={sector === s}
                  onClick={() => setSector(sector === s ? null : s)}
                >
                  {s}
                </FilterPill>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="eyebrow-sm text-muted-foreground">Growth ladder rung</span>
            <div className="flex flex-wrap gap-2">
              <FilterPill
                active={rung === null}
                onClick={() => setRung(null)}
              >
                All
              </FilterPill>
              {rungs.map((r) => (
                <FilterPill
                  key={r}
                  active={rung === r}
                  onClick={() => setRung(rung === r ? null : r)}
                >
                  {r}
                </FilterPill>
              ))}
            </div>
          </div>
          {active && (
            <button
              type="button"
              onClick={() => {
                setSector(null);
                setRung(null);
              }}
              className="self-start text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              Clear filters ({filtered.length} shown)
            </button>
          )}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((cs) => (
              <CaseStudyCard key={cs.slug} cs={cs} />
            ))}
          </div>
        ) : (
          <div className="mt-16 border border-dashed border-border rounded-2xl p-12 text-center">
            <p className="text-muted-foreground">
              No case studies match this filter combination yet.
            </p>
            <button
              type="button"
              onClick={() => {
                setSector(null);
                setRung(null);
              }}
              className="mt-4 text-sm text-foreground underline underline-offset-4"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function FilterPill({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-4 py-1.5 text-xs font-medium transition-colors duration-200",
        active
          ? "border-foreground bg-foreground text-background"
          : "border-border bg-background text-muted-foreground hover:border-foreground/50 hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}

function CaseStudyCard({ cs }: { cs: CaseStudy }) {
  const href = `/case-studies/${cs.slug}`;
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all duration-500 hover:border-foreground/30 hover:shadow-[0_8px_30px_-12px_rgba(20,30,60,0.18)]"
    >
      {/* Media */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        {cs.video ? (
          <VideoPanel
            src={cs.video}
            poster={cs.poster}
            className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <img
            src={cs.poster}
            alt=""
            aria-hidden
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        )}
        {/* format badge */}
        <span className="absolute top-3 left-3 rounded-full bg-background/95 px-2.5 py-1 text-[0.62rem] uppercase tracking-wider text-foreground">
          {cs.format}
        </span>
        {/* expanding pill */}
        <div className="absolute bottom-3 left-3 flex items-center">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground transition-all duration-500 ease-[cubic-bezier(.25,.1,.25,1)] group-hover:w-[8.5rem]">
            <ArrowRight
              className="h-4 w-4 shrink-0 transition-transform duration-500 group-hover:rotate-[-45deg]"
              strokeWidth={1.5}
            />
            <span className="ml-0 max-w-0 overflow-hidden whitespace-nowrap text-xs font-medium opacity-0 transition-all duration-500 group-hover:ml-2 group-hover:max-w-[6rem] group-hover:opacity-100">
              Read
            </span>
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>{cs.sector}</Badge>
          <Badge variant="outline">{cs.rung}</Badge>
        </div>
        <h3 className="h-card leading-snug text-foreground">
          {cs.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {cs.summary}
        </p>
        <div className="mt-auto flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
          <span className="eyebrow-sm">Read case study</span>
          <span className="tnum">{cs.readingTime}</span>
        </div>
      </div>
    </Link>
  );
}

function Badge({
  children,
  variant = "solid",
}: {
  children: React.ReactNode;
  variant?: "solid" | "outline";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-[0.62rem] uppercase tracking-wider",
        variant === "solid"
          ? "bg-secondary text-secondary-foreground"
          : "border border-border text-muted-foreground",
      )}
    >
      {children}
    </span>
  );
}
