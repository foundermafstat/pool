import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Pool Cage Experts",
    short_name: "PoolCage",
    description: "Hurricane-rated pool cages and screen enclosures in Sarasota, FL.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    theme_color: "#1d4ed8",
    background_color: "#ffffff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/vercel.svg",
        sizes: "512x512",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
