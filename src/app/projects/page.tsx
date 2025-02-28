'use client';
import { Globe, Github } from "lucide-react";
// import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Ecom",
    description: "An ecom wbesite built using react with CMS.",
    technologies: ["React.js", "Strapi", "Tailwind CSS"],
    github: "https://github.com/AnshhSingh/Ecom",
    live: "https://appproject-git-main-anshhsingh.vercel.app/", // Has live link
  },
  {
    id: 2,
    title: "Votewiki",
    description: "A decentralised voting app focusing on anonymity powered by blockchain",
    technologies: ["React.js", "Solidity", "Tailwind CS"],
    github: "https://github.com/AnshhSingh/votewiki",
    live: "", // No live link
  },
  {
    id: 3,
    title: "micro bench",
    description: "Benchmark Arduino boards and determine performance using a score",
    technologies: ["Arduino"],
    github: "https://github.com/AnshhSingh/microcontrollerbench",
    live: "", // No live link
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_2px),linear-gradient(to_bottom,#f0f0f0_2px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      <motion.div 
        className="container max-w-7xl w-full px-4"
      >
         <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-center mb-8"
        >
          My Projects
          </motion.h1>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }} // Hover effect
              className="bg-card rounded-lg border border-primary/20 shadow-lg p-6 space-y-4"
            >
                {/* Project Title */}
              <h2 className="text-2xl font-bold text-primary">{project.title}</h2>

{/* Project Description */}
<p className="text-muted-foreground">{project.description}</p>

{/* Technologies Used */}
<div className="flex flex-wrap gap-2">
  {project.technologies.map((tech, index) => (
    <span
      key={index}
      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
    >
      {tech}
    </span>
  ))}
</div>
              {/* ... (keep existing project card code) */}

              {/* Project Links */}
              <div className="flex gap-4">
                {/* GitHub Link (always visible) */}
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={24} />
                </motion.a>

                {/* Live Link (conditionally rendered) */}
                {project.live && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Globe size={24} />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}