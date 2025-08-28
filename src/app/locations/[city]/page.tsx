import type { Metadata } from "next";
import Link from "next/link";
import { allCityPaths, cityTitle } from "@/lib/locations";
import { SERVICES } from "@/lib/services";

export async function generateStaticParams() {
  return allCityPaths();
}

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const cityName = cityTitle(params.city);
  return {
    title: `${cityName}, FL | Pool Cage Experts`,
    description: `Pool cages and screen enclosures in ${cityName}, Florida. Free quotes.`,
  };
}

export default function CityPage({ params }: { params: { city: string } }) {
  const cityName = cityTitle(params.city);
  return (
    <main id="main" className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold mb-2">{cityName}, FL</h1>
      <p className="text-neutral-600 mb-6">
        Professional, hurricane-rated enclosures serving {cityName} and nearby areas.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Available Services</h2>
      <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {SERVICES.map((s) => (
          <li key={s.slug} className="border rounded p-4">
            <Link href={`/services/${s.slug}/${params.city}`} className="text-blue-700 underline">
              {s.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
