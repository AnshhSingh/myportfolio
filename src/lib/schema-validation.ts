// This file contains basic tests for structured data
// You can use this to validate your structured data implementation
export function validateStructuredData(jsonLd: Record<string, unknown>): boolean {
  // Basic validation for person schema
  if (jsonLd['@type'] === 'Person') {
    return !!jsonLd.name && !!jsonLd.url;
  }
  
  // Basic validation for website schema
  if (jsonLd['@type'] === 'WebSite') {
    return !!jsonLd.name && !!jsonLd.url;
  }
  
  // Basic validation for breadcrumb schema
  if (jsonLd['@type'] === 'BreadcrumbList') {
    return Array.isArray(jsonLd.itemListElement) && jsonLd.itemListElement.length > 0;
  }
  
  // Basic validation for LocalBusiness schema
  if (jsonLd['@type'] === 'LocalBusiness') {
    return !!jsonLd.name && !!jsonLd.url && !!jsonLd.description;
  }
  
  // Basic validation for FAQPage schema
  if (jsonLd['@type'] === 'FAQPage') {
    return Array.isArray(jsonLd.mainEntity) && jsonLd.mainEntity.length > 0;
  }
  
  return false;
}
