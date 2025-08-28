import type { Metadata } from "next";
import Script from "next/script";
import { servicePageMetadata } from "@/lib/seo";
import { getServiceSchema, getFAQSchema } from "@/lib/schemas";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";

export const metadata: Metadata = servicePageMetadata("Repair & Maintenance");

export default function RepairMaintenancePage() {
  const serviceSchema = getServiceSchema(
    "Repair & Maintenance",
    "Re-screening, structural reinforcement, leak sealing, hardware replacement, and frame restoration for pool cages and screen enclosures.",
    "repair-maintenance"
  );

  const faqSchema = getFAQSchema([
    {
      question: "Do you offer full re-screening?",
      answer:
        "Yes. We replace torn or brittle mesh with fiberglass, No-See-Um, polyester, or pet-resistant options and tension screens for a wrinkle-free finish.",
    },
    {
      question: "Can you reinforce older cages for storms?",
      answer:
        "We add braces, gussets, and improved anchors to increase rigidity and performance in high winds, following Florida Building Code guidance.",
    },
    {
      question: "Do you fix leaks at roof and wall connections?",
      answer:
        "Yes. We reseal roofline, wall, and gutter interfaces with high-grade, compatible sealants to stop drips and water intrusion.",
    },
  ]);

  return (
    <main id="main" className="mx-auto max-w-6xl px-4 py-12">
      <Hero
        title="Screen Enclosure Repair & Maintenance"
        subtitle="Fast, clean repairs with durable materials."
        description="Re-screening, structural upgrades, leak repair, hardware, and refinishing to extend the life of your pool cage or lanai."
      />

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Services Included</h2>
          <ul className="list-disc ml-5 space-y-2 text-neutral-700">
            <li>Screen repair and full re-screening (18/14, 20/20, polyester, pet-resistant)</li>
            <li>Frame reinforcement and structural upgrades (braces, gussets, anchors)</li>
            <li>Replacement of damaged aluminum profiles, kickplates, or panels</li>
            <li>Sealing and leak repair at roof and wall connections</li>
            <li>Frame painting and restoration for faded or chalky finishes</li>
            <li>Door and window hardware replacement or repair</li>
          </ul>
        </div>
        <div className="rounded-lg border p-4">
          <h3 className="text-lg font-medium mb-2">What to Expect</h3>
          <ol className="list-decimal ml-5 space-y-2 text-neutral-700">
            <li>Assessment and photo documentation</li>
            <li>Clear, fixed quote with options</li>
            <li>Clean, efficient onsite work</li>
            <li>Final walkthrough and care tips</li>
          </ol>
          <div className="mt-4">
            <CTA primaryHref="/contact/quote" secondaryHref="tel:+19415550123" />
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-3">Why Maintenance Matters</h2>
        <p className="text-neutral-700 max-w-prose">
          Proactive repairs keep your enclosure safe, reduce long-term costs, and maintain appearance. Reinforcement and proper sealing
          are essential in Florida’s climate, especially for coastal homes and storm seasons.
        </p>
      </section>

      <Script id="ld-service-repair-maintenance" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="ld-faq-repair-maintenance" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}
