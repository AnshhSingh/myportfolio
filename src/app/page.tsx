'use client';
import Image from "next/image";
import { Download, Linkedin, Github, Link, ArrowRight } from "lucide-react"; 
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import React, { memo } from "react";

// Animation variants defined outside the component
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const containerTransition = { duration: 0.6, ease: "easeOut" };

const scaleFadeVariant = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

const scaleFadeTransition = { duration: 0.5, ease: "easeOut" };

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const headingTransition = (delay = 0.2) => ({
  delay,
  duration: 0.6,
  ease: "easeOut",
});

function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 pt-20">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_2px),linear-gradient(to_bottom,#f0f0f0_2px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={containerTransition}
        className="container max-w-7xl w-full px-4"
      >
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex justify-center md:justify-end order-1 md:order-none">
            <motion.div
              variants={scaleFadeVariant}
              initial="hidden"
              animate="visible"
              transition={scaleFadeTransition}
              className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-primary/20 shadow-lg"
            >
              <Image
                src="/me.jpeg"
                alt="Ansh's portrait"
                fill
                className="object-cover"
                priority
                fetchPriority="high"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={containerTransition}
            className="space-y-6 md:space-y-8 text-center md:text-left order-2 md:order-none"
          >
            <div className="space-y-4">
              <motion.h1
                variants={headingVariants}
                initial="hidden"
                animate="visible"
                transition={headingTransition(0.2)}
                className="text-4xl md:text-6xl font-bold tracking-tight"
              >
                <motion.span
                  variants={{
                    hidden: { scale: 0.8, opacity: 0 },
                    visible: { scale: 1, opacity: 1 },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                  className="inline-block text-5xl md:text-8xl text-primary"
                >
                  Hi,
                </motion.span>{" "}
                <motion.span
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                >
                  I am Ansh
                </motion.span>
              </motion.h1>              <p className="text-lg md:text-2xl text-muted-foreground mb-4">
                Full Stack Developer | Open Source Enthusiast
              </p>

              <div className="space-y-4 text-base md:text-lg text-left">                
                <p>
                  I&apos;m a passionate <a href="/skills" className="text-primary hover:underline">Full Stack Developer</a> and 
                  Computer Science student with a keen interest in building innovative web applications. Check out 
                  my <a href="/projects" className="text-primary hover:underline">portfolio projects</a> to see my work.
                </p>
              
                <p>
                  I am also currently working on delivering ML based web applications and exploring the world of AI. 
                  Learn more <a href="/about" className="text-primary hover:underline">about my background</a> and 
                  my journey in software development.
                </p>
              </div>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-6">
              <a href="ansh_resume.pdf" download="Ansh_Resume.pdf">
                <Button className="gap-2 px-6 py-4 md:px-8 md:py-6 text-base md:text-lg" aria-label="Download Resume">
                  <Download size={20} className="md:size-6" />
                  Download Resume
                </Button>
              </a>
            </motion.div>            <div className="flex flex-col space-y-4">
              <p className="text-sm text-muted-foreground">Connect with me:</p>
              <div className="flex justify-center md:justify-start gap-4">
                <motion.a
                  href="https://www.linkedin.com/in/ansh-singh-484215253/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                  <span className="text-sm">LinkedIn</span>
                </motion.a>
                <motion.a
                  href="https://github.com/AnshhSingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github size={20} />
                  <span className="text-sm">GitHub</span>
                </motion.a>
                <motion.a
                  href="/links"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  aria-label="All Links"
                >
                  <Link size={20} />
                  <span className="text-sm">More Links</span>
                </motion.a>
              </div>
            </div>          </motion.div>        
        </div>

        <motion.div 
          className="mt-16 md:mt-24 space-y-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Explore My Portfolio</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: "My Projects", 
                description: "Explore my latest web development work and client projects", 
                icon: "/icons/react.svg", 
                link: "/projects",
                cta: "View Projects"
              },
              { 
                title: "Tech Skills", 
                description: "See the technologies and programming languages I specialize in", 
                icon: "/icons/javascript.svg", 
                link: "/skills",
                cta: "Explore Skills"
              },
              { 
                title: "Contact Me", 
                description: "Get in touch for collaboration or job opportunities", 
                icon: "/icons/html.svg", 
                link: "/contact",
                cta: "Reach Out"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-all">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="mb-4 text-muted-foreground">{item.description}</p>
                <a 
                  href={item.link} 
                  className="text-primary font-medium hover:underline inline-flex items-center gap-1"
                >
                  {item.cta} <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="mb-4">
              Want to know more about me? Visit my <a href="/about" className="text-primary hover:underline">about page</a>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default memo(Portfolio);
