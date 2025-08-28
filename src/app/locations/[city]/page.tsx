import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Hero from "@/components/Hero";
import { allCityPaths, cityTitle } from "@/lib/locations";
import { SERVICES } from "@/lib/services";
import { absoluteUrl } from "@/lib/seo";
import { getLocalBusinessSchema } from "@/lib/schemas";

export async function generateStaticParams() {
  return allCityPaths();
}

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const cityName = cityTitle(params.city);
  const title = `${cityName}, FL Pool Cage & Screen Enclosure Services | Pool Cage Experts`;
  const description = `Professional pool cages, screen enclosures, lanai screens, and repairs in ${cityName}, FL. Hurricane-rated builds and fast quotes.`;
  const url = absoluteUrl(`/locations/${params.city}`);
  return {
    title,
    description,
    openGraph: { title, description, url, images: ["/vercel.svg"] },
    alternates: { canonical: url },
  };
}

export default function CityPage({ params }: { params: { city: string } }) {
  const cityName = cityTitle(params.city);
  const localBusiness = getLocalBusinessSchema();
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: SERVICES.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.name,
      url: absoluteUrl(`/services/${s.slug}/${params.city}`),
    })),
  };

  return (
    <main id="main" className="mx-auto max-w-6xl px-4 py-12">
      <Hero
        title={`${cityName}, FL Screen Enclosure Services`}
        subtitle="Pool cages, screen enclosures, lanai screens, repairs, and cleaning"
        description={`Premium materials and hurricane-rated builds across ${cityName}. Get a fast, no-pressure quote.`}
      />

      <h2 className="mt-10 text-2xl font-semibold">Services in {cityName}</h2>
      <ul className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <li key={s.slug} className="rounded-lg border p-6 hover:shadow">
            <h3 className="text-lg font-medium">{s.name}</h3>
            <p className="mt-1 text-sm text-neutral-600">{s.description}</p>
            <div className="mt-3 flex gap-3">
              <Link href={`/services/${s.slug}/${params.city}`} className="text-blue-700 underline">
                View details
              </Link>
              <Link href="/contact/quote" className="text-blue-700 underline">
                Get a quote
              </Link>
            </div>
          </li>
        ))}
      </ul>

      <Script id="ld-local-business" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <Script id="ld-city-services-itemlist" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
    </main>
  );
}
