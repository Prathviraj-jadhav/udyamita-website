"use client";

import { faqs } from "@/lib/content";
import {
  Reveal,
  EditorialHeading,
  SectionLabel,
} from "../primitives";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section id="faq" className="section-pad bg-background">
      <div className="udyam-container">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionLabel no="20">FAQ</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <EditorialHeading className="mt-6">
                Straight answers, not pitch-deck words.
              </EditorialHeading>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-sm text-muted-foreground leading-relaxed">
                The same questions, answered the way we&apos;d answer them in a
                room - direct, factual, useful.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={0.1}>
              <Accordion type="single" collapsible className="flex flex-col">
                {faqs.map((faq, i) => (
                  <AccordionItem
                    key={faq.q}
                    value={`item-${i}`}
                    className="border-b border-border"
                  >
                    <AccordionTrigger className="py-6 text-left hover:no-underline">
                      <span className="flex items-baseline gap-4">
                        <span className="eyebrow-sm tnum text-muted-foreground">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-serif text-xl leading-snug">
                          {faq.q}
                        </span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                      <span className="block pl-10">{faq.a}</span>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
