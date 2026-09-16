import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email().max(160),
  phone: z.string().min(4).max(40),
  business: z.string().min(1).max(160),
  partnerType: z.string().min(1).max(80),
  city: z.string().min(1).max(120),
  clientBase: z.string().max(400).optional(),
  services: z.string().max(400).optional(),
  industry: z.string().max(120).optional(),
  whyUdyamita: z.string().max(1000).optional(),
});

export async function POST(req: NextRequest) {
  try {
    const parsed = schema.safeParse(await req.json());
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Invalid input" },
        { status: 400 },
      );
    }
    const app = await db.partnerApplication.create({ data: parsed.data });
    return NextResponse.json({ ok: true, id: app.id });
  } catch (err) {
    console.error("partner error", err);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 },
    );
  }
}
