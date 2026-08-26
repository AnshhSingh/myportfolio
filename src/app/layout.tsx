import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import { Analytics } from "@vercel/analytics/react";
import BreadcrumbsClientWrapper from "@/components/BreadcrumbsClientWrapper";
import { generateJsonLd, generatePortfolioJsonLd } from "@/lib/json-ld";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeSwitcher from "@/components/Themeswitch";
import SwipeNavigation from "@/components/SwipeNavigation";
import InteractiveGrid from "@/components/InteractiveGrid";
import Link from "next/link";
export { metadata, viewport } from "./metadata";
export const dynamic = "force-static";
export const revalidate = 86400;

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="m-0 scroll-smooth" suppressHydrationWarning>
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
      <body className={`${inter.variable} ${jetBrainsMono.variable} ${spaceGrotesk.variable} antialiased transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Interactive Grid Background — all pages */}
          <div className="fixed inset-0 w-screen h-screen z-0 pointer-events-none">
            <InteractiveGrid />
          </div>

          {/* Subtle Grain Overlay */}
          <div 
            className="fixed inset-0 z-[100] pointer-events-none opacity-[0.03] dark:opacity-[0.04]" 
            style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")'}}
          ></div>
          
          <Analytics />
          <Header />
          <ThemeSwitcher />
          
          <div className="w-full max-w-5xl mx-auto px-6 md:px-12 lg:px-24 min-h-[calc(100vh-140px)]">
            <BreadcrumbsClientWrapper />
            <SwipeNavigation>
              <main>{children}</main>
            </SwipeNavigation>
          </div>
          
          <footer className="py-12 mt-auto border-t border-border/40">
            <div className="w-full max-w-5xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between text-muted-foreground text-sm">
              <p>© {new Date().getFullYear()} Ansh Singh. All rights reserved.</p>
              <div className="flex items-center gap-6 mt-4 md:mt-0">
                <Link href="/contact" prefetch={true} className="hover:text-foreground transition-colors">Contact</Link>
                <a href="https://github.com/AnshhSingh" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
                <a href="https://www.linkedin.com/in/ansh-singh-484215253/" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
