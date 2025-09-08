export const CITIES = [
  "st-petersburg",
  "sarasota",
  "fort-myers",
  "naples",
  "port-st-lucie",
  "west-palm-beach",
  "boca-raton",
  "miami",
] as const;

export type CitySlug = typeof CITIES[number];

export function cityTitle(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function allCityPaths() {
  return CITIES.map((city) => ({ city }));
}
