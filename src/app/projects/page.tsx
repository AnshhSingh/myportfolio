"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ProjectJsonLd from "@/components/ProjectJsonLd";
import React from "react";

const projects = [
  {
    title: "Memegen",
    description: "Create memes with latest things around the world in a minute!",
    tags: ["Next.js", "Supabase", "AWS S3", "GemniAPI", "Azure AI foundry"],
    github: "https://github.com/AnshhSingh/memegen",
    live: "https://meme.anshsingh.live/",
  },
  {
    title: "Ecom",
    description: "An ecom website built using react with CMS.",
    tags: ["React.JS", "Strapi", "Tailwind CSS"],
    github: "https://github.com/AnshhSingh/Ecom",
    live: "https://appproject-git-main-anshhsingh.vercel.app/",
  },
  {
    title: "PDF RAG",
    description: "Allows users to upload and parse PDFs and then query document content using LlamaIndex a vector RAG implementation.",
    tags: ["React.js", "Python", "Fastapi", "huggingface LLM", "Llamaindex"],
    github: "https://github.com/AnshhSingh/RAG_PDF_Backend",
    live: "https://colab.research.google.com/drive/1Xha2XgoOQQ8oLurqG8-g0LyrIONF7fkd?usp=sharing",
  },
  {
    title: "Micro Bench",
    description: "Benchmark Arduino boards and determine performance using a score.",
    tags: ["Arduino"],
    github: "https://github.com/AnshhSingh/microcontrollerbench",
    live: "",
  },
  {
    title: "Imageconv",
    description: "High speed image conversion web app.",
    tags: ["Next.JS", "Express.js", "sharp"],
    github: "https://github.com/AnshhSingh/imageconv",
    live: "",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Projects() {
  return (
    <div className="py-20 min-h-screen">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-20">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">Selected Works</h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            A curated collection of projects highlighting my expertise in web development and artificial intelligence.
          </p>
        </motion.div>

        <div className="flex flex-col border-t border-border/40">
          {projects.map((project, index) => (
            <motion.div
              variants={itemVariants}
              key={index}
              className="group flex flex-col md:flex-row md:items-start justify-between py-8 md:py-12 border-b border-border/40 hover:bg-foreground/5 transition-colors px-4 -mx-4 md:px-8 md:-mx-8 rounded-lg"
            >
              <div className="flex-1 pr-8">
                <div className="flex items-center gap-4 mb-2">
                  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{project.title}</h2>
                </div>
                <p className="text-muted-foreground mb-6 max-w-2xl">{project.description}</p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-8 md:mt-0 flex flex-col items-start md:items-end gap-3 shrink-0">
                {project.live ? (
                   <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors group/link">
                     Live Site <ArrowUpRight size={16} className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                   </a>
                ) : null}
                {project.github ? (
                   <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors group/link">
                     Source Code <ArrowUpRight size={16} className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                   </a>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add structured data for all projects (hidden from UI) */}
        {projects.map((project, index) => (
          <React.Fragment key={`jsonld-${index}`}>
            <ProjectJsonLd
              projectData={{
                title: project.title,
                description: project.description,
                github: project.github,
                url: project.live || "",
                technologies: project.tags,
              }}
            />
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}
