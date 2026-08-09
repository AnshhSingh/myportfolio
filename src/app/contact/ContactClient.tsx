"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { sendContactForm } from "../actions";
import { ArrowUpRight } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

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

export default function ContactClient() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: {
    name: string;
    email: string;
    message: string;
  }) {
    setStatus("idle");

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value as string);
    });

    const result = await sendContactForm(formData);

    if (result.success) {
      setStatus("success");
      reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <div className="py-12 md:py-20 min-h-screen">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-12 md:mb-20">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">Contact</h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            Let&apos;s build something extraordinary together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
              <div className="relative group">
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  className="w-full bg-transparent border-b border-border/40 py-4 text-lg focus:outline-none focus:border-foreground transition-colors peer placeholder-transparent"
                  placeholder="Name"
                />
                <label 
                  htmlFor="name" 
                  className="absolute left-0 -top-6 text-sm font-mono text-muted-foreground transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-foreground cursor-text bg-background/0 px-1 -mx-1"
                >
                  Name
                </label>
                {errors.name ? (
                  <motion.p 
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-600/70 dark:text-red-400/70 text-sm mt-2 font-mono"
                  >
                    {errors.name.message as string}
                  </motion.p>
                ) : null}
              </div>

              <div className="relative group">
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className="w-full bg-transparent border-b border-border/40 py-4 text-lg focus:outline-none focus:border-foreground transition-colors peer placeholder-transparent"
                  placeholder="Email"
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-0 -top-6 text-sm font-mono text-muted-foreground transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-foreground cursor-text bg-background/0 px-1 -mx-1"
                >
                  Email
                </label>
                {errors.email ? (
                  <motion.p 
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-600/70 dark:text-red-400/70 text-sm mt-2 font-mono"
                  >
                    {errors.email.message as string}
                  </motion.p>
                ) : null}
              </div>

              <div className="relative group">
                <textarea
                  id="message"
                  {...register("message")}
                  className="w-full bg-transparent border-b border-border/40 py-4 text-lg focus:outline-none focus:border-foreground transition-colors peer placeholder-transparent min-h-[120px] resize-none"
                  placeholder="Message"
                />
                <label 
                  htmlFor="message" 
                  className="absolute left-0 -top-6 text-sm font-mono text-muted-foreground transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-foreground cursor-text bg-background/0 px-1 -mx-1"
                >
                  Message
                </label>
                {errors.message ? (
                  <motion.p 
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-600/70 dark:text-red-400/70 text-sm mt-2 font-mono"
                  >
                    {errors.message.message as string}
                  </motion.p>
                ) : null}
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex items-center gap-2 font-medium text-lg disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting ? <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /> : null}
                </button>
              </div>

              <div aria-live="polite">
                {status === "success" ? (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-emerald-600/70 dark:text-emerald-400/70 font-mono text-sm mt-4"
                  >
                    Message sent successfully.
                  </motion.p>
                ) : null}
                {status === "error" ? (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-600/70 dark:text-red-400/70 font-mono text-sm mt-4"
                  >
                    Failed to send message. Please try again.
                  </motion.p>
                ) : null}
              </div>
            </form>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-4 lg:col-start-9 space-y-12 pt-4">
            <div>
              <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-6 border-b border-border/40 pb-4">
                Details
              </h2>
              <div className="space-y-4">
                <p className="text-lg">anshsingh25bd@gmail.com</p>
                <p className="text-lg">+91 6359451876</p>
                <p className="text-lg text-muted-foreground">Chennai, India</p>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-6 border-b border-border/40 pb-4">
                Socials
              </h2>
              <div className="space-y-4 flex flex-col">
                <a 
                  href="https://www.linkedin.com/in/ansh-singh-484215253/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg hover:text-muted-foreground transition-colors inline-flex items-center gap-2 w-fit group"
                >
                  LinkedIn
                  <ArrowUpRight size={16} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-muted-foreground" />
                </a>
                <a 
                  href="https://github.com/AnshhSingh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg hover:text-muted-foreground transition-colors inline-flex items-center gap-2 w-fit group"
                >
                  GitHub
                  <ArrowUpRight size={16} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-muted-foreground" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
