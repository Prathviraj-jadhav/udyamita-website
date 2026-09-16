"use client";

import * as React from "react";
import { serviceEcosystem } from "@/lib/content";
import {
  Reveal,
  EditorialHeading,
  SectionLabel,
  StaggerGroup,
  StaggerItem,
} from "../primitives";
import { cn } from "@/lib/utils";

export function ServiceEcosystem() {
  const [active, setActive] = React.useState<string>("DISCOVER");
  const current = serviceEcosystem.find((s) => s.key === active) ?? serviceEcosystem[0];
  const Icon = current.icon;

  return (
    <section id="services" className="section-pad bg-background">
      <div className="udyam-container">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <Reveal>
              <SectionLabel no="09">Service Ecosystem</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <EditorialHeading className="mt-6">
                One stack. Seven layers. No random grid.
              </EditorialHeading>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-muted-foreground leading-relaxed">
              Services aren&apos;t a catalogue of buzzwords. They&apos;re
              organised by where in the growth journey they belong - discover to
              scale.
            </p>
          </Reveal>
        </div>

        {/* category tabs */}
        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap gap-2">
            {serviceEcosystem.map((cat) => {
              const CatIcon = cat.icon;
              const isActive = active === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActive(cat.key)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all",
                    isActive
                      ? "border-foreground bg-foreground text-background"
                      : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground",
                  )}
                >
                  <CatIcon className="h-4 w-4" strokeWidth={1.25} />
                  {cat.key}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* services grid */}
        <div className="mt-10 border-t border-border">
          <StaggerGroup
            key={active}
            className="grid grid-cols-2 border-l border-border sm:grid-cols-3 lg:grid-cols-4"
          >
            {current.services.map((s) => (
              <StaggerItem
                key={s}
                className="border-b border-r border-border p-5"
              >
                <div className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" strokeWidth={1.25} />
                  <span className="text-sm leading-snug">{s}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-sm text-muted-foreground">
            Productised, with clear delivery boundaries - so you know exactly
            what you&apos;re buying and what it moves.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
