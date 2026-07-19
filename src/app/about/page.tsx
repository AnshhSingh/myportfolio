"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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

export default function About() {
  return (
    <div className="py-12 md:py-20 min-h-screen">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl"
      >
        <motion.div variants={itemVariants} className="mb-12 md:mb-20">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">About</h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            The story behind the code.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <motion.div variants={itemVariants} className="md:col-span-4">
            <div className="sticky top-32">
              <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-8">
                Background
              </h2>
              <div className="relative w-full aspect-square md:aspect-[3/4] overflow-hidden bg-muted/20">
                <Image 
                  src="/me.jpeg" 
                  alt="Ansh Singh" 
                  fill 
                  priority
                  className="object-cover grayscale hover:grayscale-0 opacity-80 hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 ease-in-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="md:col-span-8 prose prose-neutral dark:prose-invert prose-lg">
            <p className="text-xl md:text-2xl leading-relaxed font-medium tracking-tight mb-8">
              I&apos;m a passionate Full Stack Developer and Computer Science student with a keen interest in building innovative web applications.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              My journey in software development started with a curiosity about how things work on the internet. Since then, I&apos;ve dedicated myself to mastering the tools and technologies that power the modern web.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Currently, my primary focus is on delivering Machine Learning-based web applications and exploring the vast world of Artificial Intelligence. I believe in writing clean, maintainable code and designing intuitive user experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I&apos;m not coding, I&apos;m usually exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community.
            </p>
          </motion.div>
        </div>
        
        <motion.div variants={itemVariants} className="mt-16 md:mt-32 pt-12 border-t border-border/40 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8">
          <div className="md:col-span-4">
            <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
              Experience
            </h2>
          </div>
          <div className="md:col-span-8 flex flex-col">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="flex gap-6 md:gap-8 group"
            >
              <div className="flex flex-col items-center mt-2">
                <div className="w-2.5 h-2.5 rounded-full bg-border group-hover:bg-foreground group-hover:scale-150 transition-all duration-500" />
                <div className="w-[1px] grow bg-border/40 mt-4" />
              </div>
              <div className="flex-1 pb-16">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-4 gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold tracking-tight leading-snug">
                      Full Stack Developer <span className="text-muted-foreground font-normal mx-1">at</span> Digistashing Technologies
                    </h3>
                    <p className="text-sm font-mono text-muted-foreground mt-2">Django, PostgreSQL, GraphQL, Next.js, AWS</p>
                  </div>
                  <p className="text-sm font-mono text-muted-foreground lg:text-right shrink-0">Dec 2025 – Present</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Architected database schemas and GraphQL APIs powering workflows for 100+ active businesses. Optimized Django ORM queries reducing latency by ~36%, and implemented robust Razorpay integrations and Grafana/Loki monitoring systems.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex gap-6 md:gap-8 group"
            >
              <div className="flex flex-col items-center mt-2">
                <div className="w-2.5 h-2.5 rounded-full bg-border group-hover:bg-foreground group-hover:scale-150 transition-all duration-500" />
                <div className="w-[1px] grow bg-border/40 mt-4" />
              </div>
              <div className="flex-1 pb-16">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-4 gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold tracking-tight leading-snug">
                      Full Stack Developer Intern <span className="text-muted-foreground font-normal mx-1">at</span> Tixon
                    </h3>
                    <p className="text-sm font-mono text-muted-foreground mt-2">Next.js, TypeScript, Supabase, Cloudflare Workers</p>
                  </div>
                  <p className="text-sm font-mono text-muted-foreground lg:text-right shrink-0">Mar 2025 – Aug 2025</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Served as primary engineer for an event platform serving 1,000+ users/hour. Migrated compute workloads to serverless infrastructure (cutting costs by ~58%) and integrated Zoho Payments with automated reconciliation.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex gap-6 md:gap-8 group"
            >
              <div className="flex flex-col items-center mt-2">
                <div className="w-2.5 h-2.5 rounded-full bg-border group-hover:bg-foreground group-hover:scale-150 transition-all duration-500" />
                {/* No vertical line for the last item */}
              </div>
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-4 gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold tracking-tight leading-snug">
                      Full Stack Developer Intern <span className="text-muted-foreground font-normal mx-1">at</span> Quamin Tech Solutions
                    </h3>
                    <p className="text-sm font-mono text-muted-foreground mt-2">React, Next.js, Express.js, Azure</p>
                  </div>
                  <p className="text-sm font-mono text-muted-foreground lg:text-right shrink-0">Oct 2024 – Feb 2025</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Developed real-time REST and WebSocket services for IoT sensor data ingestion. Cut database costs by 33% through aggressive update batching and deduplication strategies.
                </p>
              </div>
            </motion.div>

          </div>
        </motion.div>
        
        <motion.div variants={itemVariants} className="mt-16 md:mt-32 pt-12 border-t border-border/40 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8">
          <div className="md:col-span-4">
            <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
              Education
            </h2>
          </div>
          <div className="md:col-span-8">
            <h3 className="text-xl font-semibold tracking-tight">Computer Science</h3>
            <p className="text-muted-foreground mt-2">B.Tech in Computer Science and Engineering</p>
            <p className="text-sm text-muted-foreground mt-4 font-mono">2021 - Present</p>
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants} className="mt-16 pt-12 border-t border-border/40 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8">
          <div className="md:col-span-4">
            <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
              Languages
            </h2>
          </div>
          <div className="md:col-span-8">
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              <div>
                <h3 className="font-semibold tracking-tight">English</h3>
                <p className="text-sm text-muted-foreground mt-1">Professional</p>
              </div>
              <div>
                <h3 className="font-semibold tracking-tight">Hindi</h3>
                <p className="text-sm text-muted-foreground mt-1">Native</p>
              </div>
            </div>
          </div>
        </motion.div>
        
      </motion.div>
    </div>
  );
}
