"use client";

import { investorEvolution } from "@/lib/content";
import {
  Reveal,
  EditorialHeading,
  SectionLabel,
  StaggerGroup,
  StaggerItem,
} from "../primitives";

export function Enterprise() {
  return (
    <section id="investors" className="section-pad bg-foreground text-background">
      <div className="udyam-container">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel no="16" className="text-background">
                Enterprise & Investor
              </SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <EditorialHeading className="mt-6 text-background">
                Building the operating layer for business growth.
              </EditorialHeading>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-background/70 leading-relaxed">
                Udyamita evolves from services to productised services to
                recurring revenue to technology, data and ecosystem - building
                durable infrastructure for local business growth.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 text-xs text-background/50">
                Financial metrics:{" "}
                <span className="text-background/80">[TO BE VERIFIED]</span> - 
                shared under engagement, never fabricated.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <p className="eyebrow text-background/60">Evolution</p>
            </Reveal>
            <StaggerGroup className="mt-6 flex flex-col">
              {investorEvolution.map((stage, i) => (
                <StaggerItem
                  key={stage}
                  className="flex items-center gap-5 border-t border-background/15 py-4 last:border-b"
                >
                  <span className="eyebrow-sm tnum text-background/50 w-8">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-2xl text-background">
                    {stage}
                  </span>
                  <span className="ml-auto eyebrow-sm text-background/40">
                    {i === investorEvolution.length - 1 ? "Now building" : "Compound →"}
                  </span>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
