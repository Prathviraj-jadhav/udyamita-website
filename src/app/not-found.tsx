import Link from "next/link";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/sections/footer";
import { CookieBanner } from "@/components/site/cookie-banner";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:text-background"
      >
        Skip to content
      </a>
      <Navbar variant="solid" />
      <main
        id="main"
        className="flex flex-1 items-center justify-center px-6 pt-32 pb-16"
      >
        <div className="flex flex-col items-center text-center max-w-xl">
          <p className="eyebrow text-muted-foreground mb-6">404 · Not found</p>
          <h1 className="display-xl text-foreground">
            This page leaked.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-md">
            The page you were looking for isn&apos;t here - or it moved, or it
            was never built. The good news: finding growth leaks is what we do.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 rounded-full bg-foreground pl-6 pr-2 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              <span className="relative block h-5 overflow-hidden">
                <span className="block transition-transform duration-500 [transition-timing-function:cubic-bezier(.25,.1,.25,1)] group-hover:-translate-y-1/2">
                  <span className="block h-5 leading-5 whitespace-nowrap">Back to home</span>
                  <span className="block h-5 leading-5 whitespace-nowrap" aria-hidden>Back to home</span>
                </span>
              </span>
              <span className="inline-flex h-[30px] w-[30px] items-center justify-center rounded-full border border-background/30 text-background transition-transform duration-500 group-hover:rotate-[-45deg]">
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </Link>
            <Link
              href="/business-health-check"
              className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline transition-colors"
            >
              Run your business health check
            </Link>
          </div>

          {/* helpful links grid */}
          <div className="mt-16 grid w-full grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4">
            {[
              { label: "Services", href: "/services" },
              { label: "Industries", href: "/industries" },
              { label: "Case Studies", href: "/case-studies" },
              { label: "Insights", href: "/insights" },
              { label: "Pricing", href: "/pricing" },
              { label: "Partners", href: "/partners" },
              { label: "FAQ", href: "/faq" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group bg-background p-4 text-sm text-muted-foreground transition-colors hover:bg-paper hover:text-foreground"
              >
                <span className="flex items-center justify-between">
                  {link.label}
                  <span className="opacity-0 transition-opacity group-hover:opacity-100" aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
