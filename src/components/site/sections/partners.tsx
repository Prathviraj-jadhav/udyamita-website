"use client";

import * as React from "react";
import { partnerJourney, partnerTypes } from "@/lib/content";
import {
  Reveal,
  EditorialHeading,
  SectionLabel,
  TextRollButton,
  StaggerGroup,
  StaggerItem,
} from "../primitives";
import { PartnerBadge } from "../logo";

export function Partners() {
  return (
    <section id="partners" className="section-pad bg-paper">
      <div className="udyam-container">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel no="15">Partner Ecosystem</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <EditorialHeading className="mt-6">
                Your clients need more than advice.
              </EditorialHeading>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 font-serif italic text-2xl text-muted-foreground">
                Give them a growth system.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-md text-muted-foreground leading-relaxed">
                The service is the product. The cooperative network is the moat.
                Udyamita builds distribution with the people businesses already
                trust - and shares the growth that follows.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex items-center gap-4">
                <PartnerBadge size={56} />
                <div>
                  <p className="eyebrow-sm text-muted-foreground">Partner Network</p>
                  <p className="font-serif text-lg">Growth Partner</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <p className="eyebrow text-muted-foreground">The journey</p>
            </Reveal>
            <StaggerGroup className="mt-6 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4 lg:grid-cols-7">
              {partnerJourney.map((p, i) => {
                const Icon = p.icon;
                return (
                  <StaggerItem
                    key={p.step}
                    className="flex flex-col items-center gap-3 bg-background p-5 text-center"
                  >
                    <span className="eyebrow-sm tnum text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Icon className="h-5 w-5 text-foreground" strokeWidth={1.25} />
                    <span className="text-xs font-medium">{p.step}</span>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>

            <Reveal delay={0.15}>
              <div className="mt-8">
                <p className="eyebrow-sm text-muted-foreground">
                  Who we partner with
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {partnerTypes.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <TextRollButton href="#partner-form" variant="primary">
                  Apply to become a partner
                </TextRollButton>
                <p className="text-xs text-muted-foreground">
                  We do not invent partner commissions. Terms are agreed on
                  qualification.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
