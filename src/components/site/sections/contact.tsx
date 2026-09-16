"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check, ChevronRight } from "lucide-react";
import { partnerTypes, industries, brand } from "@/lib/content";
import { Reveal, SectionLabel } from "../primitives";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Contact() {
  return (
    <section id="contact" className="section-pad bg-paper">
      <div className="udyam-container">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionLabel no="19">Contact</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-serif text-4xl leading-tight">
                Start a conversation that ends with a number.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-sm text-muted-foreground leading-relaxed">
                Tell us where it hurts. We&apos;ll tell you what to fix first - 
                and whether Udyamita is the right partner to fix it.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <dl className="mt-10 space-y-5">
                <ContactRow label="Email" value={brand.email} />
                <ContactRow label="Phone" value={brand.phone} />
                <ContactRow label="Location" value={brand.location} />
                <ContactRow label="Hours" value="Mon-Sat · 10:00-19:00 IST" />
              </dl>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={0.1}>
              <Tabs defaultValue="contact" className="w-full">
                <TabsList className="grid w-full grid-cols-2 rounded-full bg-background p-1">
                  <TabsTrigger
                    value="contact"
                    className="rounded-full data-[state=active]:bg-foreground data-[state=active]:text-background"
                  >
                    Talk to us
                  </TabsTrigger>
                  <TabsTrigger
                    value="partner"
                    className="rounded-full data-[state=active]:bg-foreground data-[state=active]:text-background"
                  >
                    Become a partner
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="contact" className="mt-6">
                  <ContactForm />
                </TabsContent>
                <TabsContent value="partner" className="mt-6">
                  <PartnerForm />
                </TabsContent>
              </Tabs>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-border pt-3">
      <dt className="eyebrow-sm text-muted-foreground">{label}</dt>
      <dd className="mt-1 font-serif text-lg">{value}</dd>
    </div>
  );
}

function SubmitButton({ label, loading }: { label: string; loading: boolean }) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="group inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90 disabled:opacity-50"
    >
      {loading ? "Sending…" : label}
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-background/30 transition-transform group-hover:rotate-[-45deg]">
        <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.5} />
      </span>
    </button>
  );
}

function SuccessState({ message }: { message: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-start gap-3 rounded-xl border border-border bg-background p-5"
    >
      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-foreground text-background">
        <Check className="h-4 w-4" strokeWidth={1.5} />
      </span>
      <div>
        <p className="font-serif text-lg">Thank you.</p>
        <p className="mt-1 text-sm text-muted-foreground">{message}</p>
      </div>
    </motion.div>
  );
}

function ContactForm() {
  const [loading, setLoading] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          email: fd.get("email"),
          business: fd.get("business"),
          phone: fd.get("phone"),
          message: fd.get("message"),
          intent: "general",
        }),
      });
      if (!res.ok) throw new Error("failed");
      setDone(true);
    } catch {
      setError("Something went wrong. Please email us directly.");
    } finally {
      setLoading(false);
    }
  }

  if (done) return <SuccessState message="We'll reply within one business day." />;

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <FormField label="Name" name="name" required />
      <FormField label="Email" name="email" type="email" required />
      <FormField label="Business" name="business" />
      <FormField label="Phone" name="phone" type="tel" />
      <div className="grid gap-2 sm:col-span-2">
        <Label htmlFor="message" className="text-xs text-muted-foreground">
          What's the growth leak you're seeing?
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={4}
          className="bg-background resize-none"
        />
      </div>
      <div className="sm:col-span-2 mt-2 flex flex-wrap items-center gap-4">
        <SubmitButton label="Send message" loading={loading} />
        {error && <p className="text-sm text-destructive">{error}</p>}
      </div>
    </form>
  );
}

function PartnerForm() {
  const reduce = useReducedMotion();
  const [loading, setLoading] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          email: fd.get("email"),
          phone: fd.get("phone"),
          business: fd.get("business"),
          partnerType: fd.get("partnerType"),
          city: fd.get("city"),
          clientBase: fd.get("clientBase"),
          services: fd.get("services"),
          industry: fd.get("industry"),
          whyUdyamita: fd.get("whyUdyamita"),
        }),
      });
      if (!res.ok) throw new Error("failed");
      setDone(true);
    } catch {
      setError("Something went wrong. Please email us directly.");
    } finally {
      setLoading(false);
    }
  }

  if (done)
    return (
      <SuccessState message="We'll review your application and reach out within two business days." />
    );

  return (
    <form id="partner-form" onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <FormField label="Name" name="name" required />
      <FormField label="Email" name="email" type="email" required />
      <FormField label="Phone" name="phone" type="tel" required />
      <FormField label="Business" name="business" required />
      <FormField label="City" name="city" required />

      <div className="grid gap-2">
        <Label htmlFor="partnerType" className="text-xs text-muted-foreground">
          Partner type
        </Label>
        <Select name="partnerType" required>
          <SelectTrigger id="partnerType" className="h-11 bg-background">
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            {partnerTypes.map((t) => (
              <SelectItem key={t} value={t}>
                {t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <FormField label="Client base (size)" name="clientBase" />
      <FormField label="Services offered" name="services" />

      <div className="grid gap-2">
        <Label htmlFor="industry" className="text-xs text-muted-foreground">
          Primary industry
        </Label>
        <Select name="industry">
          <SelectTrigger id="industry" className="h-11 bg-background">
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

      <div className="grid gap-2 sm:col-span-2">
        <Label htmlFor="whyUdyamita" className="text-xs text-muted-foreground">
          Why Udyamita?
        </Label>
        <Textarea
          id="whyUdyamita"
          name="whyUdyamita"
          rows={3}
          className="bg-background resize-none"
          placeholder="What would make this partnership work for your clients?"
        />
      </div>

      <div className="sm:col-span-2 mt-2 flex flex-wrap items-center gap-4">
        <SubmitButton label="Submit application" loading={loading} />
        {error && <p className="text-sm text-destructive">{error}</p>}
      </div>
    </form>
  );
}

function FormField({
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
        {required && <span className="ml-0.5 text-foreground">*</span>}
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
