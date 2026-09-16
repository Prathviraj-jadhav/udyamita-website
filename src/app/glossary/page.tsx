import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/site/page-shell";
import { PageHero, CtaBand } from "@/components/site/page-hero";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Glossary - Business Growth Terms Explained",
  description:
    "A plain-language glossary of business growth, marketing, and technology terms - from AEO to CRM to ERP. No jargon, no buzzwords. Just clear definitions.",
  alternates: { canonical: "https://udyamita.com/glossary" },
  openGraph: {
    title: "Glossary - Business Growth Terms · Udyamita",
    description: "Plain-language definitions of business growth, marketing, and technology terms.",
    url: "https://udyamita.com/glossary",
    type: "website",
  },
};

type Term = {
  term: string;
  category: "Discovery" | "Trust" | "Generate" | "Convert" | "Retain" | "Measure" | "Scale";
  definition: string;
  related?: { label: string; href: string };
};

const terms: Term[] = [
  { term: "AEO", category: "Discovery", definition: "Answer Engine Optimisation - structuring content so AI answer engines (Google AI Overviews, ChatGPT, Perplexity) cite your business as the source, not just rank you in a list of links.", related: { label: "AEO service", href: "/services/aeo" } },
  { term: "Attribution", category: "Measure", definition: "The practice of assigning credit for a conversion to the marketing channels that produced it. Without attribution, you can't tell which ad rupee produced which customer." },
  { term: "Automation", category: "Scale", definition: "Having software handle repetitive, rule-based tasks - reminders, follow-ups, data sync, reporting - so humans can focus on judgement-based work. Define the process before automating it.", related: { label: "Automation service", href: "/services/automation" } },
  { term: "CRM", category: "Convert", definition: "Customer Relationship Management - a system that captures every enquiry into a single source of truth, qualifies leads, and automates follow-up. The tool follows the process, not the other way around.", related: { label: "CRM service", href: "/services/crm" } },
  { term: "Conversion Rate", category: "Convert", definition: "The percentage of enquiries (or visitors) that become customers. The single most important metric for measuring sales effectiveness." },
  { term: "ERP", category: "Scale", definition: "Enterprise Resource Planning - a system that unifies orders, inventory, production, and finance into one source of truth. Don't install one on day one; sequence it.", related: { label: "ERP service", href: "/services/erp" } },
  { term: "Follow-up", category: "Convert", definition: "The practice of contacting a lead after the first enquiry. The most common growth leak - leads go cold when follow-up depends on memory instead of a system." },
  { term: "GEO", category: "Discovery", definition: "Generative Engine Optimisation - a newer term for optimising content for AI-generated search results. Overlaps with AEO." },
  { term: "Google Business Profile", category: "Discovery", definition: "The free listing that controls how your business appears on Google Search and Maps. The single highest-leverage free marketing move for most local businesses.", related: { label: "GBP service", href: "/services/google-business-profile" } },
  { term: "Growth Leak", category: "Measure", definition: "A specific point in the customer journey where potential revenue is lost - usually from slow follow-up, weak trust signals, or manual processes. Growth doesn't break in one place; it leaks." },
  { term: "Growth OS", category: "Scale", definition: "Udyamita's ten-stage system: Diagnose, Discover, Quantify, Strategize, Prioritize, Implement, Measure, Optimize, Scale, Compound. Turns growth from guesswork into a measured process.", related: { label: "Growth OS", href: "/growth-os" } },
  { term: "Landing Page", category: "Trust", definition: "A page with one job: convert a specific visitor into a specific action. Ads should go to landing pages, not the homepage.", related: { label: "Landing Pages service", href: "/services/landing-pages" } },
  { term: "Lead Generation", category: "Generate", definition: "The system that turns interest into enquiries and enquiries into a tracked pipeline. Not just ads - the capture, qualification, and routing of every lead.", related: { label: "Lead Gen service", href: "/services/lead-generation" } },
  { term: "Local SEO", category: "Discovery", definition: "The practice of appearing in local search results - the 'near me' searches, the Maps pack, and location-based queries. Usually the highest-ROI starting point for local businesses.", related: { label: "Local SEO service", href: "/services/local-seo" } },
  { term: "NAP", category: "Discovery", definition: "Name, Address, Phone - the core business information that must be identical across every directory and listing. Inconsistent NAP confuses search engines." },
  { term: "Performance Marketing", category: "Generate", definition: "Paid advertising measured against business outcomes - leads, bookings, enrolments - not vanity metrics. Pay for what produces results; cut what doesn't.", related: { label: "Perf Marketing service", href: "/services/performance-marketing" } },
  { term: "Pipeline", category: "Convert", definition: "The visible flow of leads through your sales stages - from enquiry to close. If you can't see your pipeline, you can't fix your leaks." },
  { term: "Productised Service", category: "Scale", definition: "A service with a clear boundary and price - defined deliverable, defined scope, defined cost - so it's repeatable, trainable, and measurable." },
  { term: "Reviews", category: "Discovery", definition: "The second-biggest local ranking factor and the biggest trust factor. A steady flow of fresh positive reviews beats a one-time push.", related: { label: "Reviews service", href: "/services/reviews" } },
  { term: "SEO", category: "Discovery", definition: "Search Engine Optimisation - making your website rank for the queries your customers type. Slower than ads but compounds; most businesses need both.", related: { label: "SEO service", href: "/services/seo" } },
  { term: "Trust Signals", category: "Trust", definition: "Elements that make a visitor confident to enquire - credentials, reviews, clear offer, professional design, fast load time. Without trust, discovery dies at the doorstep." },
];

const categories = ["Discovery", "Trust", "Generate", "Convert", "Retain", "Measure", "Scale"] as const;

export default function GlossaryPage() {
  const sorted = [...terms].sort((a, b) => a.term.localeCompare(b.term));

  const schema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Udyamita Business Growth Glossary",
    description: "Plain-language definitions of business growth, marketing, and technology terms.",
    hasDefinedTerm: sorted.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.definition,
    })),
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd([{ label: "Glossary" }])),
        }}
      />
      <Breadcrumbs items={[{ label: "Glossary" }]} />
      <PageHero
        no="G1"
        label="Glossary"
        title="Business growth terms, explained plainly."
        intro="No jargon, no buzzwords. Clear definitions of the terms we use - and the terms you'll hear when working on growth."
      />
      <section className="section-pad bg-background pt-0">
        <div className="udyam-container">
          {/* Category filter pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <a
                key={cat}
                href={`#cat-${cat.toLowerCase()}`}
                className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
              >
                {cat}
              </a>
            ))}
          </div>

          {/* Terms grouped by letter */}
          <div className="mt-12">
            {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => {
              const letterTerms = sorted.filter((t) => t.term.toUpperCase().startsWith(letter));
              if (letterTerms.length === 0) return null;
              return (
                <div key={letter} className="mb-12">
                  <div className="flex items-baseline gap-4 border-b border-border pb-3">
                    <h2 className="font-serif text-3xl">{letter}</h2>
                    <span className="eyebrow-sm text-muted-foreground">
                      {letterTerms.length} {letterTerms.length === 1 ? "term" : "terms"}
                    </span>
                  </div>
                  <dl className="mt-6 flex flex-col">
                    {letterTerms.map((t) => (
                      <div
                        key={t.term}
                        id={`cat-${t.category.toLowerCase()}`}
                        className="grid gap-2 border-b border-border py-5 sm:grid-cols-[180px_1fr] sm:gap-6"
                      >
                        <dt className="flex items-center gap-2">
                          <span className="font-serif text-lg font-medium">{t.term}</span>
                          <span className="rounded-full border border-border px-2 py-0.5 text-[0.6rem] uppercase tracking-wider text-muted-foreground">
                            {t.category}
                          </span>
                        </dt>
                        <dd>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {t.definition}
                          </p>
                          {t.related && (
                            <Link
                              href={t.related.href}
                              className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-foreground hover:gap-2 transition-all"
                            >
                              {t.related.label}
                              <span aria-hidden>→</span>
                            </Link>
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <CtaBand
        title="Put these terms to work."
        intro="Run the Business Health Check. We'll show you which of these concepts matter most for your business right now."
        primary={{ label: "Run the Health Check", href: "/business-health-check" }}
        secondary={{ label: "Talk to us", href: "/contact" }}
      />
    </PageShell>
  );
}
