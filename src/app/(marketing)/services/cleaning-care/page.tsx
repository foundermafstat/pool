import type { Metadata } from "next";
import Script from "next/script";
import { servicePageMetadata } from "@/lib/seo";
import { getServiceSchema, getFAQSchema } from "@/lib/schemas";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";

export const metadata: Metadata = servicePageMetadata("Cleaning & Care");

export default function CleaningCarePage() {
  const serviceSchema = getServiceSchema(
    "Cleaning & Care",
    "Soft-wash cleaning for pool cages and lanais, mold/algae removal, and protective coatings to extend lifespan.",
    "cleaning-care"
  );

  const faqSchema = getFAQSchema([
    {
      question: "Is soft-wash safe for screens and aluminum?",
      answer:
        "Yes. We use low-pressure methods and compatible detergents to protect coatings and screen fibers while removing dirt and growth.",
    },
    {
      question: "How often should I clean my pool cage?",
      answer:
        "Rinse quarterly and schedule a professional soft-wash annually. Coastal homes may benefit from more frequent service.",
    },
    {
      question: "Do protective coatings really help?",
      answer:
        "Hydrophobic coatings reduce staining, slow salt and UV wear, and make future cleanings easier.",
    },
  ]);

  return (
    <main id="main" className="mx-auto max-w-6xl px-4 py-12">
      <Hero
        title="Pool Cage Cleaning & Care"
        subtitle="Professional soft-wash, algae removal, and protective coatings."
        description="Restore clarity and protect your enclosure with safe, effective cleaning methods tailored for Florida homes."
      />

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Services Included</h2>
          <ul className="list-disc ml-5 space-y-2 text-neutral-700">
            <li>Soft-wash cleaning for frames and screens</li>
            <li>Mold, algae, and mildew removal</li>
            <li>Protective, hydrophobic coatings</li>
            <li>Care tips for coastal and high-UV areas</li>
          </ul>
        </div>
        <div className="rounded-lg border p-4">
          <h3 className="text-lg font-medium mb-2">Methods & Safety</h3>
          <p className="text-neutral-700">
            We avoid harsh pressure and use detergents designed for aluminum and mesh. Our process protects seals, paint, and nearby landscaping.
          </p>
          <div className="mt-4">
            <CTA primaryHref="/contact/quote" secondaryHref="tel:+19415550123" />
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-3">Why Professional Cleaning</h2>
        <p className="text-neutral-700 max-w-prose">
          Proper cleaning prevents premature wear, keeps views clear, and reduces regrowth. It also prepares surfaces for coatings that extend lifespan.
        </p>
      </section>

      <Script id="ld-service-cleaning-care" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="ld-faq-cleaning-care" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}
