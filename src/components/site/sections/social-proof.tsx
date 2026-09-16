"use client";

import { Reveal, SectionLabel, EditorialHeading, StaggerGroup, StaggerItem } from "../primitives";
import { Quote } from "lucide-react";

/**
 * Social proof section using verified structural claims only.
 * No fabricated client names, logos, or testimonials.
 * These are principles and promises, not invented endorsements.
 */
const principles = [
  {
    quote: "We don't sell tasks. We take responsibility for the number.",
    source: "The Udyamita method",
    context: "A partner, not a vendor. Diagnosis before delivery. Measurement after.",
  },
  {
    quote: "If a service doesn't move a number, it's just an invoice.",
    source: "The Udyamita standard",
    context: "Every engagement produces a metric worth discussing - or we say so.",
  },
  {
    quote: "Fix the foundation before paying for traffic.",
    source: "The Udyamita sequence",
    context: "Diagnose → fix → amplify → measure. In that order, always.",
  },
];

const stats = [
  { value: "10", label: "Growth OS stages", note: "A complete system" },
  { value: "6", label: "Ladder rungs", note: "Discovery → enterprise" },
  { value: "14", label: "Service detail pages", note: "Productised, with boundaries" },
  { value: "12", label: "Industries covered", note: "Tier 1 → Tier 3" },
];

export function SocialProof() {
  return (
    <section className="section-pad bg-background">
      <div className="udyam-container">
        {/* Stats band */}
        <Reveal>
          <div className="grid grid-cols-2 gap-px border border-border bg-border lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-background p-6 text-center sm:p-8">
                <p className="font-serif text-4xl tnum sm:text-5xl">{s.value}</p>
                <p className="mt-2 text-sm font-medium">{s.label}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.note}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Principles */}
        <div className="mt-20 max-w-3xl">
          <Reveal>
            <SectionLabel no="13b">Principles</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <EditorialHeading className="mt-6">
              What you can hold us to.
            </EditorialHeading>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Not testimonials. Not fabricated endorsements. Principles - the
              standards we work to, and the promises you can measure us against.
            </p>
          </Reveal>
        </div>

        <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-3">
          {principles.map((p, i) => (
            <StaggerItem
              key={i}
              className="rounded-2xl border border-border bg-paper p-6 sm:p-8"
            >
              <Quote className="h-6 w-6 text-foreground/30" strokeWidth={1} />
              <p className="mt-4 font-serif text-xl leading-snug">
                {p.quote}
              </p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-medium text-foreground">{p.source}</p>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  {p.context}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
