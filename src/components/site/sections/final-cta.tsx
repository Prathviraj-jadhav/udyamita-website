"use client";

import { Reveal, EditorialHeading, SectionLabel, TextRollButton } from "../primitives";
import { brand } from "@/lib/content";

export function FinalCTA() {
  return (
    <section id="final-cta" className="section-pad bg-background">
      <div className="udyam-container">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="flex justify-center">
              <SectionLabel no="18">Final</SectionLabel>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <EditorialHeading className="mt-6">
              You don&apos;t need another vendor.
              <br />
              <span className="italic text-muted-foreground">
                You need to know what to fix next.
              </span>
            </EditorialHeading>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground leading-relaxed">
              Start with a Business Health Check, or talk to us directly. Either
              way, you&apos;ll leave knowing the single move worth making first.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <TextRollButton href="/business-health-check" variant="primary">
                Run your business health check
              </TextRollButton>
              <TextRollButton href="/contact" variant="ghost">
                Talk to us
              </TextRollButton>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 border-t border-border pt-6 text-xs text-muted-foreground">
              <span>{brand.legalName}</span>
              <span>{brand.location}</span>
              <span>{brand.email}</span>
              <span>{brand.phone}</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
