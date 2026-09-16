"use client";

import Link from "next/link";
import { industries, industryIcon } from "@/lib/content";
import {
  Reveal,
  EditorialHeading,
  SectionLabel,
  StaggerGroup,
  StaggerItem,
} from "../primitives";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

const tierLabel: Record<number, string> = {
  1: "Tier 1 - Priority",
  2: "Tier 2 - Growth",
  3: "Tier 3 - Enterprise",
};

function industrySlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s*\/\s*/g, "-")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

export function Industries() {
  return (
    <section id="industries" className="section-pad bg-background">
      <div className="udyam-container">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <Reveal>
              <SectionLabel no="11">Industries</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <EditorialHeading className="mt-6">
                The leak changes by industry. The system doesn&apos;t.
              </EditorialHeading>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-muted-foreground leading-relaxed">
              We sequence segments instead of selling everything to everyone.
              Each industry has a characteristic growth leak - and a recommended
              ladder rung.
            </p>
          </Reveal>
        </div>

        <StaggerGroup className="mt-12 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => {
            const Icon = industryIcon(ind.name);
            const slug = industrySlug(ind.name);
            return (
              <StaggerItem key={ind.name} className="bg-background">
                <Link
                  href={`/industries/${slug}`}
                  className="group relative flex h-full flex-col p-6 transition-colors hover:bg-paper"
                >
                  <div className="flex items-start justify-between">
                    <Icon
                      className="h-6 w-6 text-foreground transition-transform duration-300 group-hover:scale-110"
                      strokeWidth={1.25}
                    />
                    <span
                      className={cn(
                        "rounded-full border px-2 py-0.5 text-[0.6rem] uppercase tracking-wider transition-colors",
                        ind.tier === 1
                          ? "border-foreground/40 text-foreground"
                          : "border-border text-muted-foreground",
                      )}
                    >
                      {tierLabel[ind.tier]}
                    </span>
                  </div>
                  <h3 className="mt-6 font-serif text-xl leading-snug transition-colors group-hover:text-royal">
                    {ind.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">
                    {ind.leak}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                      Growth leak
                      <span className="h-px w-6 bg-current transition-all duration-300 group-hover:w-8" />
                    </span>
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-foreground/20 text-foreground transition-all duration-300 group-hover:rotate-[-45deg] group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
                      <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
