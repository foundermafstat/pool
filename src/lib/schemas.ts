import { absoluteUrl } from "@/lib/seo";
import { CITIES } from "@/lib/locations";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    name: "Pool Cage Experts",
    image: absoluteUrl("/vercel.svg"),
    url: absoluteUrl("/"),
    telephone: "+1-941-555-0123",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Business Blvd",
      addressLocality: "Sarasota",
      addressRegion: "FL",
      postalCode: "34236",
      addressCountry: "US",
    },
    areaServed: CITIES.map((c) => `${c.replace(/-/g, " ")}, FL`),
    serviceType: [
      "Pool Cage Installation",
      "Screen Enclosure Repair",
      "Lanai Screen Installation",
    ],
    priceRange: "$$$",
  };
}

export function getServiceSchema(serviceName: string, description: string, slug?: string) {
  const url = slug ? absoluteUrl(`/services/${slug}`) : undefined;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description,
    provider: {
      "@type": "LocalBusiness",
      name: "Pool Cage Experts",
      areaServed: CITIES.map((c) => `${c.replace(/-/g, " ")}, FL`),
      url: absoluteUrl("/"),
      telephone: "+1-941-555-0123",
    },
    areaServed: CITIES.map((c) => ({ "@type": "City", name: `${c.replace(/-/g, " ")}, FL` })),
    ...(url ? { url } : {}),
  };
}

export function getFAQSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.question,
      acceptedAnswer: { "@type": "Answer", text: i.answer },
    })),
  };
}

export function getServicesItemListSchema(services: { slug: string; name: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.name,
      url: absoluteUrl(`/services/${s.slug}`),
    })),
  };
}
