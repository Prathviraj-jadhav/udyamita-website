"use client";

import Link from "next/link";
import { caseStudies } from "@/lib/content";
import { assets } from "@/lib/assets";
import {
  Reveal,
  EditorialHeading,
  SectionLabel,
} from "../primitives";
import { HoverVideo } from "../hover-video";
import { ArrowRight } from "lucide-react";

const videos = [assets.caseStudyVideo01, assets.caseStudyVideo02];

function caseStudySlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function CaseStudies() {
  return (
    <section id="case-studies" className="section-pad bg-paper">
      <div className="udyam-container">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <Reveal>
              <SectionLabel no="12">Case Studies</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <EditorialHeading className="mt-6">
                Proof, not promises.
              </EditorialHeading>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-muted-foreground leading-relaxed">
              We don&apos;t invent clients or metrics. These are the kinds of
              engagements Udyamita runs - shown as the systems and outcomes that
              moved. Hover to play.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {caseStudies.map((cs, i) => {
            const slug = caseStudySlug(cs.title);
            return (
              <Reveal key={cs.title} delay={i * 0.08}>
                <Link
                  href={`/case-studies/${slug}`}
                  className="group block overflow-hidden rounded-2xl border border-border bg-background transition-colors hover:border-foreground/30"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-foreground">
                    <HoverVideo
                      src={videos[i]}
                      poster={assets.footerPoster}
                      className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105"
                      objectPosition="center"
                    />
                    <div className="absolute inset-0 bg-foreground/15 group-hover:bg-foreground/5 transition-colors duration-500" aria-hidden />
                    {/* expanding pill */}
                    <div className="absolute bottom-4 left-4 flex items-center">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-background text-foreground transition-all duration-500 group-hover:w-[10.5rem]">
                        <ArrowRight
                          className="h-4 w-4 transition-transform duration-500 group-hover:rotate-[-45deg]"
                          strokeWidth={1.5}
                        />
                        <span className="ml-0 max-w-0 overflow-hidden whitespace-nowrap text-xs font-medium opacity-0 transition-all duration-500 group-hover:ml-2 group-hover:max-w-[8rem] group-hover:opacity-100">
                          View case study
                        </span>
                      </span>
                    </div>
                    <span className="absolute right-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[0.65rem] uppercase tracking-wider text-foreground backdrop-blur-sm">
                      {cs.format}
                    </span>
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-foreground/80 px-2.5 py-1 text-[0.6rem] uppercase tracking-wider text-background backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-background" />
                      Hover to play
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-serif text-xl leading-snug transition-colors group-hover:text-royal">
                        {cs.title}
                      </h3>
                      <span className="shrink-0 rounded-full border border-border px-2.5 py-0.5 text-[0.6rem] uppercase tracking-wider text-muted-foreground">
                        {cs.tag}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {cs.summary}
                    </p>
                    <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                      <span className="eyebrow-sm text-muted-foreground">
                        {cs.metricLabel}
                      </span>
                      <span className="font-serif text-lg transition-colors group-hover:text-royal">
                        {cs.metricValue}
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
