import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Page Not Found | Ansh Singh",
  description: "The page you&apos;re looking for doesn&apos;t exist. Navigate back to Ansh Singh&apos;s portfolio homepage.",
  robots: {
    index: false,
    follow: true,
  }
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-medium mb-6">Page Not Found</h2>      <p className="text-muted-foreground mb-8 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          href="/" 
          className="px-6 py-2 rounded bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Go Home
        </Link>
        <Link 
          href="/contact" 
          className="px-6 py-2 rounded border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
}
