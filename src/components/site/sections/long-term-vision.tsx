"use client";

import { brand } from "@/lib/content";
import { assets } from "@/lib/assets";
import { Reveal, EditorialHeading, SectionLabel, VideoPanel } from "../primitives";

export function LongTermVision() {
  return (
    <section className="relative isolate overflow-hidden bg-foreground text-background">
      {/* Preserved purple reference asset - used as full-bleed panel with
          monochrome scrim so it sits inside the Udyamita brand system. */}
      <div className="absolute inset-0 -z-10">
        <VideoPanel
          src={assets.purpleHeroVideo}
          poster={assets.footerPoster}
          className="absolute inset-0 h-full w-full"
          objectPosition="center"
        />
        <div className="absolute inset-0 bg-foreground/45" aria-hidden />
      </div>

      <div className="udyam-container section-pad">
        <div className="max-w-3xl">
          <Reveal>
            <SectionLabel no="17" className="text-background">
              Long-term Platform Vision
            </SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <EditorialHeading className="mt-6 text-background">
              The default growth partner for every local business.
            </EditorialHeading>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-background/80 leading-relaxed">
              {brand.vision} The path is not more services. It is the network
              around the service - productised, measured, and compounded across
              thousands of businesses.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <VisionPoint
                title="Productise"
                body="Turn the service into something with a clear boundary and a price."
              />
              <VisionPoint
                title="Distribute"
                body="Build the cooperative network of partners businesses already trust."
              />
              <VisionPoint
                title="Compound"
                body="Stack data and systems so every business runs better every quarter."
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function VisionPoint({ title, body }: { title: string; body: string }) {
  return (
    <div className="border-t border-background/20 pt-4">
      <p className="font-serif text-2xl">{title}</p>
      <p className="mt-2 text-sm text-background/70 leading-relaxed">{body}</p>
    </div>
  );
}
