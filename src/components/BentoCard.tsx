"use client";

import { useRef, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface BentoCardProps {
  href: string;
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function BentoCard({
  href,
  title,
  description,
  children,
  className = "",
  delay = 0,
}: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--mouse-x", `${x}%`);
    card.style.setProperty("--mouse-y", `${y}%`);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Link href={href} prefetch={true} className="block group">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          className={`bento-card bg-card/60 backdrop-blur-[2px] p-6 md:p-8 h-full flex flex-col ${className}`}
        >
          {/* Card visual content */}
          <div className="relative z-10 flex-1 mb-6 min-h-[120px] md:min-h-[160px] flex items-center justify-center overflow-hidden">
            {children}
          </div>

          {/* Card info */}
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold tracking-tight">
                {title}
              </h3>
              <ArrowUpRight
                size={18}
                className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"
                style={{ color: "var(--accent-pop)" }}
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
