import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Providers}  from "./providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ansh Singh Portfolio",
  description: "This is my portfolio website",
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
