import type { Metadata } from "next";
import Script from "next/script";
import { servicePageMetadata } from "@/lib/seo";
import { getServiceSchema, getFAQSchema } from "@/lib/schemas";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";

export const metadata: Metadata = servicePageMetadata("Pool Cages");

export default function PoolCagesPage() {
  const serviceSchema = getServiceSchema(
    "Pool Cages",
    "Engineered, hurricane-rated pool cage design and installation with premium aluminum, panorama spans, and lifetime workmanship warranty.",
    "pool-cages"
  );

  const faqSchema = getFAQSchema([
    {
      question: "What screen types do you offer?",
      answer:
        "We offer standard fiberglass 18/14, No-See-Um 20/20, high-visibility, and pet-resistant polyester depending on your needs.",
    },
    {
      question: "Do you handle permits and inspections?",
      answer:
        "Yes. We coordinate permits and inspections as required by your municipality and HOA.",
    },
    {
      question: "How long does installation take?",
      answer: "Most installs complete in 1–3 days onsite after fabrication, depending on spans and tie-ins.",
    },
  ]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <Hero
        title="Hurricane-Rated Pool Cages"
        subtitle="Engineered for Florida weather. Built to last."
      />
      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Why Choose Us</h2>
          <ul className="list-disc ml-5 space-y-2 text-neutral-700">
            <li>Premium 6063-T5/T6 aluminum and stainless fasteners</li>
            <li>Engineered wind-load calculations and code compliance</li>
            <li>Panorama beams for unobstructed water and yard views</li>
            <li>Lifetime workmanship warranty</li>
          </ul>
        </div>
        <div className="rounded-lg border p-4">
          <h3 className="text-lg font-medium mb-2">Installation Process</h3>
          <ol className="list-decimal ml-5 space-y-2 text-neutral-700">
            <li>On-site measurement and design consult</li>
            <li>Engineering, permits, and fabrication</li>
            <li>Professional, clean installation and final walkthrough</li>
          </ol>
          <div className="mt-4">
            <CTA primaryHref="/contact/quote" secondaryHref="tel:+19415550123" />
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-3">Options & Upgrades</h2>
        <ul className="list-disc ml-5 space-y-2 text-neutral-700 max-w-prose">
          <li>High-visibility and No-See-Um mesh options</li>
          <li>Arched, multi-angle, and panoramic designs</li>
          <li>Door packages with closers, locks, and bug sweeps</li>
          <li>Integrated fans, lights, and sun-control blinds</li>
        </ul>
      </section>

      <Script id="ld-service-pool-cages" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="ld-faq-pool-cages" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}
