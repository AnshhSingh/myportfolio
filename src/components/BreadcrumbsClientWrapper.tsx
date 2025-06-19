'use client';

import PageJsonLd from './PageJsonLd';

export default function BreadcrumbsClientWrapper() {
  // No need for usePathname() since we're not rendering visual breadcrumbs
  
  // Only render the JSON-LD structured data for SEO, not the visual breadcrumb
  return <PageJsonLd type="breadcrumb" />;
}
