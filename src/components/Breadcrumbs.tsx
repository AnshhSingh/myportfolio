import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Breadcrumbs() {
  const pathname = usePathname();
  const paths = pathname.split('/').filter(Boolean);
  
  if (paths.length === 0) {
    return null;
  }

  return (
    <nav className="flex py-3 text-sm" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-1">
        <li>
          <Link href="/" prefetch={true} className="text-muted-foreground hover:text-foreground">
            Home
          </Link>
        </li>
        
        {paths.map((path, i) => {
          const href = `/${paths.slice(0, i + 1).join('/')}`;
          const isLast = i === paths.length - 1;
          
          return (
            <li key={href} className="flex items-center">
              <span className="mx-2 text-muted-foreground">/</span>
              {isLast ? (
                <span className="font-medium">{path.charAt(0).toUpperCase() + path.slice(1)}</span>
              ) : (
                <Link href={href} prefetch={true} className="text-muted-foreground hover:text-foreground">
                  {path.charAt(0).toUpperCase() + path.slice(1)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
