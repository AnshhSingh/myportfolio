"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Portfolio() {
  return (
    <div className="flex flex-col justify-center min-h-[calc(100vh-200px)] py-20">
      <div className="max-w-3xl">
        <div className="mb-6 hero-animate hero-delay-0">
          <span className="text-muted-foreground font-mono text-sm tracking-tight uppercase">Full Stack Developer</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.05] mb-8 hero-animate hero-delay-1">
          Crafting digital <br className="hidden md:block"/>
          experiences with <br className="hidden md:block"/>
          precision.
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-xl text-balance mb-12 leading-relaxed hero-animate hero-delay-2">
          I&apos;m Ansh Singh, a passionate software engineer specializing in innovative web applications and AI integration.
        </p>
        
        <div className="flex items-center gap-8 hero-animate hero-delay-3">
           <Link href="/projects" prefetch={true} className="group flex items-center gap-2 font-medium">
             View Work 
             <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
           </Link>
           <Link href="/resume" prefetch={true} className="text-muted-foreground hover:text-foreground transition-colors font-medium link-underline pb-1">
             Resume
           </Link>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="mt-32 border-t border-border/40 pt-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <Link href="/about" prefetch={true} className="group block">
            <h3 className="text-lg font-medium mb-3 flex items-center justify-between border-b border-transparent group-hover:border-border/50 pb-2 transition-all">
              About 
              <ArrowUpRight size={16} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Discover my background and journey into software development.</p>
          </Link>
          <Link href="/skills" prefetch={true} className="group block">
            <h3 className="text-lg font-medium mb-3 flex items-center justify-between border-b border-transparent group-hover:border-border/50 pb-2 transition-all">
              Skills 
              <ArrowUpRight size={16} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Technologies and programming languages I specialize in.</p>
          </Link>
          <Link href="/contact" prefetch={true} className="group block">
            <h3 className="text-lg font-medium mb-3 flex items-center justify-between border-b border-transparent group-hover:border-border/50 pb-2 transition-all">
              Contact 
              <ArrowUpRight size={16} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Get in touch for collaboration or job opportunities.</p>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
