import type { ReactNode } from "react";
import type { Metadata } from "next";
import { defaultViewport } from "@/lib/viewport";

export const viewport = defaultViewport;

export const metadata: Metadata = {
  title: "Important Links | Ansh Singh",
  description: "Find all important links to Ansh Singh's social profiles, projects, and professional networks in one convenient place.",
  keywords: ["Ansh Singh links", "social profiles", "portfolio links", "developer resources", "contact information"],
  openGraph: {
    title: "Important Links | Ansh Singh",
    description: "Find all important links to Ansh Singh's social profiles, projects, and professional networks in one convenient place.",
    url: "/links",
    images: [
      {
        url: "/me.jpeg",
        width: 800,
        height: 800,
        alt: "Ansh Singh",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "/links",
  },
};

export default function LinksLayout({ children }: { children: ReactNode }) {
  return children;
}