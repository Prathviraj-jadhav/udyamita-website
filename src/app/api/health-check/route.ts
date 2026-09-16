import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1).max(120),
  business: z.string().min(1).max(160),
  phone: z.string().min(4).max(40),
  email: z.string().email().max(160),
  city: z.string().min(1).max(120),
  industry: z.string().min(1).max(120),
  healthScore: z.number().int().min(0).max(100),
  dominantProblem: z.string().min(1).max(80),
  recommendedRung: z.string().min(1).max(120),
  source: z.string().max(80).optional().default("website_health_check"),
});

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const parsed = schema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Invalid input", issues: parsed.error.flatten() },
        { status: 400 },
      );
    }
    const lead = await db.healthCheckLead.create({ data: parsed.data });
    return NextResponse.json({ ok: true, id: lead.id });
  } catch (err) {
    console.error("health-check error", err);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 },
    );
  }
}
