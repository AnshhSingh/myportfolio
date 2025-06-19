"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, Linkedin, Github, ArrowRight } from "lucide-react";

export default function AnshSingh() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative pt-20">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_2px),linear-gradient(to_bottom,#f0f0f0_2px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      
      <div className="container max-w-7xl w-full px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-primary">Ansh Singh</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-4">
            Computer Science Engineering Student at SRM Institute of Science and Technology
          </h2>
          <p className="max-w-3xl mx-auto text-lg mb-8">
            Full stack developer specializing in React, Next.js and modern JavaScript frameworks. 
            Currently pursuing Bachelor of Technology in Computer Science Engineering (2022-2026) at SRM University, Chennai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-primary/20 shadow-lg">
              <Image
                src="/me.jpeg"
                alt="Ansh Singh - SRM University Student"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">About Me</h3>
            <p className="text-muted-foreground">
              I am a Computer Science Engineering student at SRM Institute of Science and Technology in Chennai, India.
              I specialize in web development, creating innovative solutions with React, Next.js, and other modern technologies.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/projects">
                <Button className="gap-2">
                  View Projects <ArrowRight size={18} />
                </Button>
              </Link>
              
              <Link href="/about">
                <Button variant="outline" className="gap-2">
                  More About Me <ArrowRight size={18} />
                </Button>
              </Link>
              
              <a href="/ansh_resume.pdf" download="Ansh_Singh_Resume.pdf">
                <Button variant="secondary" className="gap-2">
                  <Download size={18} />
                  Download Resume
                </Button>
              </a>
            </div>

            <div className="flex gap-4 mt-4">
              <a 
                href="https://www.linkedin.com/in/ansh-singh-484215253/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary/10 rounded-lg text-primary hover:bg-primary/20 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/AnshhSingh" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary/10 rounded-lg text-primary hover:bg-primary/20 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">SRM University Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "E-commerce Platform",
                description: "Built with React and Strapi CMS",
                link: "/projects"
              },
              {
                title: "PDF RAG System",
                description: "Document querying with AI",
                link: "/projects"
              },
              {
                title: "Micro Bench",
                description: "Arduino benchmarking tool",
                link: "/projects"
              }
            ].map((project, idx) => (
              <Link key={idx} href={project.link}>
                <div className="bg-card rounded-xl border border-primary/20 p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <h4 className="font-bold mb-2">{project.title}</h4>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
