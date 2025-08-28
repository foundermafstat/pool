import type { Metadata } from "next";
import Script from "next/script";
import { servicePageMetadata } from "@/lib/seo";
import { getServiceSchema, getFAQSchema } from "@/lib/schemas";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";

export const metadata: Metadata = servicePageMetadata("Lanai Screens");

export default function LanaiScreensPage() {
  const serviceSchema = getServiceSchema(
    "Lanai Screens",
    "High-quality lanai screen installation and replacement with high-visibility and No-See-Um options.",
    "lanai-screens"
  );

  const faqSchema = getFAQSchema([
    {
      question: "Which mesh is best for my lanai?",
      answer:
        "Standard fiberglass 18/14 is cost-effective; 20/20 blocks smaller insects; high-visibility meshes maximize view; polyester resists pets.",
    },
    {
      question: "Do you replace door hardware too?",
      answer: "Yes. We replace rollers, latches, closers, and bug sweeps for smooth operation.",
    },
  ]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <Hero title="Lanai Screen Installation" subtitle="Clean, strong, and beautiful." />
      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold mb-3">What You Get</h2>
          <ul className="list-disc ml-5 space-y-2 text-neutral-700">
            <li>High-visibility, No-See-Um, and pet-resistant meshes</li>
            <li>Coastal-rated materials and stainless fasteners</li>
            <li>Precise tensioning and clean finish</li>
          </ul>
        </div>
        <div className="rounded-lg border p-4">
          <h3 className="text-lg font-medium mb-2">Installation Details</h3>
          <p className="text-neutral-700">We measure, remove old screens, and install new mesh with proper tension and alignment for a wrinkle-free result.</p>
          <div className="mt-4">
            <CTA primaryHref="/contact/quote" secondaryHref="tel:+19415550123" />
          </div>
        </div>
      </section>

      <Script id="ld-service-lanai-screens" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="ld-faq-lanai-screens" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}
