import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import { Analytics } from "@vercel/analytics/react";
import BreadcrumbsClientWrapper from "@/components/BreadcrumbsClientWrapper";
import { generateJsonLd, generatePortfolioJsonLd } from "@/lib/json-ld";
// import ThemeSwitcher from "@/components/Themeswitch";

export { metadata, viewport } from "./metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="m-0 scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generatePortfolioJsonLd()) }}
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
