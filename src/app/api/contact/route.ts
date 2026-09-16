import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email().max(160),
  business: z.string().max(160).optional(),
  phone: z.string().max(40).optional(),
  message: z.string().min(1).max(2000),
  intent: z.string().max(60).optional().default("general"),
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
    const msg = await db.contactMessage.create({ data: parsed.data });
    return NextResponse.json({ ok: true, id: msg.id });
  } catch (err) {
    console.error("contact error", err);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 },
    );
  }
}
