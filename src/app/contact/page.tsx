import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Ansh Singh | Get In Touch",
  description: "Contact Ansh Singh for web development projects, collaborations, or professional inquiries through the contact form or social media. Available for freelance and full-time opportunities.",
  keywords: ["contact Ansh Singh", "web developer", "React developer contact", "Next.js freelancer", "web development services"],
  openGraph: {
    title: "Contact Ansh Singh | Get In Touch",
    description: "Contact Ansh Singh for web development projects, collaborations, or professional inquiries through the contact form or social media. Available for freelance and full-time opportunities.",
    url: "/contact",
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
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
