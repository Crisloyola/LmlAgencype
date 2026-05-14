export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { EQUIPMENT } from "./lib/equipment-data";

const siteUrl = "https://lmlagencype.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const equipmentPages = EQUIPMENT.map((item) => ({
    url: `${siteUrl}/alquiler/${item.slug}`,
    lastModified: new Date(item.addedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/alquiler`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...equipmentPages,
  ];
}
