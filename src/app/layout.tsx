import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import { Analytics } from "@vercel/analytics/react";
import BreadcrumbsClientWrapper from "@/components/BreadcrumbsClientWrapper";
import { generateJsonLd, generatePortfolioJsonLd, generatePortfolioProjectsJsonLd, generateFAQJsonLd } from "@/lib/json-ld";
// import ThemeSwitcher from "@/components/Themeswitch";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ansh Singh | SRM University Student & Web Developer",
  description: "Portfolio of Ansh Singh, Computer Science Engineering student at SRM Institute of Science and Technology (SRMIST), Chennai. Showcasing web development projects using React, Next.js, and modern technologies.",
  keywords: ["Ansh Singh", "Ansh Singh SRM", "SRM student", "SRM Institute of Science and Technology", "SRMIST", "web developer", "React developer", "Next.js", "portfolio", "JavaScript", "TypeScript", "Chennai", "Computer Science Engineering", "student portfolio"],
  authors: [{ name: "Ansh Singh", url: "https://anshsingh.live" }],
  creator: "Ansh Singh",
  publisher: "Ansh Singh",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },    openGraph: {
    title: "Ansh Singh | SRM University Student & Web Developer",
    description: "Portfolio of Ansh Singh, Computer Science Engineering student at SRM Institute of Science and Technology (SRMIST), Chennai. Projects in React, Next.js, and modern web technologies.",
    url: 'https://anshsingh.live',
    siteName: 'Ansh Singh - SRM Student Portfolio',
    images: [
      {
        url: 'https://anshsingh.live/me.jpeg',
        width: 800,
        height: 800,
        alt: 'Ansh Singh - SRM University Student',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ansh Singh | SRM University Student & Developer',
    description: 'Portfolio of Ansh Singh, Computer Science student at SRM Institute of Science and Technology. Web development projects and skills.',
    images: ['https://anshsingh.live/me.jpeg'],
    creator: '@ansh50421466',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add verification codes for search engines if you have them
    google: 'google-site-verification-code', // Replace with your verification code
  },
  alternates: {
    canonical: 'https://anshsingh.live',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="m-0 scroll-smooth">
      <head>
        <link rel="canonical" href="https://anshsingh.live" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generatePortfolioJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generatePortfolioProjectsJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQJsonLd()) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Analytics />
        <Header />
        {/* <ThemeSwitcher /> */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbsClientWrapper />
          <main>{children}</main>
        </div>
        <footer className="py-8 mt-16 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Ansh Singh. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
