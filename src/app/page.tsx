'use client';
import Image from "next/image";
import { Download, Linkedin, Github, Link } from "lucide-react"; 
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
                // Remove priority if not critical for initial load
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
              </motion.h1>

              <p className="text-lg md:text-2xl text-muted-foreground">
                Web developer | Open-source enthusiast
              </p>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="ansh_resume.pdf" download="Ansh_Resume.pdf">
                <Button className="gap-2 px-6 py-4 md:px-8 md:py-6 text-base md:text-lg" aria-label="Download Resume">
                  <Download size={20} className="md:size-6" />
                  Download Resume
                </Button>
              </a>
            </motion.div>

            <div className="flex justify-center md:justify-start gap-4">
              <motion.a
                href="https://www.linkedin.com/in/ansh-singh-484215253/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="https://github.com/AnshhSingh"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="/links"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Link size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default memo(Portfolio);
