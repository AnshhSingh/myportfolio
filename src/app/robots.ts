import type { MetadataRoute } from "next";

const BASE_URL = process.env.DOMAIN_URL || "https://www.ansh-singh.in";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
