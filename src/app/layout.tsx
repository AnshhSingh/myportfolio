import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/header"
import { Analytics } from "@vercel/analytics/react"
import ThemeSwitcher from "@/components/Themeswitch";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ansh Singh Portfolio",
  description: "A simple portfolio website showcaing my projects and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="m-0">
      
      <body
      
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics/>
        <Header />
        {/* <ThemeSwitcher /> */}
       
        <main>{children}</main>
        
      </body>
    </html>
  );
}
