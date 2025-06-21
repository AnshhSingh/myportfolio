import type { Metadata } from "next";
import { defaultViewport } from '@/lib/viewport';

export const viewport = defaultViewport;

export const metadata: Metadata = {
  title: "About Ansh Singh | Background & Experience",
  description: "Learn about Ansh Singh's background, education, experience and personal journey as a web developer and open-source enthusiast specializing in React and Next.js.",
  keywords: ["about Ansh Singh", "web developer background", "React developer profile", "software engineer experience", "open-source contributor"],
  openGraph: {
    title: "About Ansh Singh | Background & Experience",
    description: "Learn about Ansh Singh's background, education, experience and personal journey as a web developer and open-source enthusiast specializing in React and Next.js.",
    url: "https://anshsingh.live/about",
    images: [
      {
        url: "https://anshsingh.live/me.jpeg",
        width: 800,
        height: 800,
        alt: "Ansh Singh",
      },
    ],
    type: "profile",
  },
  alternates: {
    canonical: "https://anshsingh.live/about",
  },
};
