import Link from "next/link";
import Script from "next/script";
import Hero from "@/components/Hero";
import { SERVICES } from "@/lib/services";
import { getServicesItemListSchema } from "@/lib/schemas";

export const metadata = {
  title: "Services | Pool Cage Experts",
  description:
    "Pool cages, screen enclosures, and lanai screens in Sarasota, Bradenton, Venice, and Lakewood Ranch.",
};

export default function ServicesPage() {
  const itemList = getServicesItemListSchema(
    SERVICES.map((s) => ({ slug: s.slug, name: s.name }))
  );
  return (
    <main className="mx-auto max-w-[1440px] px-4 py-12">
      <Hero
        title="Screen Enclosure Services in Sarasota, FL"
        subtitle="Installation, repair, cleaning, and enhancements for pool cages, lanais, and patios."
        description="Engineered, hurricane-rated solutions with premium materials. Serving Sarasota, Bradenton, Venice, and Lakewood Ranch."
      />
      <h2 className="text-2xl font-semibold mt-10 mb-4">Explore Services</h2>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <li key={s.slug} className="border rounded-lg p-6 hover:shadow">
            <h2 className="text-xl font-medium mb-2">{s.name}</h2>
            <p className="text-sm text-neutral-600 mb-4">{s.description}</p>
            <div className="flex gap-3">
              <Link href={`/services/${s.slug}`} className="text-blue-700 underline">
                Learn more
              </Link>
              <Link href={`/contact/quote`} className="text-blue-700 underline">
                Get a quote
              </Link>
            </div>
          </li>
        ))}
      </ul>
      <Script
        id="ld-services-itemlist"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
    </main>
  );
}
