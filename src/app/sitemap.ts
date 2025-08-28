import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { CITIES } from "@/lib/locations";
import { SERVICES } from "@/lib/services";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const routes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/services"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/locations"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/gallery"), lastModified: now, changeFrequency: "hourly", priority: 0.7 },
    { url: absoluteUrl("/blog"), lastModified: now, changeFrequency: "daily", priority: 0.6 },
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

  const posts: { slug: string; updatedAt: Date }[] = await prisma.post.findMany({
    where: { published: true },
    select: { slug: true, updatedAt: true },
    orderBy: { updatedAt: "desc" },
  });
  posts.forEach((p: { slug: string; updatedAt: Date }) => {
    routes.push({
      url: absoluteUrl(`/blog/${p.slug}`),
      lastModified: p.updatedAt ?? now,
      changeFrequency: "weekly",
      priority: 0.6,
    });
  });

  return routes;
}
