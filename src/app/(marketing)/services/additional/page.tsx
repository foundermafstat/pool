import type { Metadata } from "next";
import Script from "next/script";
import { servicePageMetadata } from "@/lib/seo";
import { getServiceSchema, getFAQSchema } from "@/lib/schemas";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";

export const metadata: Metadata = servicePageMetadata("Additional Services");

export default function AdditionalServicesPage() {
  const serviceSchema = getServiceSchema(
    "Additional Services",
    "Hurricane panels and storm protection, solar/retractable screens, leaf guards, design consultations, and seasonal inspections.",
    "additional"
  );

  const faqSchema = getFAQSchema([
    {
      question: "Do you install hurricane protection for enclosures?",
      answer:
        "Yes. We offer aluminum or clear polycarbonate panels and reinforcement options to help protect doors, screens, and frames.",
    },
    {
      question: "Can you add motorized retractable screens?",
      answer:
        "We install manual and motorized systems with remotes, wall switches, and wind/sun sensors for shade and privacy on demand.",
    },
    {
      question: "Do you handle design and HOA documents?",
      answer:
        "We prepare drawings/specs and samples for HOA submittals and coordinate with engineering as needed.",
    },
  ]);

  return (
    <main id="main" className="mx-auto max-w-6xl px-4 py-12">
      <Hero
        title="Hurricane Protection, Shades & Enhancements"
        subtitle="Upgrade comfort, safety, and low-maintenance living."
        description="Add leaf screens, storm protection, and retractable shades. We also provide design consultations and seasonal inspections."
      />

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Services Included</h2>
          <ul className="list-disc ml-5 space-y-2 text-neutral-700">
            <li>Leaf screens and debris barriers</li>
            <li>Hurricane panels and storm protection upgrades</li>
            <li>Solar shades and automatic retractable screens</li>
            <li>Design consultation and custom planning</li>
            <li>Seasonal inspections and maintenance checks</li>
          </ul>
        </div>
        <div className="rounded-lg border p-4">
          <h3 className="text-lg font-medium mb-2">Integration & Planning</h3>
          <p className="text-neutral-700">
            We plan wiring paths, mounting points, and reinforcements to protect structure and finishes. Our team coordinates permits when required.
          </p>
          <div className="mt-4">
            <CTA primaryHref="/contact/quote" secondaryHref="tel:+19415550123" />
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-3">Better Every Day Living</h2>
        <p className="text-neutral-700 max-w-prose">
          Enhancements add comfort, reduce maintenance, and prepare your enclosure for Florida’s storm season without compromising airflow or views.
        </p>
      </section>

      <Script id="ld-service-additional" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="ld-faq-additional" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}
