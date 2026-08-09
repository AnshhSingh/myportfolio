import type { Metadata } from "next";
import ResumeViewer from "./ResumeViewer";

export const metadata: Metadata = {
  title: "Resume | Ansh Singh",
  description: "View and download the professional resume of Ansh Singh, Full Stack Developer and Computer Science Engineering student.",
  keywords: ["Ansh Singh resume", "full stack developer resume", "software engineer CV", "Ansh Singh experience"],
  openGraph: {
    title: "Resume | Ansh Singh",
    description: "View and download the professional resume of Ansh Singh, Full Stack Developer and Computer Science Engineering student.",
    url: "/resume",
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
    canonical: "/resume",
  },
};

export default function ResumePage() {
  return <ResumeViewer />;
}
