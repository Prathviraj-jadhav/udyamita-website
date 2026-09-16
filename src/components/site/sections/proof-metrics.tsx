"use client";

import { proofMetrics, proofCategories } from "@/lib/content";
import {
  Reveal,
  EditorialHeading,
  SectionLabel,
  AnimatedCounter,
  StaggerGroup,
  StaggerItem,
} from "../primitives";

export function ProofMetrics() {
  return (
    <section className="section-pad bg-foreground text-background">
      <div className="udyam-container">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel no="13" className="text-background">
                Proof & Metrics
              </SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <EditorialHeading className="mt-6 text-background">
                Every engagement should produce a number worth discussing.
              </EditorialHeading>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-background/70 leading-relaxed">
                We don&apos;t publish fabricated traction. These are structural
                truths about the Udyamita system - the kind of numbers that
                describe capability, not vanity.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                {proofCategories.map((c) => (
                  <span
                    key={c}
                    className="eyebrow-sm text-background/50"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <StaggerGroup className="grid grid-cols-2 gap-px border border-background/15 bg-background/15">
              {proofMetrics.map((m) => (
                <StaggerItem
                  key={m.label}
                  className="bg-foreground p-6 sm:p-8"
                >
                  <p className="eyebrow-sm text-background/50">Verified</p>
                  <p className="mt-4 font-serif text-5xl sm:text-6xl tnum leading-none">
                    <AnimatedCounter value={m.value} suffix={m.suffix} />
                  </p>
                  <p className="mt-4 text-sm font-medium">{m.label}</p>
                  <p className="mt-1 text-xs text-background/60">{m.note}</p>
                </StaggerItem>
              ))}
            </StaggerGroup>
            <Reveal delay={0.2}>
              <p className="mt-6 text-xs text-background/50">
                Client-specific results are shared under engagement, never
                invented for marketing.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
