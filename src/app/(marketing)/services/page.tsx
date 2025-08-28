import Link from "next/link";
import { SERVICES } from "@/lib/services";

export const metadata = {
  title: "Services | Pool Cage Experts",
  description:
    "Pool cages, screen enclosures, and lanai screens in Sarasota, Bradenton, Venice, and Lakewood Ranch.",
};

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">Our Services</h1>
      <p className="text-neutral-600 mb-8">
        Hurricane-rated installations with premium materials and warranty.
      </p>
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
    </main>
  );
}
