import type { Metadata } from "next";
import { cityTitle } from "@/lib/locations";

export function absoluteUrl(path = "/") {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  try {
    return new URL(path, base).toString();
  } catch {
    return `${base}${path}`;
  }
}

export function defaultMetadata(): Metadata {
  const title = "Pool Cage Experts | Sarasota, FL";
  const description =
    "Hurricane-rated pool cages and screen enclosures. Free quotes, lifetime warranty. Serving Sarasota, Bradenton, Venice, and Lakewood Ranch.";
  const url = absoluteUrl("/");
  return {
    metadataBase: new URL(absoluteUrl("/")),
    title,
    description,
    keywords: [
      "pool cage Sarasota",
      "screen enclosure FL",
      "lanai screens",
      "hurricane-rated enclosures",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      url,
      images: ["/vercel.svg"],
      locale: "en_US",
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function servicePageMetadata(serviceName: string, city?: string): Metadata {
  const cityName = city ? `${cityTitle(city)} ` : "";
  const title = `${serviceName} in ${cityName}FL | Pool Cage Experts`;
  const description = `Professional ${serviceName} installation ${
    city ? "in " + cityTitle(city) + ", " : ""
  }Florida. Hurricane-rated enclosures with lifetime warranty. Get a free quote today!`;
  return {
    title,
    description,
    openGraph: { title, description, images: ["/vercel.svg"] },
  };
}
