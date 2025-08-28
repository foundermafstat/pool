import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { CITIES } from "@/lib/locations";
import { SERVICES } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/services"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/locations"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/gallery"), lastModified: now, changeFrequency: "hourly", priority: 0.7 },
  ];

  SERVICES.forEach((s) => {
    routes.push({
      url: absoluteUrl(`/services/${s.slug}`),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  });

  CITIES.forEach((c) => {
    routes.push({
      url: absoluteUrl(`/locations/${c}`),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
    SERVICES.forEach((s) => {
      routes.push({
        url: absoluteUrl(`/services/${s.slug}/${c}`),
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    });
  });

  return routes;
}
