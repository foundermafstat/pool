export const SERVICES = [
  {
    slug: "pool-cages",
    name: "Pool Cages",
    description: "Hurricane-rated pool enclosures with premium materials.",
  },
  {
    slug: "screen-enclosures",
    name: "Screen Enclosures",
    description:
      "Durable, low-maintenance screen enclosures designed for Florida homes.",
  },
  {
    slug: "lanai-screens",
    name: "Lanai Screens",
    description: "High-quality lanai screen installation and replacement.",
  },
  {
    slug: "repair-maintenance",
    name: "Repair & Maintenance",
    description:
      "Re-screening, structural reinforcement, leak sealing, hardware and paint restoration.",
  },
  {
    slug: "cleaning-care",
    name: "Cleaning & Care",
    description:
      "Soft-wash cleaning, mold/algae removal, and protective coatings to extend lifespan.",
  },
  {
    slug: "additional",
    name: "Additional Services",
    description:
      "Hurricane panels, retractable screens, leaf guards, design consulting, seasonal inspections.",
  },
] as const;

export type Service = typeof SERVICES[number];
export type ServiceSlug = Service["slug"];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
