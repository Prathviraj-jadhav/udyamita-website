"use client";

import { Marquee } from "../primitives";
import { marqueeCapabilities } from "@/lib/content";

export function CapabilityMarquee() {
  return (
    <section
      aria-label="Capabilities"
      className="border-y border-border bg-background py-6 sm:py-8"
    >
      <Marquee items={marqueeCapabilities} duration={22} />
    </section>
  );
}
