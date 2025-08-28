export const dynamic = "force-dynamic";

import QuoteCalculator from "@/components/QuoteCalculator";

export default function QuotePage() {
  return (
    <main id="main" className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">Get Your Instant Quote</h1>
      <QuoteCalculator />
    </main>
  );
}
