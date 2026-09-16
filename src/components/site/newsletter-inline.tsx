"use client";

import * as React from "react";
import { ArrowRight, Check } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

/**
 * Compact inline newsletter signup. Posts to /api/newsletter.
 * Used on the blog index and at the bottom of article pages.
 */
export function NewsletterInline({
  title = "Subscribe to The Growth Letter",
  intro = "One practical idea on growth, technology, sales and systems. No motivational wallpaper. Unsubscribe anytime.",
  compact = false,
}: {
  title?: string;
  intro?: string;
  compact?: boolean;
}) {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "loading" | "done">("idle");

  async function subscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === "loading") return;
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("done");
      setEmail("");
      toast.success("You're subscribed.", {
        description: "Look out for the next issue of The Growth Letter.",
      });
    } catch {
      setStatus("idle");
      toast.error("Could not subscribe", {
        description: "Please try again in a moment.",
      });
    }
  }

  return (
    <section className={cn("bg-paper", !compact && "section-pad")}>
      <div className="udyam-container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className={cn("font-serif font-medium tracking-tight", compact ? "display" : "display-lg")}>
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
            {intro}
          </p>

          {status === "done" ? (
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-background px-5 py-3 text-sm">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-foreground text-background">
                <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
              </span>
              <span>You&apos;re subscribed. Thank you.</span>
            </div>
          ) : (
            <form
              onSubmit={subscribe}
              className="mx-auto mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row"
              noValidate
            >
              <label htmlFor="nl-email" className="sr-only">
                Email address
              </label>
              <input
                id="nl-email"
                type="email"
                required
                placeholder="you@business.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 flex-1 rounded-full border border-border bg-background px-5 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-foreground"
                aria-label="Email address"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-foreground/90 disabled:opacity-60"
              >
                <span className="relative block h-4 overflow-hidden">
                  <span className="block transition-transform duration-500 [transition-timing-function:cubic-bezier(.25,.1,.25,1)] group-hover:-translate-y-1/2">
                    <span className="block h-4 leading-4 whitespace-nowrap">
                      {status === "loading" ? "Subscribing" : "Subscribe"}
                    </span>
                    <span className="block h-4 leading-4 whitespace-nowrap" aria-hidden>
                      {status === "loading" ? "Subscribing" : "Subscribe"}
                    </span>
                  </span>
                </span>
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5" strokeWidth={1.5} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
