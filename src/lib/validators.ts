export type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
  source?: string;
  gclid?: string;
};

export type QuotePayload = {
  poolDimensions?: { length?: number; width?: number };
  screenType?: "standard" | "premium";
  price?: string | number;
};

export function validateContact(p: ContactPayload) {
  const errors: Record<string, string> = {};
  if (!p.firstName || p.firstName.trim().length < 2) errors.firstName = "First name required";
  if (!p.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.email)) errors.email = "Valid email required";
  if (!p.phone || p.phone.replace(/\D/g, "").length < 10) errors.phone = "Valid phone required";
  if (!p.message || p.message.trim().length < 5) errors.message = "Message too short";
  return { ok: Object.keys(errors).length === 0, errors };
}

export function validateQuote(p: QuotePayload) {
  const errors: Record<string, string> = {};
  const l = Number(p.poolDimensions?.length ?? 0);
  const w = Number(p.poolDimensions?.width ?? 0);
  if (!l || l <= 0) errors.length = "Length must be > 0";
  if (!w || w <= 0) errors.width = "Width must be > 0";
  if (p.screenType && !["standard", "premium"].includes(p.screenType))
    errors.screenType = "Invalid screen type";
  return { ok: Object.keys(errors).length === 0, errors };
}
