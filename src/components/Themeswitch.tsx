"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function ThemeSwitcher() {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="bg-background/80 backdrop-blur-md border border-primary/20 shadow-lg p-3 rounded-full flex items-center justify-center glass-panel"
        aria-label="Toggle theme"
      >
        <motion.div
          key={theme === "dark" ? "dark" : "light"}
          initial={{ rotate: 0, scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          exit={{ rotate: -360, scale: 0 }}
          transition={{ duration: 0.3, type: "spring" }}
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5 text-primary" />
          ) : (
            <Moon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
          )}
        </motion.div>
      </motion.button>
    </motion.div>
  );
}