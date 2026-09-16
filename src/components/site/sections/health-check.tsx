"use client";

import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Check, ChevronRight, ChevronLeft, AlertCircle } from "lucide-react";
import {
  healthQuestions,
  healthAnswerScale,
  healthDimensions,
  easeSwiss,
} from "@/lib/content";
import { cn } from "@/lib/utils";
import { Reveal, EditorialHeading, SectionLabel, TextRollButton } from "../primitives";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { industries } from "@/lib/content";

type Phase = "intro" | "questions" | "score" | "form" | "done";

const dimensionRung: Record<string, { rung: string; move: string }> = {
  DISCOVERABILITY: {
    rung: "Get Discovered",
    move: "Fix your Google Business Profile, local SEO and reviews so customers actually find you first.",
  },
  TRUST: {
    rung: "Build Trust",
    move: "Build a credible website and conversion assets so the people who find you don't hesitate.",
  },
  "LEAD FLOW": {
    rung: "Generate Customers",
    move: "Route every enquiry into a tracked lead system with measured ad performance.",
  },
  "FOLLOW-UP": {
    rung: "Generate Customers",
    move: "Install a CRM with automated follow-up so no lead goes cold.",
  },
  SYSTEMS: {
    rung: "Business Operating System",
    move: "Systematise operations with CRM, automation and analytics before you scale.",
  },
};

export function HealthCheck() {
  const reduce = useReducedMotion();
  const [phase, setPhase] = React.useState<Phase>("intro");
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState<Record<string, number>>({});
  const [result, setResult] = React.useState<{
    score: number;
    subscores: Record<string, number>;
    leak: string;
    rung: string;
    move: string;
  } | null>(null);

  const total = healthQuestions.length;
  const current = healthQuestions[step];
  const progressPct = phase === "questions" ? ((step) / total) * 100 : 0;

  function answer(value: number) {
    const next = { ...answers, [current.id]: value };
    setAnswers(next);
    if (step < total - 1) {
      setStep(step + 1);
    } else {
      computeResult(next);
    }
  }

  function computeResult(all: Record<string, number>) {
    const subscores: Record<string, number> = {};
    for (const dim of healthDimensions) {
      const qs = healthQuestions.filter((q) => q.dimension === dim);
      const sum = qs.reduce((acc, q) => acc + (all[q.id] ?? 0), 0);
      const max = qs.length * 4;
      subscores[dim] = Math.round((sum / max) * 100);
    }
    const totalSum = Object.values(all).reduce((a, b) => a + b, 0);
    const score = Math.round((totalSum / (total * 4)) * 100);
    // lowest dimension = biggest leak
    const leak = Object.entries(subscores).sort((a, b) => a[1] - b[1])[0][0];
    const rec = dimensionRung[leak];
    setResult({ score, subscores, leak, rung: rec.rung, move: rec.move });
    setPhase("score");
  }

  return (
    <section id="health-check" className="section-pad bg-background">
      <div className="udyam-container">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Left - intro / context */}
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel no="07">Business Health Check</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <EditorialHeading className="mt-6">
                Know what to fix next.
              </EditorialHeading>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-muted-foreground leading-relaxed">
                Nine questions. Two minutes. A score across five dimensions,
                your largest growth leak, and the single move worth making
                first. Free, and built to be honest.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                {healthDimensions.map((d) => (
                  <span key={d} className="eyebrow-sm text-muted-foreground">
                    {d}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right - interactive panel */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-paper">
              {/* progress bar */}
              {phase !== "intro" && phase !== "done" && (
                <div className="border-b border-border px-6 py-4 sm:px-8">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="eyebrow-sm">
                      {phase === "score" ? "Result" : "Diagnosis"}
                    </span>
                    <span className="tnum">
                      {phase === "questions"
                        ? `${step + 1} / ${total}`
                        : phase === "form"
                          ? "Capture"
                          : "Complete"}
                    </span>
                  </div>
                  <Progress
                    value={
                      phase === "questions"
                        ? ((step + 1) / total) * 100
                        : phase === "score"
                          ? 80
                          : 100
                    }
                    className="mt-3 h-1"
                  />
                </div>
              )}

              <div className="p-6 sm:p-8">
                <AnimatePresence mode="wait">
                  {/* INTRO */}
                  {phase === "intro" && (
                    <motion.div
                      key="intro"
                      initial={reduce ? false : { opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="eyebrow text-muted-foreground">Start</p>
                      <h3 className="mt-4 font-serif text-3xl sm:text-4xl leading-tight">
                        How healthy is your business growth, really?
                      </h3>
                      <p className="mt-4 text-muted-foreground">
                        Answer honestly. We won&apos;t pretend a low score is
                        fine - and we won&apos;t invent a problem that isn&apos;t
                        there.
                      </p>
                      <div className="mt-8 flex flex-wrap items-center gap-4">
                        <TextRollButton
                          onClick={() => {
                            setStep(0);
                            setPhase("questions");
                          }}
                          variant="primary"
                        >
                          Start the diagnosis
                        </TextRollButton>
                        <span className="text-xs text-muted-foreground">
                          2 minutes · No signup to see your score
                        </span>
                      </div>
                    </motion.div>
                  )}

                  {/* QUESTIONS */}
                  {phase === "questions" && current && (
                    <motion.div
                      key={`q-${current.id}`}
                      initial={reduce ? false : { opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={reduce ? { opacity: 0 } : { opacity: 0, x: -24 }}
                      transition={{ duration: 0.35, ease: easeSwiss }}
                    >
                      <span className="eyebrow-sm text-muted-foreground">
                        {current.dimension}
                      </span>
                      <h3 className="mt-3 font-serif text-2xl sm:text-3xl leading-snug">
                        {current.question}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {current.help}
                      </p>
                      <div className="mt-7 grid gap-2.5">
                        {healthAnswerScale.map((opt) => {
                          const selected = answers[current.id] === opt.value;
                          return (
                            <button
                              key={opt.value}
                              type="button"
                              onClick={() => answer(opt.value)}
                              className={cn(
                                "group flex items-center justify-between rounded-xl border px-5 py-4 text-left transition-all",
                                selected
                                  ? "border-foreground bg-foreground text-background"
                                  : "border-border bg-background hover:border-foreground/40",
                              )}
                            >
                              <span className="flex items-center gap-3">
                                <span
                                  className={cn(
                                    "inline-flex h-6 w-6 items-center justify-center rounded-full border text-xs tnum",
                                    selected
                                      ? "border-background"
                                      : "border-foreground/20 text-muted-foreground",
                                  )}
                                >
                                  {opt.value}
                                </span>
                                <span className="text-sm font-medium">
                                  {opt.label}
                                </span>
                              </span>
                              <ChevronRight
                                className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100"
                                strokeWidth={1.5}
                              />
                            </button>
                          );
                        })}
                      </div>
                      {step > 0 && (
                        <button
                          type="button"
                          onClick={() => setStep(step - 1)}
                          className="mt-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
                        >
                          <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
                          Back
                        </button>
                      )}
                    </motion.div>
                  )}

                  {/* SCORE */}
                  {phase === "score" && result && (
                    <motion.div
                      key="score"
                      initial={reduce ? false : { opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, ease: easeSwiss }}
                    >
                      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                          <p className="eyebrow-sm text-muted-foreground">
                            Udyamita Business Health Score
                          </p>
                          <div className="mt-2 flex items-end gap-2">
                            <span className="font-serif text-6xl sm:text-7xl tnum leading-none">
                              {result.score}
                            </span>
                            <span className="mb-2 text-muted-foreground">
                              / 100
                            </span>
                          </div>
                          <p className="mt-2 text-xs text-muted-foreground">
                            Demo values - your real inputs produced this score.
                          </p>
                        </div>
                        <ScoreRing value={result.score} />
                      </div>

                      {/* subscores */}
                      <div className="mt-8 grid gap-3 sm:grid-cols-2">
                        {Object.entries(result.subscores).map(([dim, val]) => (
                          <div
                            key={dim}
                            className={cn(
                              "rounded-xl border p-4",
                              dim === result.leak
                                ? "border-foreground bg-background"
                                : "border-border bg-background",
                            )}
                          >
                            <div className="flex items-center justify-between">
                              <span className="eyebrow-sm">{dim}</span>
                              {dim === result.leak && (
                                <span className="inline-flex items-center gap-1 text-[0.6rem] uppercase tracking-wider text-muted-foreground">
                                  <AlertCircle className="h-3 w-3" />
                                  Leak
                                </span>
                              )}
                            </div>
                            <div className="mt-2 flex items-baseline gap-1">
                              <span className="font-serif text-3xl tnum">
                                {val}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                /100
                              </span>
                            </div>
                            <Progress
                              value={val}
                              className="mt-3 h-1"
                            />
                          </div>
                        ))}
                      </div>

                      {/* leak + move */}
                      <div className="mt-8 rounded-xl bg-foreground p-6 text-background">
                        <p className="eyebrow-sm text-background/60">
                          Your biggest growth leak
                        </p>
                        <p className="mt-2 font-serif text-2xl">
                          {result.leak}
                        </p>
                        <p className="mt-4 eyebrow-sm text-background/60">
                          Recommended first move
                        </p>
                        <p className="mt-2 text-background/85">{result.move}</p>
                        <p className="mt-4 text-xs text-background/50">
                          Suggested rung:{" "}
                          <span className="text-background">{result.rung}</span>
                        </p>
                      </div>

                      <div className="mt-8 flex flex-wrap items-center gap-4">
                        <TextRollButton
                          onClick={() => setPhase("form")}
                          variant="primary"
                        >
                          Get my detailed growth plan
                        </TextRollButton>
                        <button
                          type="button"
                          onClick={() => {
                            setAnswers({});
                            setStep(0);
                            setPhase("intro");
                          }}
                          className="text-sm text-muted-foreground hover:text-foreground"
                        >
                          Retake
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* FORM */}
                  {phase === "form" && result && (
                    <LeadForm
                      onDone={() => setPhase("done")}
                      score={result.score}
                      leak={result.leak}
                      rung={result.rung}
                    />
                  )}

                  {/* DONE */}
                  {phase === "done" && (
                    <motion.div
                      key="done"
                      initial={reduce ? false : { opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background">
                        <Check className="h-6 w-6" strokeWidth={1.5} />
                      </span>
                      <h3 className="mt-6 font-serif text-3xl">
                        Your growth plan is on its way.
                      </h3>
                      <p className="mt-3 text-muted-foreground">
                        We&apos;ll review your score and largest leak, then send
                        a practical first-move plan - no motivational wallpaper.
                      </p>
                      <div className="mt-8">
                        <TextRollButton href="/contact" variant="ghost">
                          Talk to us now
                        </TextRollButton>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScoreRing({ value }: { value: number }) {
  const r = 38;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;
  return (
    <svg width="96" height="96" viewBox="0 0 96 96" className="-rotate-90">
      <circle
        cx="48"
        cy="48"
        r={r}
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        className="text-foreground/15"
      />
      <circle
        cx="48"
        cy="48"
        r={r}
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeDasharray={c}
        strokeDashoffset={offset}
        strokeLinecap="round"
        className="text-foreground transition-[stroke-dashoffset] duration-1000"
      />
    </svg>
  );
}

function LeadForm({
  onDone,
  score,
  leak,
  rung,
}: {
  onDone: () => void;
  score: number;
  leak: string;
  rung: string;
}) {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: fd.get("name"),
      business: fd.get("business"),
      phone: fd.get("phone"),
      email: fd.get("email"),
      city: fd.get("city"),
      industry: fd.get("industry"),
      healthScore: score,
      dominantProblem: leak,
      recommendedRung: rung,
      source: "website_health_check",
    };
    try {
      const res = await fetch("/api/health-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      window.location.href = "/thank-you?type=health-check";
    } catch {
      setError("Something went wrong. Please try again or call us.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="grid gap-4 sm:grid-cols-2"
    >
      <Field label="Name" name="name" required />
      <Field label="Business" name="business" required />
      <Field label="Phone" name="phone" type="tel" required />
      <Field label="Email" name="email" type="email" required />
      <Field label="City" name="city" required />
      <div className="grid gap-2">
        <Label htmlFor="industry" className="text-xs text-muted-foreground">
          Industry
        </Label>
        <Select name="industry" required>
          <SelectTrigger id="industry" className="h-11">
            <SelectValue placeholder="Select industry" />
          </SelectTrigger>
          <SelectContent>
            {industries.map((ind) => (
              <SelectItem key={ind.name} value={ind.name}>
                {ind.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="sm:col-span-2 mt-2 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={loading}
          className="group inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90 disabled:opacity-50"
        >
          {loading ? "Sending…" : "Send my growth plan"}
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-background/30 transition-transform group-hover:rotate-[-45deg]">
            <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </span>
        </button>
        {error && <p className="text-sm text-destructive">{error}</p>}
      </div>
      <p className="sm:col-span-2 text-xs text-muted-foreground">
        We store your score and largest leak to tailor your plan. No spam, ever.
      </p>
    </motion.form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={name} className="text-xs text-muted-foreground">
        {label}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        required={required}
        className="h-11 bg-background"
      />
    </div>
  );
}
