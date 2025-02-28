'use client';
import Image from "next/image";
import { Download, Linkedin, Github, Globe } from "lucide-react"; // Import icons
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    
    <div className=" min-h-screen flex flex-col items-center justify-center p-4 ">
     <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_2px),linear-gradient(to_bottom,#f0f0f0_2px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container max-w-7xl w-full px-4"
      >
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Photo */}
          <div className="flex justify-center md:justify-end order-1 md:order-none">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-primary/20 shadow-lg"
            >
              <Image
                src="/me.jpeg"
                alt="Ansh's portrait"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          </div>

          {/* Right side - Text */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6 md:space-y-8 text-center md:text-left order-2 md:order-none"
          >
            <div className="space-y-4">
              {/* Animated h1 */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                className="text-4xl md:text-6xl font-bold tracking-tight"
              >
                <motion.span
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                  className="inline-block text-5xl md:text-8xl text-primary"
                >
                  Hi,
                </motion.span>{" "}
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                >
                  I am Ansh
                </motion.span>
              </motion.h1>

              <p className="text-lg md:text-2xl text-muted-foreground">
                Web developer | Open-source enthusiast 
              </p>
            </div>

            {/* Download Resume Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="gap-2 px-6 py-4 md:px-8 md:py-6 text-base md:text-lg" aria-label="Download Resume">
                <Download size={20} className="md:size-6" />
                Download Resume
              </Button>
            </motion.div>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-4">
              <motion.a
                href="https://linkedin.com" // Placeholder URL
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="https://github.com" // Placeholder URL
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://example.com" // Placeholder URL
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Globe size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}