import { NextRequest, NextResponse } from "next/server";
import { rateLimitByIP } from "@/lib/rateLimit";
import { validateContact } from "@/lib/validators";

const limit = rateLimitByIP({ limit: 5, windowMs: 60_000 });

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "127.0.0.1";
  const { success, reset, remaining } = await limit(ip);

  if (!success) {
    return NextResponse.json({ error: "Too many requests", reset, remaining }, { status: 429 });
  }

  let payload: any = {};
  const contentType = req.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    try { payload = await req.json(); } catch {}
  } else {
    const fd = await req.formData();
    payload = Object.fromEntries(fd.entries());
  }

  const { ok, errors } = validateContact(payload);
  if (!ok) return NextResponse.json({ errors }, { status: 422 });

  // TODO: integrate email provider or CRM webhook here
  return NextResponse.json({ ok: true });
}
