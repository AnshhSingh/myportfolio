import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects by Ansh Singh | Web Development Portfolio",
  description: "Explore web development projects by Ansh Singh including React, Next.js, and full-stack applications with detailed descriptions, technologies used, and live demos.",
  keywords: ["web development projects", "React projects", "Next.js portfolio", "full-stack applications", "JavaScript projects", "TypeScript projects"],
  openGraph: {
    title: "Projects by Ansh Singh | Web Development Portfolio",
    description: "Explore web development projects by Ansh Singh including React, Next.js, and full-stack applications with detailed descriptions, technologies used, and live demos.",
    url: "/projects",
    images: [
      {
        url: "/me.jpeg",
        width: 800,
        height: 800,
        alt: "Ansh Singh's Projects",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
