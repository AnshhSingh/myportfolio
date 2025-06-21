import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://anshsingh.live'
  const lastMod = new Date().toISOString()
  
  // Core pages
  const routes = [
    {
      url: baseUrl,
      lastModified: lastMod,
      changeFrequency: 'daily' as const, // Higher frequency for the homepage
      priority: 1.0, // Maximum priority for the homepage
    },
    {
      url: `${baseUrl}/about`,
      lastModified: lastMod,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: lastMod,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/skills`,
      lastModified: lastMod,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastMod,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },    {
      url: `${baseUrl}/links`,
      lastModified: lastMod,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },

    {
      url: `${baseUrl}/ansh_resume.pdf`,
      lastModified: lastMod,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]
  
  return routes
}
