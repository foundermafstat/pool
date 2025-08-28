import Link from "next/link";
import Hero from "@/components/Hero";
import { CITIES, cityTitle } from "@/lib/locations";

export const metadata = {
  title: "Locations | Pool Cage Experts",
  description: "Serving Sarasota, Bradenton, Venice, and Lakewood Ranch",
};

export default function LocationsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <Hero
        title="Service Areas in Florida"
        subtitle="Trusted pool cage and screen enclosure experts near you"
        description="Fast quotes, premium materials, and hurricane-rated builds across Sarasota, Bradenton, Venice, and Lakewood Ranch."
      />

      <h2 className="mt-10 text-2xl font-semibold">Select Your City</h2>
      <ul className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CITIES.map((c) => (
          <li key={c} className="rounded-lg border p-5 hover:shadow">
            <h3 className="text-lg font-medium">{cityTitle(c)}, FL</h3>
            <p className="mt-1 text-sm text-neutral-600">Installation, repair, and cleaning services.</p>
            <div className="mt-3">
              <Link href={`/locations/${c}`} className="text-blue-700 underline">
                View services
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
