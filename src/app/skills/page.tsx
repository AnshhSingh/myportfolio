"use client";

import { motion } from "framer-motion";

const skills = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"],
  backend: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"],
  tools: ["Git", "Docker", "AWS", "Vercel", "Figma", "Jest"],
  ai: ["TensorFlow", "PyTorch", "OpenAI API", "Hugging Face", "LangChain"]
};

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

export default function Skills() {
  return (
    <div className="py-20 min-h-screen">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-20">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">Technical Arsenal</h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            A comprehensive overview of the tools, languages, and frameworks I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <motion.div key={category} variants={itemVariants}>
              <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-8 border-b border-border/40 pb-4">
                {category}
              </h2>
              <ul className="space-y-4">
                {items.map((skill) => (
                  <li key={skill} className="text-xl font-medium tracking-tight">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
