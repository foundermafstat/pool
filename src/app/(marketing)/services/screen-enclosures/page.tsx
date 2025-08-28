import type { Metadata } from "next";
import Script from "next/script";
import { servicePageMetadata } from "@/lib/seo";
import { getServiceSchema, getFAQSchema } from "@/lib/schemas";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";

export const metadata: Metadata = servicePageMetadata("Screen Enclosures");

export default function ScreenEnclosuresPage() {
  const serviceSchema = getServiceSchema(
    "Screen Enclosures",
    "Durable, low-maintenance screen enclosures for Florida homes with optimized airflow and visibility.",
    "screen-enclosures"
  );

  const faqSchema = getFAQSchema([
    {
      question: "What are the main benefits?",
      answer:
        "Insect control, debris reduction, UV comfort, and added safety around pools and patios.",
    },
    {
      question: "How quickly can you install?",
      answer: "Most projects install in 1–3 days onsite after fabrication and permitting.",
    },
    {
      question: "Do you offer high-visibility mesh?",
      answer: "Yes. We carry high-visibility and No-See-Um meshes to suit your view and pest needs.",
    },
  ]);

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
            <li>Rust-resistant materials and stainless fasteners</li>
            <li>Optimized airflow and visibility with mesh options</li>
            <li>Quick, clean installation timelines</li>
          </ul>
        </div>
        <div className="rounded-lg border p-4">
          <h3 className="text-lg font-medium mb-2">Options</h3>
          <ul className="list-disc ml-5 space-y-2 text-neutral-700">
            <li>High-visibility, No-See-Um, and pet-resistant meshes</li>
            <li>Doors, bug sweeps, latches, and closers</li>
            <li>Blinds, fans, and lighting reinforcements</li>
          </ul>
          <div className="mt-4">
            <CTA primaryHref="/contact/quote" secondaryHref="tel:+19415550123" />
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-3">Use Cases</h2>
        <p className="text-neutral-700 max-w-prose">
          Perfect for pools, patios, lanais, and porches—keeping insects out while preserving light and airflow.
        </p>
      </section>

      <Script id="ld-service-screen-enclosures" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="ld-faq-screen-enclosures" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}
