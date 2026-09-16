import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/site/page-shell";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { PageHero } from "@/components/site/page-hero";
import { CtaBand } from "@/components/site/page-hero";

type Section = { heading: string; body: string[] };

type LegalContent = {
  title: string;
  description: string;
  path: string;
  no: string;
  label: string;
  heroTitle: string;
  heroIntro: string;
  lastUpdated: string;
  sections: Section[];
};

export function buildLegalMetadata(c: LegalContent): Metadata {
  return {
    title: c.title,
    description: c.description,
    alternates: { canonical: `https://udyamita.com${c.path}` },
    openGraph: {
      title: `${c.title} · Udyamita`,
      description: c.description,
      url: `https://udyamita.com${c.path}`,
      type: "website",
    },
  };
}

export function LegalPage({ c }: { c: LegalContent }) {
  return (
    <PageShell>
      <Breadcrumbs items={[{ label: c.title }]} />
      <PageHero
        no={c.no}
        label={c.label}
        title={c.heroTitle}
        intro={c.heroIntro}
      />
      <section className="section-pad bg-background pt-0">
        <div className="udyam-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Sidebar - section index */}
            <aside className="lg:col-span-4">
              <div className="sticky top-28">
                <p className="eyebrow-sm text-muted-foreground mb-2">
                  Last updated
                </p>
                <p className="text-sm text-foreground mb-6">
                  {c.lastUpdated}
                </p>
                <p className="eyebrow-sm text-muted-foreground mb-4">
                  On this page
                </p>
                <nav className="flex flex-col gap-1">
                  {c.sections.map((s, i) => (
                    <a
                      key={s.heading}
                      href={`#sec-${i}`}
                      className="border-l-2 border-border py-2 pl-4 pr-2 text-sm text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                    >
                      {s.heading}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main content */}
            <div className="lg:col-span-8">
              <div className="udyam-prose">
                {c.sections.map((s, i) => (
                  <section key={s.heading} id={`sec-${i}`} className="scroll-mt-28">
                    <h2>{s.heading}</h2>
                    {s.body.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </section>
                ))}
              </div>

              <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-6 text-sm text-muted-foreground">
                {["Privacy", "Terms", "Cookies", "Accessibility"].map((l) => {
                  const href = `/${l.toLowerCase()}`;
                  return (
                    <Link
                      key={l}
                      href={href}
                      className="transition-colors hover:text-foreground"
                    >
                      {l}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <CtaBand
        title="Questions about this policy?"
        intro="We answer directly. Email us and we'll get back within one business day."
        primary={{ label: "Contact us", href: "/contact" }}
        secondary={{ label: "Back to home", href: "/" }}
      />
    </PageShell>
  );
}

export type { LegalContent, Section };
