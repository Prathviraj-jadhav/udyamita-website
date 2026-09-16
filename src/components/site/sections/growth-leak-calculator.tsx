"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { TrendingDown, ArrowRight } from "lucide-react";
import { Reveal, SectionLabel, EditorialHeading } from "../primitives";
import { easeSwiss } from "@/lib/content";

/**
 * Interactive Growth Leak Calculator.
 * Users input monthly enquiries, current conversion rate, and average deal value.
 * The calculator estimates revenue leaking from follow-up gaps.
 * All outputs are clearly labelled as estimates.
 */
export function GrowthLeakCalculator() {
  const reduce = useReducedMotion();
  const [enquiries, setEnquiries] = React.useState(100);
  const [conversionRate, setConversionRate] = React.useState(20);
  const [dealValue, setDealValue] = React.useState(15000);

  // Estimate: 40% of leads leak due to slow/no follow-up (industry-conservative)
  const leakRate = 0.4;
  const leakedLeads = Math.round(enquiries * (1 - conversionRate / 100) * leakRate);
  const leakedRevenue = leakedLeads * dealValue;
  const potentialRevenue = enquiries * dealValue;
  const leakPercentage = potentialRevenue > 0 ? Math.round((leakedRevenue / potentialRevenue) * 100) : 0;

  const fmt = (n: number) =>
    n >= 10000000
      ? `₹${(n / 10000000).toFixed(1)}Cr`
      : n >= 100000
        ? `₹${(n / 100000).toFixed(1)}L`
        : n >= 1000
          ? `₹${(n / 1000).toFixed(0)}K`
          : `₹${n}`;

  return (
    <section id="leak-calculator" className="section-pad bg-paper">
      <div className="udyam-container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - intro + inputs */}
          <div>
            <Reveal>
              <SectionLabel no="04b">Growth Leak Calculator</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <EditorialHeading className="mt-6">
                How much is follow-up leaking?
              </EditorialHeading>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-muted-foreground leading-relaxed">
                A conservative estimate: 40% of leads that don&apos;t convert
                leak because of slow or inconsistent follow-up. Move the sliders
                to see what that costs you every month.
              </p>
            </Reveal>

            <div className="mt-10 flex flex-col gap-8">
              <Slider
                label="Monthly enquiries"
                value={enquiries}
                min={10}
                max={500}
                step={5}
                onChange={setEnquiries}
                suffix="enquiries/mo"
              />
              <Slider
                label="Current conversion rate"
                value={conversionRate}
                min={5}
                max={80}
                step={5}
                onChange={setConversionRate}
                suffix="%"
              />
              <Slider
                label="Average deal value"
                value={dealValue}
                min={1000}
                max={200000}
                step={1000}
                onChange={setDealValue}
                suffix="/deal"
                format={fmt}
              />
            </div>
          </div>

          {/* Right - result */}
          <Reveal delay={0.15}>
            <div className="relative overflow-hidden rounded-2xl bg-foreground p-8 text-background sm:p-10">
              <div className="flex items-center gap-3">
                <TrendingDown className="h-5 w-5 text-background/60" strokeWidth={1.5} />
                <span className="eyebrow-sm text-background/60">
                  Estimated monthly leak
                </span>
              </div>

              <motion.div
                key={leakedRevenue}
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: easeSwiss }}
                className="mt-6"
              >
                <p className="font-serif text-5xl sm:text-6xl tnum leading-none">
                  {fmt(leakedRevenue)}
                </p>
                <p className="mt-3 text-sm text-background/60">
                  /month in follow-up leaks
                </p>
              </motion.div>

              {/* Breakdown */}
              <div className="mt-10 grid grid-cols-2 gap-px border border-background/15 bg-background/15">
                <div className="bg-foreground p-5">
                  <p className="eyebrow-sm text-background/50">Leaked leads</p>
                  <p className="mt-2 font-serif text-2xl tnum">{leakedLeads}</p>
                  <p className="mt-1 text-xs text-background/50">/month</p>
                </div>
                <div className="bg-foreground p-5">
                  <p className="eyebrow-sm text-background/50">Leak %</p>
                  <p className="mt-2 font-serif text-2xl tnum">{leakPercentage}%</p>
                  <p className="mt-1 text-xs text-background/50">of potential</p>
                </div>
                <div className="bg-foreground p-5">
                  <p className="eyebrow-sm text-background/50">Potential</p>
                  <p className="mt-2 font-serif text-2xl tnum">{fmt(potentialRevenue)}</p>
                  <p className="mt-1 text-xs text-background/50">/month</p>
                </div>
                <div className="bg-foreground p-5">
                  <p className="eyebrow-sm text-background/50">Annual leak</p>
                  <p className="mt-2 font-serif text-2xl tnum">{fmt(leakedRevenue * 12)}</p>
                  <p className="mt-1 text-xs text-background/50">/year</p>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <a
                  href="/business-health-check"
                  className="group inline-flex items-center gap-3 rounded-full bg-background pl-6 pr-2 py-2 text-sm font-medium text-foreground transition-colors hover:bg-background/90"
                >
                  Find your biggest leak
                  <span className="inline-flex h-[30px] w-[30px] items-center justify-center rounded-full border border-foreground/30 text-foreground transition-transform duration-500 group-hover:rotate-[-45deg]">
                    <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                  </span>
                </a>
              </div>

              <p className="mt-6 text-xs text-background/40">
                Estimate only. Based on a conservative 40% follow-up leak rate.
                Your actual leak depends on your response time, follow-up
                consistency, and lead quality.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  suffix,
  format,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  suffix?: string;
  format?: (n: number) => string;
}) {
  const display = format ? format(value) : value.toLocaleString("en-IN");
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="text-sm font-medium text-foreground">{label}</label>
        <span className="font-serif text-xl tnum text-foreground">
          {display}
          {suffix && <span className="ml-1 text-sm text-muted-foreground">{suffix}</span>}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 w-full accent-foreground"
        aria-label={label}
      />
    </div>
  );
}
