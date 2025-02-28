"use client";
import { motion } from "framer-motion";
import { User, GraduationCap, Languages } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      <div className="container max-w-7xl w-full px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-center mb-12 md:mb-16"
        >
          About Me
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-card rounded-xl border border-primary/20 p-6 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <User className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold">Description</h2>
            </div>
            <p className="text-muted-foreground">
              I am a Full Stack Web devloper creating web applications with
              Next.js, Express.js, SQL/NoSQL and many more. I love to work on
              new creative problems and solve them
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-card rounded-xl border border-primary/20 p-6 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold">Education</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">
                  Bachelor of Technology in Computer Science Engineering
                </h3>
                <p className="text-muted-foreground">
                  SRM Institute of Science and Technology, 2022 - 2026
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">High School Diploma</h3>
                <p className="text-muted-foreground">
                  RPS International, 2020 - 2022
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-card rounded-xl border border-primary/20 p-6 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <Languages className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold">Languages</h2>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-muted-foreground">English</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-muted-foreground">Hindi</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
