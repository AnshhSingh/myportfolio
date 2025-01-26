import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Providers}  from "./providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ansh Singh Portfolio website",
  description: "This is my portfolio website to showcase my projects and skills including contact information",
  authors: [{ name: 'Ansh', url: 'https://myportfolio-sandy-seven.vercel.app/' }],
  metadataBase: new URL('https://myportfolio-sandy-seven.vercel.app/'),
  alternates: {
    canonical: '/',

  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body><Providers>{children}</Providers></body> 
    </html>
  );
}
