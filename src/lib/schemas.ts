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
