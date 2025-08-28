import type { Metadata } from "next";
import { servicePageMetadata } from "@/lib/seo";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";

export const metadata: Metadata = servicePageMetadata("Pool Cages");

export default function PoolCagesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <Hero
        title="Hurricane-Rated Pool Cages"
        subtitle="Engineered for Florida weather. Built to last."
      />
      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Why choose us</h2>
          <ul className="list-disc ml-5 space-y-2 text-neutral-700">
            <li>Premium aluminum and fasteners</li>
            <li>AVIF/WebP optimized images for faster loads</li>
            <li>Lifetime workmanship warranty</li>
          </ul>
        </div>
        <div className="rounded-lg border p-4">
          <CTA primaryHref="/contact/quote" secondaryHref="tel:+19415550123" />
        </div>
      </section>
    </main>
  );
}
