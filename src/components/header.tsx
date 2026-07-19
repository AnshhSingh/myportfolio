"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, User, Code, Briefcase, Mail } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export default function Header() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });

  const navLinks = [
    { name: "Home", path: "/", icon: <Home size={18} /> },
    { name: "About", path: "/about", icon: <User size={18} /> },
    { name: "Skills", path: "/skills", icon: <Code size={18} /> },
    { name: "Projects", path: "/projects", icon: <Briefcase size={18} /> },
    { name: "Contact", path: "/contact", icon: <Mail size={18} /> },
  ];

  useEffect(() => {
    const updateIndicator = () => {
      if (!navRef.current) return;
      const activeLink = navRef.current.querySelector('[data-active="true"]') as HTMLElement;
      if (activeLink) {
        setIndicatorStyle({
          left: activeLink.offsetLeft,
          width: activeLink.offsetWidth,
          opacity: 1,
        });
      }
    };

    // Small delay to ensure fonts/layout are rendered
    setTimeout(updateIndicator, 50);
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [pathname]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-full pt-6 pb-4 px-6 md:px-12 lg:px-24 flex items-center justify-center md:justify-between z-50 sticky top-0 bg-background/80 backdrop-blur-md border-b border-border/40"
    >
      <Link href="/" prefetch={true} className="hidden md:block font-bold text-xl tracking-tighter">
        AnshSingh.
      </Link>
      
      <nav ref={navRef} className="relative flex items-center gap-6 md:gap-8 text-sm font-medium">
        {/* Desktop Sliding Indicator */}
        <motion.div
          className="absolute -bottom-[17px] h-[1px] bg-foreground hidden md:block"
          initial={false}
          animate={{
            left: indicatorStyle.left,
            width: indicatorStyle.width,
            opacity: indicatorStyle.opacity,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />

        {navLinks.map((link) => {
          const isActive = pathname === link.path;
          return (
            <Link
              key={link.name}
              href={link.path}
              prefetch={true}
              data-active={isActive}
              className={`relative py-2 transition-colors ${
                isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="md:hidden">{link.icon}</span>
              <span className="hidden md:block">{link.name}</span>
              
              {/* Mobile dot indicator */}
              {isActive ? (
                <motion.span
                  className="absolute left-1/2 -translate-x-1/2 -bottom-[17px] w-1 h-1 rounded-full bg-foreground md:hidden"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              ) : null}
            </Link>
          );
        })}
      </nav>
    </motion.header>
  );
}
