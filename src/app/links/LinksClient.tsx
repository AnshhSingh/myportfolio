"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Instagram, Twitter, Code, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LinksClient() {
  const links = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ansh-singh-484215253/",
      icon: <Linkedin className="w-6 h-6" />,
    },
    {
      name: "GitHub",
      url: "https://github.com/AnshhSingh",
      icon: <Github className="w-6 h-6" />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/_anshsingh_",
      icon: <Instagram className="w-6 h-6" />,
    },
    {
      name: "X",
      url: "https://x.com/ansh50421466",
      icon: <Twitter className="w-6 h-6" />,
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/AnshhSingh/",
      icon: <Code className="w-6 h-6" />,
    },
    {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/user/user_41sajic4oat/",
      icon: <Cpu className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      <div className="container max-w-7xl w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-card rounded-xl border border-primary/20 p-6 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  {link.icon}
                </div>
                <h2 className="text-2xl font-bold">{link.name}</h2>
              </div>
              <motion.a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="w-full gap-2 px-8 py-6 text-lg">
                  Visit {link.name}
                </Button>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
