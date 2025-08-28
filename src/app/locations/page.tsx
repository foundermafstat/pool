import Link from "next/link";
import { CITIES } from "@/lib/locations";

export const metadata = {
  title: "Locations | Pool Cage Experts",
  description: "Serving Sarasota, Bradenton, Venice, and Lakewood Ranch",
};

export default function LocationsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">Service Locations</h1>
      <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {CITIES.map((c) => (
          <li key={c} className="border rounded p-4 hover:shadow-sm">
            <Link href={`/locations/${c}`} className="text-blue-700 underline">
              {c.replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase())}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
