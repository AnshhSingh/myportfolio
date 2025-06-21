import type { Metadata } from "next";
import { defaultViewport } from '@/lib/viewport';

export const viewport = defaultViewport;

export const metadata: Metadata = {
  title: "Ansh Singh | Full Stack Developer & Computer Science Student",
  description: "Portfolio of Ansh Singh, a Full Stack Developer and Computer Science Engineering student at SRM University, showcasing projects, skills, and professional experience.",
  keywords: [
    "Ansh Singh", 
    "Ansh Singh portfolio",
    "Ansh Singh SRM",
    "Ansh Singh developer",
    "Ansh Singh SRMIST", 
    "SRM University student", 
    "Web developer",
    "Next.js developer",
    "full stack developer"
  ],  openGraph: {
    title: "Ansh Singh | Official Website - Computer Science Student & Developer",
    description: "Official website of Ansh Singh, Computer Science student at SRM University. Showcasing Ansh Singh's development projects, technical skills, and achievements as a full-stack developer specializing in React and Next.js.",
    url: "https://anshsingh.live",
    images: [
      {
        url: "https://anshsingh.live/me.jpeg",
        width: 800,
        height: 800,
        alt: "Ansh Singh",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://anshsingh.live",
  },
};
