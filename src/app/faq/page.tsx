import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/site/page-shell";
import { PageHero, CtaBand } from "@/components/site/page-hero";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { breadcrumbJsonLd } from "@/lib/schema";
import { faqs } from "@/lib/content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqPageJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Straight answers about Udyamita - what it is, what it does, how the Growth OS works, what services and pricing look like, and how to become a partner. No pitch-deck words.",
  alternates: { canonical: "https://udyamita.com/faq" },
  openGraph: {
    title: "Frequently Asked Questions · Udyamita",
    description:
      "Straight answers about Udyamita - what it is, how it works, pricing, and partnering.",
    url: "https://udyamita.com/faq",
    type: "website",
  },
};

type FaqGroup = { category: string; items: { q: string; a: string }[] };

const faqGroups: FaqGroup[] = [
  {
    category: "About Udyamita",
    items: [
      { q: "What is Udyamita?", a: faqs[0].a },
      { q: "What does Udyamita do?", a: faqs[1].a },
      { q: "Who does Udyamita serve?", a: faqs[2].a },
      {
        q: "Is Udyamita an agency?",
        a: "No. Udyamita is positioned explicitly as a growth partner, not an agency. An agency sells tasks and resets the relationship after each project. A partner diagnoses, implements, measures, and takes responsibility for the number moving - not just the deliverable.",
      },
      {
        q: "Where is Udyamita based?",
        a: "Udyamita Global LLP is based in Pune, Maharashtra, India. The vision is to become the default growth partner for local businesses across Maharashtra, and then India.",
      },
    ],
  },
  {
    category: "How Udyamita works",
    items: [
      { q: "What is the Udyamita Growth OS?", a: faqs[3].a },
      { q: "How does Udyamita work?", a: "Udyamita begins with diagnosis - not service-selling. We diagnose where growth leaks, quantify the cost, strategize the few moves that matter, prioritize, implement, measure, optimize, scale, and compound. Each stage lifts the next." },
      {
        q: "What is the Business Health Check?",
        a: faqs[6].a,
      },
      {
        q: "How long until I see results?",
        a: "Foundational work (local SEO, Google Business Profile, website) typically shows results in 2-6 weeks. Compounding growth - where each improvement lifts the next - builds over months. We measure at every stage so you see progress against numbers, not vibes.",
      },
    ],
  },
  {
    category: "Services & technology",
    items: [
      { q: "What services does Udyamita provide?", a: faqs[4].a },
      {
        q: "What technology services does Udyamita provide?",
        a: "Technology spans web and mobile development, CRM, ERP, API integrations, automation, AI solutions, data analytics, cloud, IoT, and custom software. Technology is treated as a capability layer - we lead with the business problem, design the system, then choose the tool.",
      },
      {
        q: "Do you build websites?",
        a: "Yes - fast, mobile-first, conversion-focused websites built to be credible sales assets, not brochures. Website work ranges from Rs 15,000-40,000 one-time plus upkeep.",
      },
      {
        q: "Do you do SEO and local SEO?",
        a: "Yes - local SEO, technical SEO, on-page and off-page SEO, and AEO (Answer Engine Optimisation for AI answer engines). Local SEO is usually the highest-ROI starting point for local businesses.",
      },
    ],
  },
  {
    category: "Pricing",
    items: [
      { q: "How much does Udyamita cost?", a: faqs[5].a },
      {
        q: "Do you offer custom pricing?",
        a: "Yes for enterprise engagements. The first five rungs (Get Discovered through Business Operating System) use indicative ranges published on the pricing page. The sixth rung (Enterprise Growth Partner) is scoped per engagement.",
      },
      {
        q: "Is there a minimum commitment?",
        a: "Entry rungs can be one-time engagements. Recurring rungs (Generate Customers, Growth Engine, Business Operating System) typically have a minimum 3-month commitment so the work has time to compound and be measured.",
      },
      {
        q: "What's not included?",
        a: "Udyamita is not a financial institution - we don't lend, take deposits, or provide investment advice. Legal and tax work is coordinated through qualified CAs and CSs. We're honest about these boundaries.",
      },
    ],
  },
  {
    category: "Partnering",
    items: [
      { q: "How can I become a Udyamita partner?", a: faqs[7].a },
      {
        q: "Who can become a partner?",
        a: "CAs, CSs, accountants, consultants, business advisors, associations, technology companies, agencies, and community organisations - the people local businesses already trust.",
      },
      {
        q: "How does the partner journey work?",
        a: "Seven steps: Apply, Qualify, Enable, Refer, Track, Earn, Grow. You apply, we qualify and enable you, you refer clients, we track and you earn, and the relationship grows from there.",
      },
      {
        q: "Do you invent partner commissions?",
        a: "No. Partner terms are agreed on qualification - we don't publish fabricated commission structures. The model is built on the honest principle that the relationship is the moat.",
      },
    ],
  },
];

export default function FaqPage() {
  const allFaqs = faqGroups.flatMap((g) => g.items);
  const faqSchema = faqPageJsonLd(allFaqs);

  return (
    <PageShell>
      <Breadcrumbs items={[{ label: "FAQ" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd([{ label: "FAQ" }])),
        }}
      />

      <PageHero
        no="41"
        label="FAQ"
        title="Straight answers, not pitch-deck words."
        intro="The same questions, answered the way we'd answer them in a room - direct, factual, useful."
      />

      <section className="section-pad bg-background pt-0">
        <div className="udyam-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Sidebar - category index */}
            <aside className="lg:col-span-4">
              <div className="sticky top-28">
                <p className="eyebrow-sm text-muted-foreground mb-4">
                  Categories
                </p>
                <nav className="flex flex-col gap-1">
                  {faqGroups.map((g, i) => (
                    <a
                      key={g.category}
                      href={`#group-${i}`}
                      className="group flex items-center justify-between border-l-2 border-border py-2.5 pl-4 pr-2 text-sm text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                    >
                      {g.category}
                      <span className="eyebrow-sm tnum text-muted-foreground/60">
                        {String(g.items.length).padStart(2, "0")}
                      </span>
                    </a>
                  ))}
                </nav>
                <div className="mt-8 rounded-xl border border-border bg-paper p-5">
                  <p className="font-serif text-lg leading-snug">
                    Still have a question?
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    We answer directly - no funnel, no pressure.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:gap-2.5 transition-all"
                  >
                    Talk to us
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </aside>

            {/* Main - accordion groups */}
            <div className="lg:col-span-8">
              {faqGroups.map((group, gi) => (
                <div key={group.category} id={`group-${gi}`} className="mb-12 scroll-mt-28">
                  <div className="flex items-baseline gap-4 border-b border-border pb-4">
                    <span className="eyebrow-sm tnum text-muted-foreground">
                      {String(gi + 1).padStart(2, "0")}
                    </span>
                    <h2 className="h-section">{group.category}</h2>
                  </div>
                  <Accordion type="single" collapsible className="flex flex-col">
                    {group.items.map((item, i) => (
                      <AccordionItem
                        key={item.q}
                        value={`g${gi}-i${i}`}
                        className="border-b border-border"
                      >
                        <AccordionTrigger className="py-5 text-left hover:no-underline">
                          <span className="font-serif text-lg leading-snug pr-4">
                            {item.q}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="pb-5 text-muted-foreground leading-relaxed">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Run your business health check."
        intro="Two minutes. Nine questions. Your score, your largest growth leak, and the single move worth making first."
        primary={{ label: "Start the diagnosis", href: "/business-health-check" }}
        secondary={{ label: "Talk to us", href: "/contact" }}
      />
    </PageShell>
  );
}
