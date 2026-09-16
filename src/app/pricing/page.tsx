import type { Metadata } from "next";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageShell } from "@/components/site/page-shell";
import { PageHero, CtaBand } from "@/components/site/page-hero";
import {
  Breadcrumbs,
  type Crumb,
} from "@/components/site/breadcrumbs";
import { breadcrumbJsonLd, faqPageJsonLd } from "@/lib/schema";
import {
  Reveal,
  SectionLabel,
  StaggerGroup,
  StaggerItem,
} from "@/components/site/primitives";
import { growthLadder, brand } from "@/lib/content";
import { PricingLadder } from "./ladder";

export const metadata: Metadata = {
  title: "Pricing - Pricing that maps to where you are.",
  description:
    "Udyamita pricing follows a six-rung ladder, from Rs 2,000-8,000 entry work to enterprise projects scoped per engagement. Indicative ranges are published - nothing is hidden behind 'contact us'.",
  alternates: { canonical: "https://udyamita.com/pricing" },
  openGraph: {
    title: "Udyamita Pricing - Pricing that maps to where you are.",
    description:
      "A six-rung ladder from Get Discovered to Enterprise Growth Partner. Indicative ranges published, nothing hidden behind 'contact us'.",
    url: "https://udyamita.com/pricing",
    type: "website",
    siteName: "Udyamita Global LLP",
  },
  twitter: {
    card: "summary_large_image",
    title: "Udyamita Pricing - Pricing that maps to where you are.",
    description:
      "Six rungs, indicative ranges published. Nothing hidden behind 'contact us'.",
  },
};

const crumbs: Crumb[] = [{ label: "Pricing", href: "/pricing" }];

const inclusions = {
  included: [
    "Diagnosis and audit of where the business is leaking.",
    "A prioritised roadmap mapped to your rung on the Growth Ladder.",
    "Implementation of the deliverables listed under each rung.",
    "Measurement dashboard - the same numbers we see, you see.",
    "Optimisation log - what was tested, what worked, what was cut.",
    "A documented handover your team can run after the engagement ends.",
  ],
  notIncluded: [
    "Ad spend, platform subscriptions, and third-party tool licences - passed through at cost, never marked up.",
    "Sales operations headcount. We build the system; you staff it (or we refer a partner).",
    "Guaranteed rankings, lead counts, or ROI. We guarantee a measured process, not a fabricated outcome.",
    "Work outside the agreed scope. If you need more, we re-scope - we don't silently expand the invoice.",
    "Custom software inside a fixed-scope engagement. Custom work is scoped separately.",
  ],
};

const pricingFaqs = [
  {
    q: "Do you offer custom pricing?",
    a: "Yes - for engagements that don't fit a rung. Custom pricing starts with a diagnosis (stage one of the Growth OS) so the scope is anchored to a real problem, not a wish-list. Most clients, however, fit one of the six rungs and use the indicative range as the starting point for the conversation.",
  },
  {
    q: "What's not included?",
    a: "Ad spend, platform subscriptions and third-party tool licences are passed through at cost - never marked up. Sales headcount is not included; we build the system, you staff it (or we refer a partner). We don't guarantee specific rankings, lead counts or ROI; we guarantee a measured process. Any work outside the agreed scope is re-scoped, not silently invoiced.",
  },
  {
    q: "How do you price enterprise?",
    a: "Enterprise engagements (rung 06) are project-based - from lakhs to crores, scoped per engagement. Pricing is built bottom-up from the stages of the Growth OS required, the team mix, and the timeline. We don't discount by 20% to win the deal; we re-scope to fit the budget honestly.",
  },
  {
    q: "Is there a minimum commitment?",
    a: "One-time engagements (rungs 01 and 02) have no minimum beyond the project itself. Retainer rungs (03-05) typically start at a three-month commitment, because growth work that's measured at every step needs more than a month to show its hand. After three months, the retainer is month-to-month.",
  },
];

const faqSchema = faqPageJsonLd(pricingFaqs);

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Udyamita Pricing - Pricing that maps to where you are.",
  description:
    "A six-rung pricing ladder from Get Discovered to Enterprise Growth Partner, with indicative ranges published.",
  url: "https://udyamita.com/pricing",
  isPartOf: { "@type": "WebSite", name: "Udyamita Global LLP", url: "https://udyamita.com" },
  publisher: {
    "@type": "Organization",
    name: "Udyamita Global LLP",
    url: "https://udyamita.com",
  },
};

export default function PricingPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumbs items={crumbs} />

      <PageHero
        no="35"
        label="Pricing"
        title={
          <>
            Pricing that maps
            <br />
            <span className="italic text-muted-foreground">to where you are.</span>
          </>
        }
        intro="Six rungs, from getting discovered to becoming an enterprise growth partner. Each one has a problem, a deliverable, a price band and a clear next step. Indicative ranges are published - nothing is hidden behind 'contact us'."
        ctas={[
          { label: "Get a quote for your rung", href: "/contact" },
          { label: "Find your rung with the Health Check", href: "/business-health-check", variant: "ghost" },
        ]}
      />

      {/* The six rungs */}
      <section className="section-pad bg-background">
        <div className="udyam-container">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <SectionLabel no="35.1">The Six Rungs</SectionLabel>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="h-section mt-6">
                  Start where the problem starts. Grow from there.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 max-w-sm text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Tap a rung to see the problem it solves, what&apos;s included,
                  the indicative range, the time to first value, and the next
                  rung up.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-6 max-w-sm text-xs text-muted-foreground leading-relaxed">
                  Ranges are indicative for Pune and Maharashtra, in INR. Final
                  pricing is confirmed in a scoping call after the Business
                  Health Check.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <PricingLadder rungs={growthLadder} />
            </div>
          </div>
        </div>
      </section>

      {/* What's included / not included */}
      <section className="section-pad bg-paper">
        <div className="udyam-container">
          <div className="max-w-4xl">
            <Reveal>
              <SectionLabel no="35.2">What&apos;s included / not included</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h-section mt-6">
                Honesty about delivery boundaries.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
                The fastest way to lose trust is to be vague about scope. Here&apos;s
                what every rung includes - and what it explicitly doesn&apos;t.
              </p>
            </Reveal>
          </div>

          <StaggerGroup className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2">
            <StaggerItem className="flex flex-col gap-4 bg-background p-7 sm:p-8">
              <div className="flex items-baseline justify-between">
                <span className="eyebrow-sm text-muted-foreground">Included</span>
                <span className="font-serif text-xl">in every rung</span>
              </div>
              <ul className="mt-2 flex flex-col gap-3">
                {inclusions.included.map((it) => (
                  <li
                    key={it}
                    className="flex items-start gap-3 text-sm leading-relaxed"
                  >
                    <span
                      aria-hidden
                      className="mt-2 inline-block h-px w-4 bg-foreground flex-shrink-0"
                    />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </StaggerItem>
            <StaggerItem className="flex flex-col gap-4 bg-background p-7 sm:p-8">
              <div className="flex items-baseline justify-between">
                <span className="eyebrow-sm text-muted-foreground">Not included</span>
                <span className="font-serif text-xl">ever</span>
              </div>
              <ul className="mt-2 flex flex-col gap-3">
                {inclusions.notIncluded.map((it) => (
                  <li
                    key={it}
                    className="flex items-start gap-3 text-sm leading-relaxed"
                  >
                    <span
                      aria-hidden
                      className="mt-2 inline-block h-px w-4 bg-muted-foreground flex-shrink-0"
                    />
                    <span className="text-muted-foreground">{it}</span>
                  </li>
                ))}
              </ul>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* Pricing FAQs */}
      <section className="section-pad bg-background">
        <div className="udyam-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <SectionLabel no="35.3">Pricing FAQ</SectionLabel>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="h-section mt-6">
                  Straight answers about how we price.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 max-w-sm text-base sm:text-lg text-muted-foreground leading-relaxed">
                  The same questions, answered the way we&apos;d answer them in a
                  room - direct, factual, useful.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <Reveal delay={0.1}>
                <Accordion type="single" collapsible className="flex flex-col">
                  {pricingFaqs.map((faq, i) => (
                    <AccordionItem
                      key={faq.q}
                      value={`item-${i}`}
                      className="border-b border-border"
                    >
                      <AccordionTrigger className="py-6 text-left hover:no-underline">
                        <span className="flex items-baseline gap-4">
                          <span className="eyebrow-sm tnum text-muted-foreground">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="font-serif text-xl leading-snug">
                            {faq.q}
                          </span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                        <span className="block pl-10">{faq.a}</span>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Get a quote for your rung."
        intro="If you've run the Business Health Check, you already know your rung. If you haven't, run it first - we won't quote a price without a diagnosis. Either way, the next step takes three minutes."
        primary={{ label: "Get a quote", href: "/contact" }}
        secondary={{ label: "Run the Business Health Check", href: "/business-health-check" }}
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
