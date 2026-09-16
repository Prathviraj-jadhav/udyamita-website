"use client";

import * as React from "react";
import Link from "next/link";
import { brand, footerNav, footerResources, footerLegal } from "@/lib/content";
import { assets } from "@/lib/assets";
import { LogoMark } from "../logo";
import { ArrowUpRight, ArrowRight } from "lucide-react";

/** Map a footer nav group + label to a real route. */
function footerLinkHref(group: string, label: string): string {
  const slug = label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  if (group === "Company") {
    if (label === "Why Udyamita") return "/why-udyamita";
    if (label === "About") return "/about";
    if (label === "Consulting") return "/consulting";
    if (label === "Services") return "/services";
    if (label === "Industries") return "/industries";
    if (label === "Case Studies") return "/case-studies";
    if (label === "Insights") return "/insights";
  }
  if (group === "Solutions") return `/services/${slug}`;
  if (group === "Partners") {
    if (label === "Referral Program") return "/partners";
    return "/partners";
  }
  if (group === "Institutional") {
    if (label === "Investors") return "/investors";
    return "/investors";
  }
  return "/";
}

export function Footer() {
  const [email, setEmail] = React.useState("");
  const [subscribed, setSubscribed] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  async function subscribe(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!email) return;
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("failed");
      setSubscribed(true);
      setEmail("");
    } catch {
      setError("Please try again.");
    }
  }

  return (
    <footer
      className="site-footer relative isolate flex flex-col overflow-hidden bg-foreground text-background"
      style={{ minHeight: "100svh" }}
    >
      {/* Desktop / tablet: full-bleed video, copy directly on artwork */}
      <div className="absolute inset-0 -z-10 hidden sm:block">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={assets.footerPoster}
          className="absolute inset-0 h-full w-full object-cover object-center"
        >
          <source src={assets.footerVideo} type="video/mp4" />
        </video>
        {/* monochrome flat scrim for legibility (no color gradient) */}
        <div className="absolute inset-0 bg-foreground/60" aria-hidden />
      </div>

      {/* Mobile: video as normal flow item after copy */}
      <div className="sm:hidden">
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-foreground">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster={assets.footerPoster}
            className="absolute inset-0 h-full w-full object-contain"
          >
            <source src={assets.footerVideo} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="udyam-container relative flex flex-1 flex-col py-16 sm:py-24">
        {/* Top: brand statement */}
        <div className="max-w-4xl">
          <div className="flex items-center gap-3">
            <LogoMark size={32} className="text-background" />
            <span className="font-serif text-2xl">Udyamita</span>
          </div>
          <p className="mt-6 eyebrow text-background/70">
            {brand.positioning}
          </p>
          <h2 className="display-lg mt-5 text-background">
            Growth systems for businesses ready to stop guessing.
          </h2>
          <p className="mt-6 max-w-md text-background/70 leading-relaxed">
            {brand.tagline}
          </p>
        </div>

        {/* Mid: nav grid + newsletter */}
        <div
          className="mt-16 grid gap-10 border-t border-background/15 pt-12 sm:grid-cols-2 lg:grid-cols-5"
          style={{ gridTemplateColumns: "minmax(0,1.45fr) repeat(3, minmax(0,0.85fr)) minmax(0,1.25fr)" }}
        >
          {/* Resources (first, wider) */}
          <div className="lg:col-span-1">
            <p className="eyebrow-sm text-background/60">Resources</p>
            <ul className="mt-4 space-y-3">
              {footerResources.map((r) => {
                const href =
                  r === "Business Health Check"
                    ? "/business-health-check"
                    : r === "Pricing"
                      ? "/pricing"
                      : r === "FAQs"
                        ? "/#faq"
                        : "/contact";
                return (
                  <li key={r}>
                    <Link
                      href={href}
                      className="group inline-flex items-center gap-1.5 text-sm text-background/90 transition-colors hover:text-background"
                    >
                      {r}
                      <ArrowUpRight
                        className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100"
                        strokeWidth={1.5}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {footerNav.map((group) => (
            <div key={group.title}>
              <p className="eyebrow-sm text-background/60">{group.title}</p>
              <ul className="mt-4 space-y-3">
                {group.links.map((l) => (
                  <li key={l}>
                    <Link
                      href={footerLinkHref(group.title, l)}
                      className="text-sm text-background/90 transition-colors hover:text-background"
                    >
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <p className="eyebrow-sm text-background/50">The Growth Letter</p>
            <p className="mt-4 text-sm text-background/70 leading-relaxed">
              Practical ideas on growth, technology, sales and systems. No
              motivational wallpaper.
            </p>
            {subscribed ? (
              <p className="mt-4 text-sm text-background">
                You&apos;re on the list.
              </p>
            ) : (
              <form onSubmit={subscribe} className="mt-4">
                <div className="flex items-center gap-2 border-b border-background/30 pb-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@business.in"
                    aria-label="Email address"
                    className="w-full bg-transparent text-sm text-background placeholder:text-background/40 focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-background text-foreground transition-transform hover:rotate-[-45deg]"
                  >
                    <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                  </button>
                </div>
                {error && <p className="mt-2 text-xs text-background/60">{error}</p>}
              </form>
            )}
          </div>
        </div>

        {/* Bottom: legal + meta */}
        <div className="mt-auto">
          <div className="mt-16 flex flex-col gap-4 border-t border-background/20 pt-6 text-xs text-background/75 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {brand.legalName} · {brand.location}
            </p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {footerLegal.map((l) => (
                <li key={l}>
                  <Link href="/" className="transition-colors hover:text-background">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="eyebrow-sm text-background/70">GET DISCOVERED · WIN CUSTOMERS · RUN BETTER</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
