import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/site/page-shell";
import { Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your submission has been received. Here's what happens next.",
  alternates: { canonical: "https://udyamita.com/thank-you" },
  openGraph: {
    title: "Thank You · Udyamita",
    description: "Your submission has been received.",
    url: "https://udyamita.com/thank-you",
    type: "website",
  },
};

type FormType = "contact" | "partner" | "health-check" | "newsletter";

const content: Record<
  FormType,
  { title: string; message: string; next: string; cta: { label: string; href: string } }
> = {
  contact: {
    title: "Your message landed.",
    message:
      "We read every enquiry directly. You'll hear back within one business day - with a real answer, not an auto-reply.",
    next: "While you wait, run the Business Health Check to see your growth leak before we talk.",
    cta: { label: "Run the Business Health Check", href: "/business-health-check" },
  },
  partner: {
    title: "Your application is in.",
    message:
      "We review partner applications carefully. You'll hear back within two business days about next steps.",
    next: "In the meantime, explore the Growth OS to understand the system your clients would use.",
    cta: { label: "Explore the Growth OS", href: "/growth-os" },
  },
  "health-check": {
    title: "Your growth plan is on its way.",
    message:
      "We've received your score and largest growth leak. You'll get a practical first-move plan - no motivational wallpaper.",
    next: "Want to talk it through now? Book a diagnosis and we'll walk you through the result.",
    cta: { label: "Book a diagnosis", href: "/contact" },
  },
  newsletter: {
    title: "You're on the list.",
    message:
      "The Growth Letter arrives with practical ideas on growth, technology, sales and systems. No motivational wallpaper.",
    next: "Read the latest insights while you wait for the next issue.",
    cta: { label: "Read the latest insights", href: "/insights" },
  },
};

const FORM_TYPES: FormType[] = ["contact", "partner", "health-check", "newsletter"];

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const sp = await searchParams;
  const type: FormType = FORM_TYPES.includes(sp.type as FormType)
    ? (sp.type as FormType)
    : "contact";
  const c = content[type];

  return (
    <PageShell>
      <div className="udyam-container flex min-h-[70vh] flex-col items-center justify-center py-32 text-center">
        <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-foreground text-background">
          <Check className="h-7 w-7" strokeWidth={1.5} />
        </span>
        <p className="eyebrow text-muted-foreground mt-8">Thank you</p>
        <h1 className="display-lg mt-4 max-w-2xl">{c.title}</h1>
        <p className="mt-6 max-w-md text-lg text-muted-foreground leading-relaxed">
          {c.message}
        </p>

        <div className="mt-10 w-full max-w-md rounded-2xl border border-border bg-paper p-6 text-left">
          <p className="eyebrow-sm text-muted-foreground">What happens next</p>
          <p className="mt-2 text-sm text-foreground leading-relaxed">{c.next}</p>
          <Link
            href={c.cta.href}
            className="group mt-5 inline-flex items-center gap-3 rounded-full bg-foreground pl-6 pr-2 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            <span className="relative block h-5 overflow-hidden">
              <span className="block transition-transform duration-500 [transition-timing-function:cubic-bezier(.25,.1,.25,1)] group-hover:-translate-y-1/2">
                <span className="block h-5 leading-5 whitespace-nowrap">{c.cta.label}</span>
                <span className="block h-5 leading-5 whitespace-nowrap" aria-hidden>{c.cta.label}</span>
              </span>
            </span>
            <span className="inline-flex h-[30px] w-[30px] items-center justify-center rounded-full border border-background/30 text-background transition-transform duration-500 group-hover:rotate-[-45deg]">
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </span>
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <Link href="/" className="transition-colors hover:text-foreground">
            Back to home
          </Link>
          <Link href="/insights" className="transition-colors hover:text-foreground">
            Read insights
          </Link>
          <Link href="/faq" className="transition-colors hover:text-foreground">
            FAQ
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
