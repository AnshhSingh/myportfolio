import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Ansh Singh | Full Stack Developer & Computer Science Student",
  description: "Portfolio of Ansh Singh, a Full Stack Developer and Computer Science Engineering student at SRM University, showcasing projects, skills, and professional experience.",
  keywords: [
    "Ansh Singh", 
    "Ansh Singh portfolio", 
    "full stack developer", 
    "React developer", 
    "Next.js developer",
    "SRM University student", 
    "web development", 
    "software engineering"
  ],
  openGraph: {
    title: "Ansh Singh | Full Stack Developer & Computer Science Student",
    description: "Portfolio of Ansh Singh, a Full Stack Developer and Computer Science Engineering student at SRM University, showcasing projects, skills, and professional experience.",
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
