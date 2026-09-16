"use client";

import * as React from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import {
  traditionalVendorFlow,
  udyamitaFlow,
  easeSwiss,
} from "@/lib/content";
import {
  Reveal,
  EditorialHeading,
  SectionLabel,
  TextRollButton,
} from "../primitives";

export function WhyUdyamita() {
  const reduce = useReducedMotion();
  const railRef = React.useRef<HTMLDivElement>(null);
  const inView = useInView(railRef, { once: true, margin: "-100px" });

  return (
    <section id="why-udyamita" className="section-pad bg-paper">
      <div className="udyam-container">
        <div className="max-w-4xl">
          <Reveal>
            <SectionLabel no="05">Why Udyamita</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <EditorialHeading className="mt-6">
              Not another vendor.
              <br />
              <span className="italic text-muted-foreground">A growth partner.</span>
            </EditorialHeading>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">
              A vendor sells a task. A partner takes responsibility for the
              number. Udyamita begins with diagnosis and ends with measurement - 
              because a service that doesn&apos;t move a number is just an invoice.
            </p>
          </Reveal>
        </div>

        {/* Traditional vs Udyamita */}
        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Traditional */}
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow text-muted-foreground">Traditional vendor</p>
              <div className="mt-6 flex flex-col">
                {traditionalVendorFlow.map((step, i) => (
                  <div
                    key={step}
                    className="flex items-center gap-4 border-t border-border py-5"
                  >
                    <span className="eyebrow-sm tnum text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-serif text-2xl text-muted-foreground line-through decoration-1">
                      {step}
                    </span>
                  </div>
                ))}
                <div className="border-t border-border py-5">
                  <p className="text-sm text-muted-foreground">
                    Then repeat. Nothing compounds. Nothing is measured.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Udyamita flow - responsive grid */}
          <div className="lg:col-span-8 min-w-0" ref={railRef}>
            <Reveal>
              <p className="eyebrow text-foreground">Udyamita Growth OS</p>
            </Reveal>
            <ol className="mt-6 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-3 lg:grid-cols-5">
              {udyamitaFlow.map((step, i) => (
                <motion.li
                  key={step}
                  initial={reduce ? false : { opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{
                    duration: 0.4,
                    ease: easeSwiss,
                    delay: 0.15 + i * 0.06,
                  }}
                  className="flex flex-col gap-2 bg-background p-4 sm:p-5"
                >
                  <span className="eyebrow-sm tnum text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-base sm:text-lg leading-tight">
                    {step}
                  </span>
                </motion.li>
              ))}
            </ol>
            <Reveal delay={0.2}>
              <div className="mt-10">
                <TextRollButton href="/growth-os" variant="ghost">
                  Explore the Growth OS
                </TextRollButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
