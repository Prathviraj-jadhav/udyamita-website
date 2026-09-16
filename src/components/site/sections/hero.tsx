"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { assets } from "@/lib/assets";
import { brand, easeSwiss } from "@/lib/content";
import { TextRollButton, VideoPanel } from "../primitives";
import { ParallaxVideo } from "../parallax-video";
import { ScrollIndicator } from "../scroll-indicator";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative isolate flex flex-col overflow-hidden bg-foreground text-background"
    >
      {/* Desktop / tablet: full-bleed video with subtle parallax */}
      <div className="absolute inset-0 -z-10 hidden sm:block">
        <ParallaxVideo>
          <VideoPanel
            src={assets.heroVideo}
            poster={assets.footerPoster}
            className="absolute inset-0 h-full w-full"
            objectPosition="center 40%"
          />
        </ParallaxVideo>
        {/* flat scrims for legibility - no color gradient, just opacity layers */}
        <div className="absolute inset-0 bg-foreground/35" aria-hidden />
        <div
          className="absolute inset-0 bg-foreground/55"
          style={{
            maskImage:
              "linear-gradient(to top, #000 0%, #000 45%, transparent 85%)",
            WebkitMaskImage:
              "linear-gradient(to top, #000 0%, #000 45%, transparent 85%)",
          }}
          aria-hidden
        />
      </div>

      {/* Mobile: contained video in normal flow */}
      <div className="sm:hidden">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-foreground">
          <VideoPanel
            src={assets.heroVideo}
            poster={assets.footerPoster}
            className="absolute inset-0 h-full w-full"
            objectPosition="center 35%"
          />
          <div className="absolute inset-0 bg-foreground/40" aria-hidden />
        </div>
      </div>

      {/* Content */}
      <div className="udyam-container relative flex flex-1 flex-col justify-end pb-10 pt-32 sm:min-h-[calc(100svh-3.5rem)] sm:pb-12 sm:pt-40">
        <div className="max-w-4xl">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeSwiss, delay: 0.1 }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-10 bg-background/50" />
            <span className="eyebrow text-background/80">
              {brand.positioning}
            </span>
          </motion.div>

          <h1 className="display-xl mt-6 text-background">
            {brand.promise.map((line, i) => (
              <motion.span
                key={line}
                initial={reduce ? false : { opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: easeSwiss,
                  delay: 0.2 + i * 0.12,
                }}
                className="block"
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeSwiss, delay: 0.6 }}
            className="mt-8 max-w-xl text-base sm:text-lg leading-relaxed text-background/85"
          >
            Udyamita combines consulting, digital growth, technology and
            automation into one practical growth system, measured against the
            numbers that matter.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeSwiss, delay: 0.75 }}
            className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <Link
              href="/business-health-check"
              className="group inline-flex items-center gap-3 rounded-full bg-background pl-6 pr-2 py-2 text-sm font-medium text-foreground transition-colors hover:bg-background/90"
            >
              <span className="relative block h-5 overflow-hidden">
                <span className="block transition-transform duration-500 [transition-timing-function:cubic-bezier(.25,.1,.25,1)] group-hover:-translate-y-1/2">
                  <span className="block h-5 leading-5 whitespace-nowrap">
                    Run your business health check
                  </span>
                  <span className="block h-5 leading-5 whitespace-nowrap" aria-hidden>
                    Run your business health check
                  </span>
                </span>
              </span>
              <span className="inline-flex h-[30px] w-[30px] items-center justify-center rounded-full border border-foreground/30 text-foreground transition-transform duration-500 group-hover:rotate-[-45deg]">
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </Link>
            <Link
              href="/growth-os"
              className="group inline-flex items-center gap-2 text-sm text-background/80 hover:text-background transition-colors"
            >
              See how Udyamita works
              <ArrowDown
                className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
                strokeWidth={1.5}
              />
            </Link>
          </motion.div>

          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: easeSwiss, delay: 0.9 }}
            className="mt-8 text-sm text-background/60"
          >
            Built for businesses that have outgrown guesswork.
          </motion.p>
        </div>
      </div>

      {/* bottom hairline meta strip - integrated, not floating */}
      <div className="udyam-container relative hidden border-t border-background/15 py-3.5 sm:block">
        <div className="flex items-center justify-between text-xs text-background/60">
          <span className="eyebrow-sm">{brand.legalName}</span>
          <span className="eyebrow-sm">{brand.location}</span>
          <span className="eyebrow-sm tnum">Growth Systems</span>
        </div>
      </div>

      {/* scroll indicator - centered, below the meta strip */}
      <div className="udyam-container relative hidden pb-6 sm:block">
        <div className="flex justify-center">
          <ScrollIndicator />
        </div>
      </div>
    </section>
  );
}
