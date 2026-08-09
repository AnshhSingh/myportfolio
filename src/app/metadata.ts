import type { Metadata } from "next";
import { defaultViewport } from '@/lib/viewport';

const SITE_URL = process.env.DOMAIN_URL || "https://ansh-singh.in";
const OG_IMAGE_PATH = "/me.jpeg";

export const viewport = defaultViewport;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "Ansh Singh Portfolio",
  title: "Ansh Singh | Full Stack Developer & Computer Science Student",
  description: "Portfolio of Ansh Singh, a Full Stack Developer and Computer Science Engineering student at SRM University, showcasing projects, skills, and professional experience.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Ansh Singh", 
    "Ansh Singh portfolio",
    "Ansh Singh SRM",
    "Ansh Singh developer",
    "Ansh Singh SRMIST", 
    "SRM University student", 
    "Web developer",
    "Next.js developer",
    "full stack developer",
    "React developer",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio Website",
    "Creative Developer"
  ],
  authors: [{ name: "Ansh Singh", url: SITE_URL }],
  creator: "Ansh Singh",
  publisher: "Ansh Singh",
  category: "technology",
  manifest: "/manifest.json",
  icons: {
    icon: [{ url: "/favicon.ico" }],
    shortcut: [{ url: "/favicon.ico" }],
    apple: [{ url: "/favicon.ico" }],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Ansh Singh | Official Website - Computer Science Student & Developer",
    description: "Official website of Ansh Singh, Computer Science student at SRM University. Showcasing Ansh Singh's development projects, technical skills, and achievements as a full-stack developer specializing in React and Next.js.",
    url: SITE_URL,
    siteName: "Ansh Singh Portfolio",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE_PATH,
        width: 1200,
        height: 630,
        alt: "Ansh Singh portfolio preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ansh Singh | Official Website - Computer Science Student & Developer",
    description: "Official website of Ansh Singh, Computer Science student at SRM University. Showcasing projects, skills, and achievements as a full-stack developer.",
    creator: "@ansh50421466",
    images: [OG_IMAGE_PATH],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};
