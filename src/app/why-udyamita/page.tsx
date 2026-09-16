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
  StaggerGroup,
  StaggerItem,
  SectionLabel,
  AnimatedCounter,
} from "@/components/site/primitives";
import {
  traditionalVendorFlow,
  udyamitaFlow,
  proofMetrics,
  proofCategories,
  brand,
} from "@/lib/content";
import { WhyUdyamitaComparison } from "./comparison";

export const metadata: Metadata = {
  title: "Why Udyamita - Not another vendor. A growth partner.",
  description:
    "Udyamita is not an agency. It is a growth partner that diagnoses before it sells, takes responsibility for the number, sequences foundation before amplification, and measures everything. See the difference between a vendor and a partner.",
  alternates: { canonical: "https://udyamita.com/why-udyamita" },
  openGraph: {
    title: "Why Udyamita - Not another vendor. A growth partner.",
    description:
      "Diagnosis before selling. Responsibility for the number. Foundation before amplification. Measurement at every step. See what makes Udyamita a partner, not a vendor.",
    url: "https://udyamita.com/why-udyamita",
    type: "website",
    siteName: "Udyamita Global LLP",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Udyamita - Not another vendor. A growth partner.",
    description:
      "Diagnosis-first, foundation-before-amplification, measured. A growth partner, not an agency.",
  },
};

const crumbs: Crumb[] = [{ label: "Why Udyamita", href: "/why-udyamita" }];

const partnerPoints = [
  {
    no: "01",
    title: "Diagnoses before selling.",
    body: "No proposal before a diagnosis. We map where value is leaking - discoverability, trust, lead flow, follow-up, systems - before we recommend anything. A prescription without a diagnosis is malpractice.",
  },
  {
    no: "02",
    title: "Takes responsibility for the number.",
    body: "A vendor delivers a task. A partner is accountable for the metric that task was supposed to move. If the number didn't move, the work didn't succeed - regardless of how pretty the deliverable looked.",
  },
  {
    no: "03",
    title: "Sequences foundation before amplification.",
    body: "Don't run ads to a leaky website. Don't automate a process you haven't defined. Don't scale chaos. Foundation first, amplification second - always, in that order.",
  },
  {
    no: "04",
    title: "Measures and reports.",
    body: "Every engagement produces a number worth discussing. Tracking, dashboards, attribution. Evidence replaces opinion, and the client sees the same numbers we see.",
  },
  {
    no: "05",
    title: "Has a methodology.",
    body: "The Udyamita Growth OS - ten stages, run in order, measured at every step. Not improvisation, not vibes, not whatever the last client got. A system that compounds.",
  },
  {
    no: "06",
    title: "Honest about boundaries.",
    body: "We say no to the wrong engagements. We publish indicative pricing. We tell you what is not included. We won't sell you a CRM to organise a process you haven't defined.",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Why Udyamita - Not another vendor. A growth partner.",
  description:
    "Udyamita is a growth partner that diagnoses before it sells, takes responsibility for the number, and measures everything.",
  url: "https://udyamita.com/why-udyamita",
  isPartOf: { "@type": "WebSite", name: "Udyamita Global LLP", url: "https://udyamita.com" },
  about: {
    "@type": "Thing",
    name: "Business growth partnership",
  },
  publisher: {
    "@type": "Organization",
    name: "Udyamita Global LLP",
    url: "https://udyamita.com",
  },
};

export default function WhyUdyamitaPage() {
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

      <Breadcrumbs items={crumbs} />

      <PageHero
        no="05"
        label="Why Udyamita"
        title={
          <>
            Not another vendor.
            <br />
            <span className="italic text-muted-foreground">A growth partner.</span>
          </>
        }
        intro="A vendor sells a task. A partner takes responsibility for the number. Udyamita begins with diagnosis and ends with measurement - because a service that doesn't move a number is just an invoice."
        ctas={[
          { label: "Run the Business Health Check", href: "/business-health-check" },
          { label: "Talk to us", href: "/contact", variant: "ghost" },
        ]}
      />

      {/* Comparison: traditional vendor flow vs Udyamita Growth OS */}
      <section className="section-pad bg-paper">
        <div className="udyam-container">
          <div className="max-w-4xl">
            <Reveal>
              <SectionLabel no="05.1">Vendor vs Partner</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h-section mt-6">
                The same engagement, two completely different shapes.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
                The traditional vendor flow is three steps repeated forever.
                Udyamita runs ten stages - measured, sequenced, and compounding.
                Same budget, very different outcome.
              </p>
            </Reveal>
          </div>

          <WhyUdyamitaComparison
            traditional={[...traditionalVendorFlow]}
            udyamita={[...udyamitaFlow]}
          />
        </div>
      </section>

      {/* What makes a partner, not a vendor */}
      <section className="section-pad bg-background">
        <div className="udyam-container">
          <div className="max-w-4xl">
            <Reveal>
              <SectionLabel no="05.2">What makes a partner, not a vendor</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h-section mt-6">
                Six commitments that separate a partner from a vendor.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
                These aren't slogans. Each one is a structural choice about how
                Udyamita operates - and each one has a cost. That's the point.
              </p>
            </Reveal>
          </div>

          <StaggerGroup className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {partnerPoints.map((p) => (
              <StaggerItem
                key={p.no}
                className="flex flex-col gap-4 bg-background p-7 sm:p-8"
              >
                <span className="eyebrow-sm tnum text-muted-foreground">{p.no}</span>
                <h3 className="h-card">{p.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Proof metrics - reuse proofMetrics with AnimatedCounter */}
      <section className="section-pad bg-foreground text-background">
        <div className="udyam-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionLabel no="05.3" className="text-background">
                  Proof &amp; Metrics
                </SectionLabel>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="h-section mt-6 text-background">
                  Every engagement should produce a number worth discussing.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 max-w-md text-background/70 leading-relaxed">
                  We don't publish fabricated traction. These are structural
                  truths about the Udyamita system - the kind of numbers that
                  describe capability, not vanity.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                  {proofCategories.map((c) => (
                    <span key={c} className="eyebrow-sm text-background/50">
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

      <CtaBand
        title="See if Udyamita is the right partner."
        intro="Run the Business Health Check. It takes three minutes and tells you where your business is leaking - and whether Udyamita is the right fit to fix it."
        primary={{ label: "Run the Business Health Check", href: "/business-health-check" }}
        secondary={{ label: "Or talk to us first", href: "/contact" }}
      />

      <span className="sr-only">
        {brand.legalName} · {brand.location}
      </span>
      <Link href="/growth-os" className="sr-only">
        Read about the Udyamita Growth OS
      </Link>
    </PageShell>
  );
}
