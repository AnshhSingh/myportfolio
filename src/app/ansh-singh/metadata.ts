import type { Metadata } from "next";
import { defaultViewport } from '@/lib/viewport';

export const viewport = defaultViewport;

export const metadata: Metadata = {
  title: "Ansh Singh | Computer Science Student at SRM University",
  description: "Ansh Singh is a Computer Science Engineering student at SRM Institute of Science and Technology, specializing in full-stack development with React, Next.js, and modern JavaScript frameworks.",
  keywords: [
    "Ansh Singh", 
    "Ansh Singh SRM", 
    "Ansh Singh portfolio", 
    "Ansh Singh developer", 
    "SRM University", 
    "Computer Science student", 
    "React developer", 
    "Next.js developer"
  ],
  openGraph: {
    title: "Ansh Singh | Computer Science Student at SRM University",
    description: "Ansh Singh is a Computer Science Engineering student at SRM Institute of Science and Technology, specializing in full-stack development with React, Next.js, and modern JavaScript frameworks.",
    url: "https://anshsingh.live/ansh-singh",
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
    canonical: "https://anshsingh.live/ansh-singh",
  },
};
