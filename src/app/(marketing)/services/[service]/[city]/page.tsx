import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CITIES } from "@/lib/locations";
import { getServiceBySlug, SERVICES } from "@/lib/services";
import { servicePageMetadata } from "@/lib/seo";
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

  return (
    <main id="main" className="mx-auto max-w-6xl px-4 py-12">
      <nav className="text-sm mb-6">
        <Link href="/services" className="underline text-blue-700">Services</Link>
        <span className="mx-2">/</span>
        <Link href={`/locations/${params.city}`} className="underline text-blue-700">{params.city.replace(/-/g, " ")}</Link>
      </nav>
      <h1 className="text-3xl font-semibold mb-2">{svc.name} in {params.city.replace(/-/g, " ")}, FL</h1>
      <p className="text-neutral-600 mb-6">Professional installation and repair with hurricane-rated materials.</p>
      <div className="rounded border p-6">
        <CTA primaryHref="/contact/quote" secondaryHref="tel:+19415550123" />
      </div>
    </main>
  );
}
