"use client";

import * as React from "react";
import Link from "next/link";
import { Check, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ServiceSummary = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  problem: string;
  pricingNote: string;
  deliverables: string[];
  outcomes: string[];
};

const categories = ["All", "Discover", "Trust", "Generate", "Convert", "Scale", "Measure"];

export function CompareClient({ services }: { services: ServiceSummary[] }) {
  const [activeCat, setActiveCat] = React.useState("All");
  const [selected, setSelected] = React.useState<string[]>(services.slice(0, 3).map((s) => s.slug));

  const filtered = activeCat === "All" ? services : services.filter((s) => s.category === activeCat);

  function toggle(slug: string) {
    setSelected((prev) => {
      if (prev.includes(slug)) {
        return prev.filter((s) => s !== slug);
      }
      if (prev.length >= 4) return [...prev.slice(1), slug];
      return [...prev, slug];
    });
  }

  const compared = services.filter((s) => selected.includes(s.slug));

  return (
    <div>
      {/* Category filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCat(cat)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              activeCat === cat
                ? "border-foreground bg-foreground text-background"
                : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-muted-foreground">
        Select up to 4 services to compare ({selected.length}/4 selected)
      </p>

      {/* Service selector grid */}
      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((s) => {
          const isSelected = selected.includes(s.slug);
          return (
            <button
              key={s.slug}
              type="button"
              onClick={() => toggle(s.slug)}
              className={cn(
                "group flex flex-col gap-2 rounded-xl border p-4 text-left transition-all",
                isSelected
                  ? "border-foreground bg-foreground/5"
                  : "border-border hover:border-foreground/40",
              )}
            >
              <div className="flex items-center justify-between">
                <span className="eyebrow-sm text-muted-foreground">{s.category}</span>
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
              <span className="font-serif text-base leading-snug">{s.name}</span>
              <span className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                {s.tagline}
              </span>
            </button>
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
                {compared.map((s) => (
                  <th key={s.slug} className="border-b border-border p-4 text-left align-bottom">
                    <Link
                      href={`/services/${s.slug}`}
                      className="group inline-flex flex-col gap-1"
                    >
                      <span className="eyebrow-sm text-muted-foreground">{s.category}</span>
                      <span className="font-serif text-lg leading-tight group-hover:text-royal transition-colors">
                        {s.name}
                      </span>
                    </Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <Row label="Tagline" compared={compared} render={(s) => s.tagline} />
              <Row label="Problem" compared={compared} render={(s) => s.problem} />
              <Row
                label="Pricing"
                compared={compared}
                render={(s) => (
                  <span className="font-medium text-foreground">{s.pricingNote}</span>
                )}
              />
              <Row
                label="Deliverables"
                compared={compared}
                render={(s) => (
                  <ul className="flex flex-col gap-1.5">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-foreground" strokeWidth={2} />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                )}
              />
              <Row
                label="Outcomes"
                compared={compared}
                render={(s) => (
                  <ul className="flex flex-col gap-1.5">
                    {s.outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-2 text-sm">
                        <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground" strokeWidth={1.5} />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                )}
              />
              <tr>
                <td className="border-b border-border p-4">
                  <span className="eyebrow-sm text-muted-foreground">Action</span>
                </td>
                {compared.map((s) => (
                  <td key={s.slug} className="border-b border-border p-4">
                    <Link
                      href={`/services/${s.slug}`}
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
          <p className="mt-4 font-serif text-lg">Select services to compare.</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Pick up to 4 services from the grid above to see a side-by-side comparison.
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
  compared: ServiceSummary[];
  render: (s: ServiceSummary) => React.ReactNode;
}) {
  return (
    <tr>
      <td className="border-b border-border p-4 align-top">
        <span className="eyebrow-sm text-muted-foreground">{label}</span>
      </td>
      {compared.map((s) => (
        <td key={s.slug} className="border-b border-border p-4 align-top text-sm text-muted-foreground leading-relaxed">
          {render(s)}
        </td>
      ))}
    </tr>
  );
}
