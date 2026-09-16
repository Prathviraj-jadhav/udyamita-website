"use client";

import * as React from "react";
import Link from "next/link";
import { Check, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type IndustrySummary = {
  slug: string;
  name: string;
  tier: 1 | 2 | 3;
  headline: string;
  pain: string;
  growthLeaks: string[];
  recommendedRung: string;
  services: string[];
  technology: string[];
};

const tierLabels: Record<number, string> = {
  1: "Tier 1 - Priority",
  2: "Tier 2 - Growth",
  3: "Tier 3 - Enterprise",
};

const tiers = [1, 2, 3] as const;

export function IndustriesCompareClient({
  industries,
}: {
  industries: IndustrySummary[];
}) {
  const [selected, setSelected] = React.useState<string[]>(
    industries.slice(0, 3).map((i) => i.slug),
  );

  function toggle(slug: string) {
    setSelected((prev) => {
      if (prev.includes(slug)) {
        return prev.filter((s) => s !== slug);
      }
      if (prev.length >= 4) return [...prev.slice(1), slug];
      return [...prev, slug];
    });
  }

  const compared = industries.filter((i) => selected.includes(i.slug));

  return (
    <div>
      {/* Tier filter info */}
      <p className="text-sm text-muted-foreground">
        Select up to 4 industries to compare ({selected.length}/4 selected)
      </p>

      {/* Industry selector grid grouped by tier */}
      <div className="mt-4 flex flex-col gap-6">
        {tiers.map((tier) => {
          const tierIndustries = industries.filter((i) => i.tier === tier);
          if (tierIndustries.length === 0) return null;
          return (
            <div key={tier}>
              <p className="eyebrow text-muted-foreground mb-3">
                {tierLabels[tier]}
              </p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
                {tierIndustries.map((ind) => {
                  const isSelected = selected.includes(ind.slug);
                  return (
                    <button
                      key={ind.slug}
                      type="button"
                      onClick={() => toggle(ind.slug)}
                      className={cn(
                        "group flex flex-col gap-1.5 rounded-xl border p-3 text-left transition-all",
                        isSelected
                          ? "border-foreground bg-foreground/5"
                          : "border-border hover:border-foreground/40",
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <span className="eyebrow-sm text-muted-foreground">
                          Tier {ind.tier}
                        </span>
                        <span
                          className={cn(
                            "inline-flex h-5 w-5 items-center justify-center rounded-full border text-xs transition-colors",
                            isSelected
                              ? "border-foreground bg-foreground text-background"
                              : "border-border text-transparent",
                          )}
                        >
                          <Check className="h-3 w-3" strokeWidth={2} />
                        </span>
                      </div>
                      <span className="font-serif text-sm leading-snug">
                        {ind.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Comparison table */}
      {compared.length > 0 ? (
        <div className="mt-12 overflow-x-auto udyam-scroll">
          <table className="w-full min-w-[640px] border-collapse">
            <thead>
              <tr>
                <th className="w-32 border-b border-border p-4 text-left align-bottom">
                  <span className="eyebrow-sm text-muted-foreground">Compare</span>
                </th>
                {compared.map((ind) => (
                  <th
                    key={ind.slug}
                    className="border-b border-border p-4 text-left align-bottom"
                  >
                    <Link
                      href={`/industries/${ind.slug}`}
                      className="group inline-flex flex-col gap-1"
                    >
                      <span className="eyebrow-sm text-muted-foreground">
                        {tierLabels[ind.tier]}
                      </span>
                      <span className="font-serif text-lg leading-tight group-hover:text-royal transition-colors">
                        {ind.name}
                      </span>
                    </Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <Row
                label="Headline"
                compared={compared}
                render={(i) => i.headline}
              />
              <Row
                label="The pain"
                compared={compared}
                render={(i) => i.pain}
              />
              <Row
                label="Recommended rung"
                compared={compared}
                render={(i) => (
                  <Link
                    href="/pricing"
                    className="inline-flex items-center gap-1.5 font-medium text-foreground hover:gap-2.5 transition-all"
                  >
                    {i.recommendedRung}
                    <ArrowRight className="h-3 w-3" strokeWidth={1.5} />
                  </Link>
                )}
              />
              <Row
                label="Growth leaks"
                compared={compared}
                render={(i) => (
                  <ul className="flex flex-col gap-1.5">
                    {i.growthLeaks.map((leak, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm"
                      >
                        <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-foreground/40" />
                        <span>{leak}</span>
                      </li>
                    ))}
                  </ul>
                )}
              />
              <Row
                label="Services"
                compared={compared}
                render={(i) => (
                  <div className="flex flex-wrap gap-1">
                    {i.services.map((s) => (
                      <Link
                        key={s}
                        href={`/services/${s}`}
                        className="inline-flex items-center rounded-full border border-border px-2 py-0.5 text-[0.65rem] text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                      >
                        {s.replace(/-/g, " ")}
                      </Link>
                    ))}
                  </div>
                )}
              />
              <Row
                label="Technology"
                compared={compared}
                render={(i) => (
                  <div className="flex flex-wrap gap-1">
                    {i.technology.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-full bg-foreground/5 px-2 py-0.5 text-[0.65rem] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              />
              <tr>
                <td className="border-b border-border p-4">
                  <span className="eyebrow-sm text-muted-foreground">Action</span>
                </td>
                {compared.map((ind) => (
                  <td key={ind.slug} className="border-b border-border p-4">
                    <Link
                      href={`/industries/${ind.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:gap-2.5 transition-all"
                    >
                      View details
                      <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div className="mt-12 rounded-2xl border border-border bg-paper p-8 text-center">
          <X className="mx-auto h-8 w-8 text-muted-foreground" strokeWidth={1} />
          <p className="mt-4 font-serif text-lg">Select industries to compare.</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Pick up to 4 industries from the grid above to see a side-by-side comparison.
          </p>
        </div>
      )}
    </div>
  );
}

function Row({
  label,
  compared,
  render,
}: {
  label: string;
  compared: IndustrySummary[];
  render: (i: IndustrySummary) => React.ReactNode;
}) {
  return (
    <tr>
      <td className="border-b border-border p-4 align-top">
        <span className="eyebrow-sm text-muted-foreground">{label}</span>
      </td>
      {compared.map((i) => (
        <td
          key={i.slug}
          className="border-b border-border p-4 align-top text-sm text-muted-foreground leading-relaxed"
        >
          {render(i)}
        </td>
      ))}
    </tr>
  );
}
