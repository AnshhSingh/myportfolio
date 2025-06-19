'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { generateBreadcrumbSchema } from '@/lib/seo';

interface PageJsonLdProps {
  type?: 'breadcrumb' | 'article' | 'product' | 'faq';
  data?: Record<string, unknown>;
}

export default function PageJsonLd({ type = 'breadcrumb', data }: PageJsonLdProps) {
  const pathname = usePathname();
  const [jsonLdScript, setJsonLdScript] = useState<string>('');

  useEffect(() => {
    if (type === 'breadcrumb') {
      const parts = pathname.split('/').filter(Boolean);
      let currentPath = '';
      
      const breadcrumbs = [
        { name: 'Home', url: 'https://anshsingh.live' }
      ];
      
      parts.forEach(part => {
        currentPath += '/' + part;
        breadcrumbs.push({
          name: part.charAt(0).toUpperCase() + part.slice(1),
          url: `https://anshsingh.live${currentPath}`
        });
      });
      
      const schema = generateBreadcrumbSchema(breadcrumbs);
      setJsonLdScript(JSON.stringify(schema));
    }
    
    // Handle other types of structured data if needed
  }, [pathname, type, data]);

  if (!jsonLdScript) return null;

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdScript }}
    />
  );
}
