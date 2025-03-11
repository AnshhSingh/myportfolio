"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, User, Brain, Folder, Mail } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Skills", href: "/skills", icon: Brain },
  { name: "Projects", href: "/projects", icon: Folder },
  { name: "Contact", href: "/contact", icon: Mail },
];

// Define the variants for icons with different states
const iconVariants = {
  rest: { scale: 1 },
  active: { scale: 1.2 },
  hover: { scale: 1.3, y: -3 },
  tap: { scale: 0.9 },
};

const Header = () => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={isMounted ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-background/50 backdrop-blur-sm border border-primary/20 shadow-lg px-8 py-2 md:px-4 md:py-2 fixed top-4 left-1/2 -translate-x-1/2 rounded-full z-50 max-w-[360px] md:max-w-3xl"
    >
      <nav className="flex items-center justify-around md:justify-center md:gap-8">
        {navLinks.map((link, index) => {
          const isActive = pathname === link.href;
          return (
            <motion.div
              key={link.name}
              initial={{ scale: 0, opacity: 0 }}
              animate={isMounted ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 260, damping: 20 }}
              className="relative"
            >
              <Link href={link.href} className="p-3 md:p-1.5 block">
                <motion.div
                  variants={iconVariants}
                  initial="rest"
                  animate={isActive ? "active" : "rest"}
                  whileHover="hover"
                  whileTap="tap"
                  className="relative flex items-center justify-center"
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-link"
                      className="absolute inset-0 bg-primary/10 rounded-full"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                  <link.icon
                    className={`w-6 h-6 md:w-6 md:h-6 transition-colors ${
                      isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                    }`}
                  />
                </motion.div>
              </Link>
            </motion.div>
          );
        })}
      </nav>
    </motion.header>
  );
};

export default Header;
