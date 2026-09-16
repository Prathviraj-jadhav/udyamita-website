"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Check, ChevronRight } from "lucide-react";
import { partnerTypes, industries } from "@/lib/content";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
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
        placeholder={placeholder}
        className="h-11 bg-background"
      />
    </div>
  );
}

function SubmitButton({
  label,
  loading,
}: {
  label: string;
  loading: boolean;
}) {
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

export function PartnerApplicationForm() {
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
      window.location.href = "/thank-you?type=partner";
    } catch {
      setError("Something went wrong. Please email us directly.");
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    return (
      <SuccessState message="We'll review your application and reach out within two business days." />
    );
  }

  return (
    <form
      id="partner-form"
      onSubmit={onSubmit}
      className="grid gap-4 sm:grid-cols-2"
    >
      <Field label="Name" name="name" required />
      <Field label="Email" name="email" type="email" required />
      <Field label="Phone" name="phone" type="tel" required />
      <Field label="Business" name="business" required />
      <Field label="City" name="city" required />

      <div className="grid gap-2">
        <Label htmlFor="partnerType" className="text-xs text-muted-foreground">
          Partner type<span className="ml-0.5 text-foreground">*</span>
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

      <Field
        label="Client base (size)"
        name="clientBase"
        placeholder="e.g. 120 SMB clients"
      />
      <Field
        label="Services offered"
        name="services"
        placeholder="e.g. Accounting, Tax, Audit"
      />

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
          rows={4}
          className="bg-background resize-none"
          placeholder="What would make this partnership work for your clients?"
        />
      </div>

      <div className="sm:col-span-2 mt-2 flex flex-wrap items-center gap-4">
        <SubmitButton label="Submit application" loading={loading} />
        {error && <p className="text-sm text-destructive">{error}</p>}
      </div>

      <p className="sm:col-span-2 text-xs text-muted-foreground">
        We do not invent partner commissions. Terms are agreed on qualification.
      </p>
    </form>
  );
}
