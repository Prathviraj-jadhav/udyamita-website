"use client";

import * as React from "react";
import { ThumbsUp, ThumbsDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

type State = "idle" | "submitting" | "done";

/**
 * A "Was this helpful?" feedback widget for article pages.
 * POSTs to /api/feedback. Optional comment field expands on click.
 */
export function FeedbackWidget({ slug }: { slug: string }) {
  const [state, setState] = React.useState<State>("idle");
  const [helpful, setHelpful] = React.useState<boolean | null>(null);
  const [comment, setComment] = React.useState("");
  const [showComment, setShowComment] = React.useState(false);

  async function submit(value: boolean) {
    if (state === "submitting") return;
    setHelpful(value);
    setState("submitting");
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, helpful: value, comment: comment || undefined }),
      });
      if (res.ok) {
        setState("done");
      } else {
        setState("idle");
      }
    } catch {
      setState("idle");
    }
  }

  if (state === "done") {
    return (
      <div className="rounded-2xl border border-border bg-paper p-6">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background">
            <Check className="h-4 w-4" strokeWidth={1.5} />
          </span>
          <p className="font-serif text-lg">Thank you for the feedback.</p>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          It helps us write more of what&apos;s useful and less of what isn&apos;t.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-background p-6">
      <p className="eyebrow-sm text-muted-foreground">Was this helpful?</p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => submit(true)}
          disabled={state === "submitting"}
          className={cn(
            "group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors disabled:opacity-50",
            helpful === true
              ? "border-foreground bg-foreground text-background"
              : "border-border text-muted-foreground hover:border-foreground hover:text-foreground",
          )}
        >
          <ThumbsUp className="h-4 w-4" strokeWidth={1.5} />
          Yes
        </button>
        <button
          type="button"
          onClick={() => submit(false)}
          disabled={state === "submitting"}
          className={cn(
            "group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors disabled:opacity-50",
            helpful === false
              ? "border-foreground bg-foreground text-background"
              : "border-border text-muted-foreground hover:border-foreground hover:text-foreground",
          )}
        >
          <ThumbsDown className="h-4 w-4" strokeWidth={1.5} />
          No
        </button>
        <button
          type="button"
          onClick={() => setShowComment((v) => !v)}
          className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline transition-colors"
        >
          {showComment ? "Hide" : "Add a note"}
        </button>
      </div>
      {showComment && (
        <div className="mt-4">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="What could be better? (optional)"
            rows={3}
            className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
          />
          <button
            type="button"
            onClick={() => submit(helpful ?? true)}
            disabled={state === "submitting"}
            className="mt-3 inline-flex items-center rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90 disabled:opacity-50"
          >
            {state === "submitting" ? "Sending…" : "Send feedback"}
          </button>
        </div>
      )}
    </div>
  );
}
