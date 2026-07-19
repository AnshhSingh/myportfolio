import type { MetadataRoute } from "next";

const BASE_URL = process.env.DOMAIN_URL || "https://anshsingh.live";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/skills`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/links`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/ansh_resume.pdf`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
  ];
}
