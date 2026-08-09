import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Ansh Singh | Background & Experience",
  description: "Learn about Ansh Singh's background, education, experience and personal journey as a web developer and open-source enthusiast specializing in React and Next.js.",
  keywords: ["about Ansh Singh", "web developer background", "React developer profile", "software engineer experience", "open-source contributor"],
  openGraph: {
    title: "About Ansh Singh | Background & Experience",
    description: "Learn about Ansh Singh's background, education, experience and personal journey as a web developer and open-source enthusiast specializing in React and Next.js.",
    url: "/about",
    images: [
      {
        url: "/me.jpeg",
        width: 800,
        height: 800,
        alt: "Ansh Singh",
      },
    ],
    type: "profile",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
