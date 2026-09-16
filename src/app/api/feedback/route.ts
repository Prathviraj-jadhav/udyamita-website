import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { z } from "zod";

const schema = z.object({
  slug: z.string().min(1).max(200),
  helpful: z.boolean(),
  comment: z.string().max(2000).optional(),
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
    const feedback = await db.articleFeedback.create({ data: parsed.data });
    return NextResponse.json({ ok: true, id: feedback.id });
  } catch (err) {
    console.error("feedback error", err);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 },
    );
  }
}
