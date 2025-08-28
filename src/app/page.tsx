import Link from "next/link";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import { CITIES } from "@/lib/locations";
import { SERVICES } from "@/lib/services";

export default function Home() {
  return (
    <main id="main" className="mx-auto max-w-6xl px-4 py-12">
      <Hero
        title="Pool Cage & Screen Enclosure Experts"
        subtitle="Hurricane-rated installations in Sarasota, Bradenton, Venice, and Lakewood Ranch."
        description="Custom pool cages, lanai screen enclosures, rescreens, and repairs completed by licensed & insured pros. Fast turnaround and clean job sites. Free quotes."
      />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Why homeowners choose us</h2>
        <ul className="grid gap-4 md:grid-cols-3 text-neutral-700">
          <li className="rounded border p-4">Engineer-approved designs</li>
          <li className="rounded border p-4">Premium aluminum & fasteners</li>
          <li className="rounded border p-4">Lifetime workmanship warranty</li>
        </ul>
      </section>

      <section className="mt-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Services</h2>
          <Link href="/services" className="text-blue-700 underline">View all</Link>
        </div>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <li key={s.slug} className="rounded border p-6">
              <h3 className="text-xl font-medium mb-2">{s.name}</h3>
              <p className="text-sm text-neutral-600 mb-4">{s.description}</p>
              <div className="flex gap-3">
                <Link href={`/services/${s.slug}`} className="text-blue-700 underline">Learn more</Link>
                <Link href={`/contact/quote`} className="text-blue-700 underline">Get a quote</Link>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Service Areas</h2>
          <Link href="/locations" className="text-blue-700 underline">All locations</Link>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {CITIES.map((c) => (
            <li key={c} className="rounded border p-4">
              <Link href={`/locations/${c}`} className="underline text-blue-700">
                {c.replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase())}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Get started</h2>
        <div className="rounded border p-6">
          <CTA primaryHref="/contact/quote" secondaryHref="tel:+19415550123" />
          <p className="mt-3 text-sm text-neutral-600">No obligation. We’ll reply within 1 business day.</p>
        </div>
      </section>
    </main>
  );
}
