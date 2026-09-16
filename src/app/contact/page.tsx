import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/site/page-shell";
import { PageHero, CtaBand } from "@/components/site/page-hero";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import {
  Reveal,
  SectionLabel,
  EditorialHeading,
  Hairline,
} from "@/components/site/primitives";
import { brand } from "@/lib/content";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact - Start a conversation that ends with a number",
  description:
    "Tell us where it hurts. We'll tell you what to fix first - and whether Udyamita is the right partner to fix it. Email, phone and contact form for Udyamita Global LLP.",
  alternates: { canonical: "https://udyamita.com/contact" },
  openGraph: {
    title: "Contact - Udyamita Global LLP",
    description:
      "Start a conversation that ends with a number. Email, phone and contact form.",
    url: "https://udyamita.com/contact",
    type: "website",
  },
};

const crumbItems = [{ label: "Contact" }];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://udyamita.com" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://udyamita.com/contact" },
  ],
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Udyamita Global LLP",
  description:
    "Start a conversation that ends with a number. Tell us where it hurts - we'll tell you what to fix first.",
  url: "https://udyamita.com/contact",
  mainEntity: {
    "@type": "Organization",
    name: "Udyamita Global LLP",
    email: brand.email,
    telephone: brand.phone,
    areaServed: ["Pune", "Maharashtra", "India"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
  },
};

export default function ContactPage() {
  return (
    <PageShell>
      <Breadcrumbs items={crumbItems} />

      <PageHero
        no="19"
        label="Contact"
        title="Start a conversation that ends with a number."
        intro="Tell us where it hurts. We'll tell you what to fix first - and whether Udyamita is the right partner to fix it. No discovery call theatre. A specific diagnosis, or a straight no."
      />

      {/* Contact details + form */}
      <section className="section-pad bg-background">
        <div className="udyam-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left - details */}
            <div className="lg:col-span-4">
              <Reveal>
                <SectionLabel no="01">Direct</SectionLabel>
              </Reveal>
              <Reveal delay={0.05}>
                <EditorialHeading className="mt-6">
                  Reach the people who do the work.
                </EditorialHeading>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-sm text-muted-foreground leading-relaxed">
                  No helpdesk queue. The same team that diagnoses your growth
                  leak answers your message.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <dl className="mt-10 space-y-px border-t border-border">
                  <ContactRow
                    icon={<Mail className="h-4 w-4" strokeWidth={1.5} />}
                    label="Email"
                    value={brand.email}
                    href={`mailto:${brand.email}`}
                  />
                  <ContactRow
                    icon={<Phone className="h-4 w-4" strokeWidth={1.5} />}
                    label="Phone"
                    value={brand.phone}
                    href={`tel:${brand.phone.replace(/\s/g, "")}`}
                  />
                  <ContactRow
                    icon={<MapPin className="h-4 w-4" strokeWidth={1.5} />}
                    label="Location"
                    value={brand.location}
                  />
                  <ContactRow
                    icon={<Clock className="h-4 w-4" strokeWidth={1.5} />}
                    label="Hours"
                    value="Mon-Sat · 10:00-19:00 IST"
                  />
                </dl>
              </Reveal>
            </div>

            {/* Right - form */}
            <div className="lg:col-span-8">
              <Reveal delay={0.1}>
                <div className="rounded-2xl border border-border bg-paper p-6 sm:p-8">
                  <div className="mb-6">
                    <p className="eyebrow-sm text-muted-foreground">
                      Send a message
                    </p>
                    <p className="mt-2 font-serif text-2xl">
                      Tell us where it hurts.
                    </p>
                  </div>
                  <ContactForm />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative - self-serve */}
      <section className="section-pad bg-paper">
        <div className="udyam-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionLabel no="02">Self-serve</SectionLabel>
              </Reveal>
              <Reveal delay={0.05}>
                <EditorialHeading className="mt-6">
                  Not ready to talk? Diagnose first.
                </EditorialHeading>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-md text-muted-foreground leading-relaxed">
                  The Business Health Check is a free nine-question diagnostic.
                  Two minutes. A score across five dimensions, your largest
                  growth leak, and the single move worth making first - without
                  picking up the phone.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8">
                  <a
                    href="/business-health-check"
                    className="group inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
                  >
                    Run the Business Health Check
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-background/30 transition-transform group-hover:rotate-[-45deg]">
                      <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                    </span>
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <div className="rounded-2xl border border-border bg-background p-6 sm:p-8">
                  <ol className="grid gap-5 sm:grid-cols-3">
                    {[
                      {
                        n: "01",
                        title: "Answer 9 questions",
                        body: "Honest inputs about discovery, trust, lead flow, follow-up and systems.",
                      },
                      {
                        n: "02",
                        title: "Get your score",
                        body: "A health score out of 100, with subscores across five growth dimensions.",
                      },
                      {
                        n: "03",
                        title: "See your biggest leak",
                        body: "The single dimension holding back the rest - and the recommended first move.",
                      },
                    ].map((s) => (
                      <li key={s.n} className="flex flex-col gap-2">
                        <span className="eyebrow-sm tnum text-muted-foreground">
                          {s.n}
                        </span>
                        <p className="font-serif text-lg">{s.title}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {s.body}
                        </p>
                      </li>
                    ))}
                  </ol>

                  <Hairline className="my-6" />

                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-sm text-muted-foreground">
                      Or skip straight to a conversation.
                    </p>
                    <Link
                      href="#main"
                      className="text-sm text-foreground underline-offset-4 hover:underline"
                    >
                      Back to the form ↑
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Start with a diagnosis, not a pitch."
        intro="Run the Business Health Check first - then come back with a specific leak to fix. The conversation gets sharper from there."
        primary={{
          label: "Run the Business Health Check",
          href: "/business-health-check",
        }}
        secondary={{ label: "Or apply to partner", href: "/partners" }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
    </PageShell>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="border-b border-border py-4">
      <dt className="flex items-center gap-2 eyebrow-sm text-muted-foreground">
        {icon}
        {label}
      </dt>
      <dd className="mt-1 font-serif text-lg">
        {href ? (
          <a
            href={href}
            className="underline-offset-4 hover:text-royal hover:underline transition-colors"
          >
            {value}
          </a>
        ) : (
          value
        )}
      </dd>
    </div>
  );
}
