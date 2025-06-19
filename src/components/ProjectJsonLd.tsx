'use client';

import { useEffect, useState } from 'react';
import { generateProjectSchema } from '@/lib/seo';

interface ProjectData {
  title: string;
  description: string;
  image?: string;
  url?: string;
  github?: string;
  technologies?: string[];
}

/**
 * A component that adds structured data for projects without visual representation
 */
export default function ProjectJsonLd({ projectData }: { projectData: ProjectData }) {
  const [jsonLdScript, setJsonLdScript] = useState<string>('');

  useEffect(() => {
    if (projectData) {
      const schema = generateProjectSchema(projectData);
      setJsonLdScript(JSON.stringify(schema));
    }
  }, [projectData]);

  if (!jsonLdScript) return null;

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdScript }}
    />
  );
}
