"use client";

import { techCategories, techStacks } from "@/lib/content";
import { assets } from "@/lib/assets";
import {
  Reveal,
  EditorialHeading,
  SectionLabel,
  MaskedVideo,
} from "../primitives";

export function Technology() {
  return (
    <section id="technology" className="section-pad bg-paper">
      <div className="udyam-container">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <SectionLabel no="10">Technology Capability</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <EditorialHeading className="mt-6">
                Technology should remove friction.
              </EditorialHeading>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 font-serif italic text-2xl text-muted-foreground">
                Not create another dashboard nobody opens.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-md text-muted-foreground leading-relaxed">
                Technology is a capability layer, not the headline. We lead with
                the business problem, design the system, then choose the tool - 
                not the other way around.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-1.5">
                {techCategories.map((cat) => (
                  <span
                    key={cat}
                    className="rounded border border-border px-2.5 py-1 text-[0.65rem] uppercase tracking-wider text-muted-foreground"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-6 rounded-xl border border-border bg-background p-4">
                <p className="eyebrow-sm text-muted-foreground">
                  Selected stack
                </p>
                <p className="mt-2 text-sm text-foreground leading-relaxed">
                  {techStacks.join(" · ")}
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <div className="rounded-2xl bg-background p-4 sm:p-6">
                <MaskedVideo
                  src={assets.maskedVideo}
                  className="aspect-square w-full"
                />
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-5 text-sm text-foreground">
                Problem → System → Outcome. The tool is the last step, not the
                first.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
