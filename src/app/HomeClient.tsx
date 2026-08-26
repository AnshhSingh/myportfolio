"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import TechMarquee from "@/components/TechMarquee";
import BentoCard from "@/components/BentoCard";
import { useEffect, useState, useRef } from "react";

// ——— Word-by-word stagger reveal ———
function AnimatedHeadline() {
  const words = ["Crafting", "digital", "experiences", "with", "precision."];

  return (
    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.02] mb-8 font-[family-name:var(--font-space-grotesk)]">
      {words.map((word, i) => (
        <motion.span
          key={word}
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.6,
            delay: 0.3 + i * 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
}

// ——— Typing subtitle effect ———
function TypedSubtitle() {
  const fullText =
    "I'm Ansh Singh, a passionate software engineer specializing in innovative web applications and AI integration.";
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const indexRef = useRef(0);

  useEffect(() => {
    // Delay before starting to type
    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        if (indexRef.current < fullText.length) {
          setDisplayed(fullText.slice(0, indexRef.current + 1));
          indexRef.current++;
        } else {
          clearInterval(interval);
          // Blink cursor a few times then hide
          setTimeout(() => setShowCursor(false), 2000);
        }
      }, 22);
      return () => clearInterval(interval);
    }, 1200);

    return () => clearTimeout(startDelay);
  }, []);

  return (
    <p className="text-lg md:text-xl text-muted-foreground max-w-xl text-balance mb-12 leading-relaxed font-mono">
      {displayed}
      <span
        className={`inline-block w-[2px] h-[1.1em] ml-0.5 align-text-bottom transition-opacity ${
          showCursor ? "animate-pulse" : "opacity-0"
        }`}
        style={{ backgroundColor: "var(--accent-pop)" }}
      />
    </p>
  );
}

// ——— Bento card visual contents ———

// About card: Developer ID badge
function AboutVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-1">
      <div className="w-full max-w-[210px] rounded border border-border/80 bg-foreground/[0.02] dark:bg-foreground/[0.04] p-2.5 transition-all duration-500 group-hover:border-accent-pop/60 shadow-sm relative overflow-hidden">
        {/* Top bar with mini badge */}
        <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-border/60 text-[9px] font-mono">
          <span className="text-foreground/40 dark:text-muted-foreground/40 uppercase tracking-wider">DEV // ID</span>
          <span className="flex items-center gap-1 font-mono text-[8px] text-accent-pop font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-pop animate-pulse" />
            ENGINEER
          </span>
        </div>

        {/* Content row: Photo + Info */}
        <div className="flex items-center gap-2.5">
          <div className="relative w-10 h-10 rounded overflow-hidden border border-border/80 shrink-0 bg-muted/30">
            <Image
              src="/me.jpeg"
              alt="Ansh Singh"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              sizes="40px"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold tracking-tight truncate text-foreground/90">Ansh Singh</p>
            <p className="text-[10px] text-foreground/60 dark:text-muted-foreground/80 font-mono truncate">Full Stack & AI</p>
          </div>
        </div>

        {/* Bottom tags */}
        <div className="mt-2 pt-1.5 border-t border-border/40 flex items-center justify-between text-[9px] font-mono text-foreground/50 dark:text-muted-foreground/60">
          <span>Chennai, IN</span>
          <span className="text-accent-pop/80 font-semibold">B.Tech CS</span>
        </div>
      </div>
    </div>
  );
}

// Skills card: terminal typing effect
function SkillsVisual() {
  const lines = [
    { cmd: "$ node -v", out: "v22.14.0" },
    { cmd: "$ python -v", out: "3.12.3" },
  ];

  return (
    <div className="w-full font-mono text-[10px] md:text-xs leading-relaxed rounded border border-border/80 bg-foreground/[0.02] dark:bg-foreground/[0.04] p-2.5 transition-colors duration-500">
      <div className="flex items-center gap-1.5 mb-2 pb-1.5 border-b border-border/60">
        <span className="w-2 h-2 rounded-full bg-red-500/60" />
        <span className="w-2 h-2 rounded-full bg-amber-500/60" />
        <span className="w-2 h-2 rounded-full bg-emerald-500/60" />
        <span className="text-foreground/40 dark:text-muted-foreground/40 text-[9px] ml-1">zsh</span>
      </div>
      <div className="space-y-1">
        {lines.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -4 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.15, duration: 0.3 }}
            className="flex flex-col"
          >
            <span className="text-foreground/75 dark:text-foreground/80 font-semibold">{item.cmd}</span>
            <span className="text-foreground/50 dark:text-muted-foreground/70 pl-2 text-[10px]">{item.out}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Projects card: stacked cards preview
function ProjectsVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute border border-foreground/15 dark:border-muted-foreground/25 bg-card shadow-sm transition-all duration-500"
          style={{
            width: `${82 - i * 10}%`,
            height: `${72 - i * 8}%`,
            transform: `translateY(${i * 8}px) rotate(${(i - 1) * 2.5}deg)`,
            zIndex: 3 - i,
          }}
          whileHover={{
            y: i * 4,
            rotate: 0,
          }}
        >
          {/* Mock UI layout */}
          <div className="p-2.5 space-y-2">
            <div className="flex items-center justify-between">
              <div
                className="h-2 w-1/3 rounded-sm transition-colors duration-500"
                style={{
                  backgroundColor: i === 0 ? "var(--accent-pop)" : undefined,
                  opacity: i === 0 ? 0.8 : 0.25,
                }}
                {...(i !== 0 && {
                  className: "h-2 w-1/3 rounded-sm bg-foreground/20 dark:bg-foreground/30",
                })}
              />
              <div className="w-1.5 h-1.5 rounded-full bg-foreground/20 dark:bg-foreground/30" />
            </div>
            <div className="h-1.5 w-3/4 rounded-sm bg-foreground/15 dark:bg-foreground/20" />
            <div className="h-1.5 w-1/2 rounded-sm bg-foreground/10 dark:bg-foreground/15" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Contact card: animated envelope
function ContactVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        className="relative"
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Envelope body */}
        <div className="w-16 h-12 md:w-20 md:h-14 border-2 border-foreground/30 dark:border-muted-foreground/40 bg-card group-hover:border-accent-pop transition-colors duration-500 relative shadow-sm">
          {/* Envelope flap */}
          <div
            className="absolute -top-[2px] left-0 right-0 h-1/2 border-l-2 border-r-2 border-t-2 border-foreground/30 dark:border-muted-foreground/40 group-hover:border-accent-pop transition-colors duration-500 origin-top"
            style={{
              clipPath: "polygon(0 0, 50% 100%, 100% 0)",
            }}
          />
          {/* Lines inside */}
          <div className="absolute bottom-2.5 left-2.5 right-2.5 space-y-1.5">
            <div className="h-[1.5px] bg-foreground/25 dark:bg-muted-foreground/30 group-hover:bg-accent-pop/50 transition-colors duration-500" />
            <div className="h-[1.5px] w-2/3 bg-foreground/20 dark:bg-muted-foreground/25 group-hover:bg-accent-pop/40 transition-colors duration-500" />
          </div>
        </div>
        {/* Notification dot */}
        <motion.div
          className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full border-2 border-card"
          style={{ backgroundColor: "var(--accent-pop)" }}
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
}

export default function HomeClient() {
  return (
    <div className="relative flex flex-col min-h-[calc(100vh-200px)]">
      {/* ========== Hero Section ========== */}
      <div className="relative z-10 flex flex-col justify-center flex-1 py-12 md:py-20">

        {/* Hero content */}
        <div className="max-w-3xl">
          {/* Role label with line-draw */}
          <motion.div
            className="mb-6 flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div
              className="h-[1px] w-8 line-draw-animate"
              style={{ backgroundColor: "var(--accent-pop)" }}
            />
            <span className="text-muted-foreground font-mono text-sm tracking-tight uppercase">
              Full Stack Developer
            </span>
          </motion.div>

          {/* Animated headline */}
          <AnimatedHeadline />

          {/* Typed subtitle */}
          <TypedSubtitle />

          {/* CTA buttons */}
          <motion.div
            className="flex items-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/projects"
              prefetch={true}
              className="group flex items-center gap-2 font-medium relative"
            >
              <span className="relative z-10">View Work</span>
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
              {/* Amber underline on hover */}
              <span
                className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full transition-all duration-400"
                style={{ backgroundColor: "var(--accent-pop)" }}
              />
            </Link>
            <Link
              href="/resume"
              prefetch={true}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium link-underline pb-1"
            >
              Resume
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ========== Tech Marquee Ribbon ========== */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="-mx-6 md:-mx-12 lg:-mx-24 relative z-10"
      >
        <TechMarquee />
      </motion.div>

      {/* ========== Bento Grid Navigation ========== */}
      <div className="mt-8 md:mt-12 pb-12 md:pb-20 relative z-10">
        <motion.p
          className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Explore
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          <BentoCard
            href="/about"
            title="About"
            description="My background and journey into software development."
            delay={0}
          >
            <AboutVisual />
          </BentoCard>

          <BentoCard
            href="/skills"
            title="Skills"
            description="Technologies and languages I specialize in."
            delay={0.1}
          >
            <SkillsVisual />
          </BentoCard>

          <BentoCard
            href="/projects"
            title="Projects"
            description="Selected works showcasing web dev and AI."
            delay={0.2}
          >
            <ProjectsVisual />
          </BentoCard>

          <BentoCard
            href="/contact"
            title="Contact"
            description="Get in touch for collaboration or opportunities."
            delay={0.3}
          >
            <ContactVisual />
          </BentoCard>
        </div>
      </div>
    </div>
  );
}
