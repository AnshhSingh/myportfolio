"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function ThemeSwitcher() {
  const [isMounted, setIsMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const savedTheme = localStorage.getItem("theme") || "light";
    setIsDark(savedTheme === "dark");
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark, isMounted]);

  if (!isMounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsDark(!isDark)}
        className="bg-background/50 backdrop-blur-sm border border-primary/20 shadow-lg p-3 rounded-full flex items-center justify-center"
        aria-label="Toggle theme"
      >
        <motion.div
          key={isDark ? "dark" : "light"}
          initial={{ rotate: 0, scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          exit={{ rotate: -360, scale: 0 }}
          transition={{ duration: 0.3, type: "spring" }}
        >
          {isDark ? (
            <Sun className="w-5 h-5 text-primary" />
          ) : (
            <Moon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
          )}
        </motion.div>
      </motion.button>
    </motion.div>
  );
}