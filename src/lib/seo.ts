// SEO utility functions

/**
 * Generates a canonical URL for a given path
 * @param path - The path to generate a canonical URL for
 * @returns The canonical URL
 */
export function getCanonicalUrl(path: string): string {
  const baseUrl = process.env.DOMAIN_URL || 'https://www.ansh-singh.in';
  return `${baseUrl}${path}`;
}

/**
 * Generates structured breadcrumb data for SEO
 * @param items - The breadcrumb items
 * @returns The structured breadcrumb data in JSON-LD format
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url,
    })),
  };
}

/**
 * Generates SEO-friendly title tags
 * @param pageTitle - The page title
 * @param siteName - Optional site name to append
 * @returns The formatted title
 */
export function formatPageTitle(pageTitle: string, siteName = 'Ansh Singh Portfolio'): string {
  return pageTitle ? `${pageTitle} | ${siteName}` : siteName;
}

/**
 * Creates structured project data for SEO
 * @param project - The project data
 * @returns The structured project data in JSON-LD format
 */
export function generateProjectSchema(project: { 
  title: string; 
  description: string; 
  image?: string;
  url?: string;
  github?: string;
  technologies?: string[];
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    'name': project.title,
    'description': project.description,
    'image': project.image,
    'url': project.url,
    'applicationCategory': 'WebApplication',
    'operatingSystem': 'All',
    'author': {
      '@type': 'Person',
      'name': 'Ansh Singh'
    },
    'codeRepository': project.github,
    'programmingLanguage': project.technologies?.join(', ')
  };
}
