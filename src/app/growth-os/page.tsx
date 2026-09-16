import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/site/page-shell";
import { PageHero, CtaBand } from "@/components/site/page-hero";
import {
  Breadcrumbs,
  type Crumb,
} from "@/components/site/breadcrumbs";
import { breadcrumbJsonLd } from "@/lib/schema";
import {
  Reveal,
  SectionLabel,
  StaggerGroup,
  StaggerItem,
} from "@/components/site/primitives";
import { growthOS, brand } from "@/lib/content";
import { GrowthOSTimeline, CompoundsRail } from "./timeline";

export const metadata: Metadata = {
  title: "Udyamita Growth OS - Stop guessing what to fix next.",
  description:
    "The Udyamita Growth OS is a ten-stage system - Diagnose, Discover, Quantify, Strategize, Prioritize, Implement, Measure, Optimize, Scale, Compound. Each stage lifts the next, turning growth from guesswork into a measured process.",
  alternates: { canonical: "https://udyamita.com/growth-os" },
  openGraph: {
    title: "Udyamita Growth OS - Stop guessing what to fix next.",
    description:
      "Ten stages, run in order, measured at every step. Diagnose, Discover, Quantify, Strategize, Prioritize, Implement, Measure, Optimize, Scale, Compound. The system that turns growth from guesswork into a process.",
    url: "https://udyamita.com/growth-os",
    type: "website",
    siteName: "Udyamita Global LLP",
  },
  twitter: {
    card: "summary_large_image",
    title: "Udyamita Growth OS - Stop guessing what to fix next.",
    description:
      "Ten stages, run in order, measured at every step. A system that compounds.",
  },
};

const crumbs: Crumb[] = [
  { label: "Why Udyamita", href: "/why-udyamita" },
  { label: "Growth OS", href: "/growth-os" },
];

const compoundSteps = [
  {
    no: "01",
    title: "Each stage lifts the next.",
    body: "Diagnose informs Discover. Discover feeds Quantify. Quantify shapes Strategize. The output of one stage becomes the input of the next - so the system doesn't just iterate, it compounds.",
  },
  {
    no: "02",
    title: "Evidence replaces opinion.",
    body: "Measure sits at the centre, not the end. Every later stage uses the numbers from the earlier ones - and produces numbers the next stage can use.",
  },
  {
    no: "03",
    title: "Foundation before amplification.",
    body: "You won't reach Optimize, Scale or Compound without Diagnose through Implement being solid. The OS refuses to skip steps - because skipping steps is how businesses pay twice for the same problem.",
  },
  {
    no: "04",
    title: "Compounding is the deliverable.",
    body: "The final stage isn't a campaign or a launch. It's the model where every improvement lifts the next one - so the business runs better every quarter, not just this quarter.",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Udyamita Growth OS - Stop guessing what to fix next.",
  description:
    "A ten-stage system that turns growth from guesswork into a measured, compounding process.",
  url: "https://udyamita.com/growth-os",
  isPartOf: { "@type": "WebSite", name: "Udyamita Global LLP", url: "https://udyamita.com" },
  about: {
    "@type": "Thing",
    name: "Growth operating system for businesses",
  },
  publisher: {
    "@type": "Organization",
    name: "Udyamita Global LLP",
    url: "https://udyamita.com",
  },
};

const osSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Udyamita Growth OS - 10 Stages",
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  numberOfItems: growthOS.length,
  itemListElement: growthOS.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.name,
    description: s.purpose,
  })),
};

export default function GrowthOSPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(osSchema) }}
      />

      <Breadcrumbs items={crumbs} />

      <PageHero
        no="06"
        label="Udyamita Growth OS"
        title={
          <>
            Stop guessing
            <br />
            <span className="italic text-muted-foreground">what to fix next.</span>
          </>
        }
        intro="Ten stages, run in order, measured at every step. The Growth OS turns growth from a series of opinions into a system that compounds - from Diagnose to Compound, foundation before amplification."
        ctas={[
          { label: "Run your business through the OS", href: "/business-health-check" },
          { label: "Talk to a consultant", href: "/consulting", variant: "ghost" },
        ]}
      />

      {/* The 10 stages - interactive timeline */}
      <section className="section-pad bg-background">
        <div className="udyam-container">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <SectionLabel no="06.1">The Ten Stages</SectionLabel>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="h-section mt-6">
                  One system. Ten stages. Measured at every step.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 max-w-sm text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Each stage has a purpose, a set of activities, a deliverable
                  and a business outcome. Hover or tap a stage to see the detail.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8 flex items-center gap-6 border-t border-border pt-6">
                  <div>
                    <p className="font-serif text-4xl tnum">{growthOS.length}</p>
                    <p className="eyebrow-sm text-muted-foreground mt-1">Stages</p>
                  </div>
                  <div className="h-10 w-px bg-border" />
                  <div>
                    <p className="font-serif text-4xl">1</p>
                    <p className="eyebrow-sm text-muted-foreground mt-1">System</p>
                  </div>
                  <div className="h-10 w-px bg-border" />
                  <div>
                    <p className="font-serif text-4xl">∞</p>
                    <p className="eyebrow-sm text-muted-foreground mt-1">Compounds</p>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <GrowthOSTimeline stages={growthOS} />
            </div>
          </div>
        </div>
      </section>

      {/* How it compounds */}
      <section className="section-pad bg-paper">
        <div className="udyam-container">
          <div className="max-w-4xl">
            <Reveal>
              <SectionLabel no="06.2">How it compounds</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h-section mt-6">
                The OS isn&apos;t ten tasks. It&apos;s one system that lifts itself.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
                Most engagements stop at Implement. The OS keeps going - Measure,
                Optimize, Scale and Compound are where the work starts to pay back
                twice for the same rupee.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="mt-12">
              <CompoundsRail stages={growthOS} />
            </div>
          </Reveal>

          <StaggerGroup className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2">
            {compoundSteps.map((s) => (
              <StaggerItem
                key={s.no}
                className="flex flex-col gap-4 bg-background p-7 sm:p-8"
              >
                <span className="eyebrow-sm tnum text-muted-foreground">{s.no}</span>
                <h3 className="h-card">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CtaBand
        title="Run your business through the Growth OS."
        intro="The Business Health Check is the diagnostic entry point - stage one of the OS. Three minutes, a real picture of where you are, and a recommended first move."
        primary={{ label: "Run the Business Health Check", href: "/business-health-check" }}
        secondary={{ label: "Or talk to a consultant", href: "/consulting" }}
      />

      <span className="sr-only">
        {brand.legalName} · {brand.location}
      </span>
      <Link href="/why-udyamita" className="sr-only">
        Read why Udyamita is a partner, not a vendor
      </Link>
    </PageShell>
  );
}
