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

export const metadata: Metadata = {
  title: "Consulting - Stop guessing what to fix next.",
  description:
    "Udyamita consulting is diagnosis-first. Audit, diagnose, quantify, roadmap, prioritise, implement, measure, optimise - a structured engagement that ends with a number worth discussing, not a deck.",
  alternates: { canonical: "https://udyamita.com/consulting" },
  openGraph: {
    title: "Udyamita Consulting - Stop guessing what to fix next.",
    description:
      "Diagnosis-first consulting. Audit to diagnosis, quantification, roadmap, prioritisation, implementation, measurement, optimisation. A structured engagement that ends with a number, not a deck.",
    url: "https://udyamita.com/consulting",
    type: "website",
    siteName: "Udyamita Global LLP",
  },
  twitter: {
    card: "summary_large_image",
    title: "Udyamita Consulting - Stop guessing what to fix next.",
    description:
      "Diagnosis-first consulting. A structured engagement that ends with a number, not a deck.",
  },
};

const crumbs: Crumb[] = [{ label: "Consulting", href: "/consulting" }];

/**
 * Re-frame the Growth OS as a consulting engagement flow.
 * We use stages 1-8 (Diagnose through Optimize), since Scale and Compound
 * are typically implementation, not consulting outputs.
 */
const consultingFlow = growthOS.slice(0, 8).map((s) => ({
  no: s.no,
  stage: s.name,
  consultingLabel:
    s.name === "Diagnose"
      ? "Audit & Diagnose"
      : s.name === "Discover"
        ? "Discover"
        : s.name === "Quantify"
          ? "Quantify"
          : s.name === "Strategize"
            ? "Roadmap"
            : s.name === "Prioritize"
              ? "Prioritise"
              : s.name === "Implement"
                ? "Implement"
                : s.name === "Measure"
                  ? "Measure"
                  : s.name === "Optimize"
                    ? "Optimise"
                    : s.name,
  purpose: s.purpose,
  deliverable: s.deliverable,
}));

const deliverables = [
  {
    no: "01",
    title: "Growth diagnosis report",
    body: "Where the business is leaking - discoverability, trust, lead flow, follow-up, systems - sized and prioritised. Not a list of opinions. A map of leaks with a cost attached to each.",
  },
  {
    no: "02",
    title: "Quantified growth model",
    body: "Your funnel turned into numbers. Baseline metrics, leak sizes, and a model that says: if we close this leak, the number moves by this much.",
  },
  {
    no: "03",
    title: "Prioritised roadmap",
    body: "A plan that says no to the wrong things. Sequenced by impact versus effort, mapped to a rung on the Growth Ladder. You know what to do this month, not someday.",
  },
  {
    no: "04",
    title: "Measurement dashboard",
    body: "Tracking, dashboards, attribution. The client sees the same numbers we see. Evidence replaces opinion, and the number becomes the conversation.",
  },
  {
    no: "05",
    title: "Optimisation log",
    body: "A running record of what was tested, what worked, what was cut. Same spend, better return - and a documented reason for every decision.",
  },
];

const scenarios = [
  {
    no: "01",
    title: "Growth has stalled.",
    body: "You used to grow. Now you don't. The tactics that worked last year aren't working this year - and you can't tell whether it's the market, the message, or a leak that opened somewhere in the funnel.",
  },
  {
    no: "02",
    title: "You're about to scale.",
    body: "Demand is there. The question is whether your operations, systems and follow-up can survive scale. Scale breaks the business that wasn't built to scale - diagnose before you amplify.",
  },
  {
    no: "03",
    title: "Operations are chaotic.",
    body: "Growth has created operational chaos. Leads drop, follow-up depends on memory, reports live in five different inboxes. You can't fix what you can't see - and you can't see what isn't measured.",
  },
  {
    no: "04",
    title: "You're planning a big investment.",
    body: "A new CRM, a new website, an ad budget, an ERP. Before you spend, diagnose. Most big investments fail not because the tool was wrong, but because the foundation wasn't ready for it.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Business Growth Consulting",
  name: "Udyamita Consulting",
  description:
    "Diagnosis-first business growth consulting: audit, diagnose, quantify, roadmap, prioritise, implement, measure, optimise.",
  url: "https://udyamita.com/consulting",
  provider: {
    "@type": "Organization",
    name: "Udyamita Global LLP",
    url: "https://udyamita.com",
  },
  areaServed: ["Pune", "Maharashtra", "India"],
  offers: {
    "@type": "Offer",
    description:
      "Structured consulting engagement scoped per client. See pricing page for indicative ranges.",
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Udyamita Consulting - Stop guessing what to fix next.",
  description:
    "Diagnosis-first business growth consulting. A structured engagement that ends with a number, not a deck.",
  url: "https://udyamita.com/consulting",
  isPartOf: { "@type": "WebSite", name: "Udyamita Global LLP", url: "https://udyamita.com" },
  publisher: {
    "@type": "Organization",
    name: "Udyamita Global LLP",
    url: "https://udyamita.com",
  },
};

export default function ConsultingPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <Breadcrumbs items={crumbs} />

      <PageHero
        no="36"
        label="Consulting"
        title={
          <>
            Stop guessing
            <br />
            <span className="italic text-muted-foreground">what to fix next.</span>
          </>
        }
        intro="Udyamita consulting is diagnosis-first. We audit, diagnose, quantify, roadmap, prioritise, implement, measure and optimise - a structured engagement that ends with a number worth discussing, not a deck."
        ctas={[
          { label: "Book a diagnosis", href: "/contact" },
          { label: "Run the Business Health Check", href: "/business-health-check", variant: "ghost" },
        ]}
      />

      {/* How consulting works */}
      <section className="section-pad bg-background">
        <div className="udyam-container">
          <div className="max-w-4xl">
            <Reveal>
              <SectionLabel no="36.1">How Udyamita consulting works</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h-section mt-6">
                A consulting engagement runs the first eight stages of the Growth OS - in order, measured.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
                Scale and Compound are typically implementation, not consulting
                outputs. The consulting engagement ends with an optimisation log
                and a measurement dashboard - the foundation your team can run
                on after we leave.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <ol className="mt-14 flex flex-col">
              {consultingFlow.map((s, i) => (
                <li
                  key={s.no}
                  className="grid grid-cols-[auto_1fr] gap-6 border-t border-border py-7 sm:grid-cols-[auto_1fr_auto] sm:gap-8"
                >
                  <div className="flex flex-col items-start gap-2">
                    <span className="eyebrow-sm tnum text-muted-foreground">
                      Stage {s.no}
                    </span>
                    <span className="font-serif text-3xl sm:text-4xl tnum leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="h-card">{s.consultingLabel}</h3>
                    <p className="max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {s.purpose}
                    </p>
                  </div>
                  <div className="hidden sm:block sm:max-w-[220px]">
                    <p className="eyebrow-sm text-muted-foreground">Deliverable</p>
                    <p className="mt-2 text-sm">{s.deliverable}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* What you get */}
      <section className="section-pad bg-paper">
        <div className="udyam-container">
          <div className="max-w-4xl">
            <Reveal>
              <SectionLabel no="36.2">What you get</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h-section mt-6">
                Five deliverables. Every one is a thing, not a slide.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
                A consulting engagement produces artefacts your team can keep
                using after the engagement ends. Each one is built to outlive the
                consultant.
              </p>
            </Reveal>
          </div>

          <StaggerGroup className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((d) => (
              <StaggerItem
                key={d.no}
                className="flex flex-col gap-4 bg-background p-7 sm:p-8"
              >
                <span className="eyebrow-sm tnum text-muted-foreground">{d.no}</span>
                <h3 className="h-card">{d.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {d.body}
                </p>
              </StaggerItem>
            ))}
            <StaggerItem className="flex flex-col justify-between gap-4 bg-foreground p-7 text-background sm:p-8">
              <div>
                <span className="eyebrow-sm text-background/50">Outcome</span>
                <h3 className="h-card mt-4 text-background">
                  A business that runs better - with the numbers to prove it.
                </h3>
              </div>
              <Link
                href="/contact"
                className="text-sm text-background/80 underline-offset-4 hover:text-background hover:underline transition-colors"
              >
                Book a diagnosis →
              </Link>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* When to engage consulting */}
      <section className="section-pad bg-background">
        <div className="udyam-container">
          <div className="max-w-4xl">
            <Reveal>
              <SectionLabel no="36.3">When to engage consulting</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h-section mt-6">
                Four scenarios where a diagnosis-first engagement pays for itself.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
                Consulting isn't always the answer. Sometimes you need
                implementation, sometimes you need a campaign. These four
                scenarios are where consulting earns its keep.
              </p>
            </Reveal>
          </div>

          <StaggerGroup className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2">
            {scenarios.map((s) => (
              <StaggerItem
                key={s.no}
                className="flex flex-col gap-4 bg-background p-7 sm:p-8"
              >
                <div className="flex items-baseline justify-between">
                  <span className="eyebrow-sm tnum text-muted-foreground">{s.no}</span>
                  <span className="eyebrow-sm text-muted-foreground">Scenario</span>
                </div>
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
        title="Book a diagnosis."
        intro="The fastest way to know whether consulting is the right engagement is to book a 30-minute diagnosis call. We'll tell you straight - including if we don't think you need us yet."
        primary={{ label: "Book a diagnosis", href: "/contact" }}
        secondary={{ label: "Or run the Business Health Check first", href: "/business-health-check" }}
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
