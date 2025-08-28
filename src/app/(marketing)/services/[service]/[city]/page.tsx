import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { CITIES, cityTitle } from "@/lib/locations";
import { getServiceBySlug, SERVICES } from "@/lib/services";
import { servicePageMetadata } from "@/lib/seo";
import { getServiceSchema, getFAQSchema } from "@/lib/schemas";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";

export function generateStaticParams() {
  const params: { service: string; city: string }[] = [];
  for (const s of SERVICES) {
    for (const c of CITIES) params.push({ service: s.slug, city: c });
  }
  return params;
}

export async function generateMetadata({ params }: { params: { service: string; city: string } }): Promise<Metadata> {
  const svc = getServiceBySlug(params.service);
  if (!svc) return { title: "Service not found" };
  return servicePageMetadata(svc.name, params.city);
}

export default function ServiceCityPage({ params }: { params: { service: string; city: string } }) {
  const svc = getServiceBySlug(params.service);
  if (!svc) return notFound();
  const cityName = cityTitle(params.city);

  const serviceSchema = getServiceSchema(
    `${svc.name} in ${cityName}, FL`,
    `${svc.name} services in ${cityName}, Florida. Installation, repair, and maintenance with premium materials and code-compliant methods.`
  );
  const faqSchema = getFAQSchema([
    {
      question: `Do you service all neighborhoods in ${cityName}?`,
      answer: `Yes. We serve ${cityName} and surrounding areas. Contact us for current lead times.`,
    },
    {
      question: "Do you handle permits?",
      answer: "Yes, for new structures or structural changes we coordinate permits and inspections as required.",
    },
  ]);

  return (
    <main id="main" className="mx-auto max-w-6xl px-4 py-12">
      <nav className="text-sm mb-6">
        <Link href="/services" className="underline text-blue-700">Services</Link>
        <span className="mx-2">/</span>
        <Link href={`/locations/${params.city}`} className="underline text-blue-700">{cityName}</Link>
      </nav>

      <Hero
        title={`${svc.name} in ${cityName}, FL`}
        subtitle="Engineered for Florida weather. Built to last."
        description={`Professional ${svc.name.toLowerCase()} with premium materials and clean workmanship in ${cityName}.`}
      />

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Why Choose Us</h2>
          <ul className="list-disc ml-5 space-y-2 text-neutral-700">
            <li>Hurricane-rated designs and code compliance</li>
            <li>Premium aluminum, stainless fasteners, quality mesh options</li>
            <li>Clean installation and clear communication</li>
          </ul>
        </div>
        <div className="rounded-lg border p-4">
          <h3 className="text-lg font-medium mb-2">Get Started</h3>
          <ol className="list-decimal ml-5 space-y-2 text-neutral-700">
            <li>Free site visit and measurement in {cityName}</li>
            <li>Fixed, transparent quote with options</li>
            <li>Scheduled installation or repair</li>
          </ol>
          <div className="mt-4">
            <CTA primaryHref="/contact/quote" secondaryHref="tel:+19415550123" />
          </div>
        </div>
      </section>

      <Script id="ld-service-city" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="ld-faq-city" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}
