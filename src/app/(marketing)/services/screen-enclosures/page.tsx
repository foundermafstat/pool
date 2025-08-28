import type { Metadata } from "next";
import { servicePageMetadata } from "@/lib/seo";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";

export const metadata: Metadata = servicePageMetadata("Screen Enclosures");

export default function ScreenEnclosuresPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <Hero
        title="Premium Screen Enclosures"
        subtitle="Durable, low-maintenance screens for Florida living."
      />
      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Benefits</h2>
          <ul className="list-disc ml-5 space-y-2 text-neutral-700">
            <li>Rust-resistant materials</li>
            <li>Optimized airflow and visibility</li>
            <li>Quick installation timelines</li>
          </ul>
        </div>
        <div className="rounded-lg border p-4">
          <CTA primaryHref="/contact/quote" secondaryHref="tel:+19415550123" />
        </div>
      </section>
    </main>
  );
}
