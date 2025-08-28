type RateLimitResult = { success: boolean; reset: number; remaining: number };

export function rateLimitByIP({
  limit = 5,
  windowMs = 60_000,
} = {}) {
  const store = new Map<string, { count: number; reset: number }>();

  return async function limitOnce(ip: string): Promise<RateLimitResult> {
    const now = Date.now();
    const entry = store.get(ip);

    if (!entry || now > entry.reset) {
      const reset = now + windowMs;
      store.set(ip, { count: 1, reset });
      return { success: true, reset, remaining: limit - 1 };
    }

    if (entry.count < limit) {
      entry.count += 1;
      store.set(ip, entry);
      return { success: true, reset: entry.reset, remaining: limit - entry.count };
    }

    return { success: false, reset: entry.reset, remaining: 0 };
  };
}
