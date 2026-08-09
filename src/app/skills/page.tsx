import type { Metadata } from "next";
import SkillsClient from "./SkillsClient";

export const metadata: Metadata = {
  title: "Skills & Expertise | Ansh Singh",
  description: "Discover Ansh Singh's technical skills in web development including React, Next.js, TypeScript, Node.js, AWS, Docker and more with detailed proficiency levels and experience.",
  keywords: ["web development skills", "React expertise", "Next.js developer", "TypeScript skills", "full-stack developer skills", "JavaScript expert"],
  openGraph: {
    title: "Skills & Expertise | Ansh Singh",
    description: "Discover Ansh Singh's technical skills in web development including React, Next.js, TypeScript, Node.js, AWS, Docker and more with detailed proficiency levels and experience.",
    url: "/skills",
    images: [
      {
        url: "/me.jpeg",
        width: 800,
        height: 800,
        alt: "Ansh Singh's Skills",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "/skills",
  },
};

export default function SkillsPage() {
  return <SkillsClient />;
}
