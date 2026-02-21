"use client";

import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "@/lib/data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  const scrollToWork = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Github":
        return <Github size={20} />;
      case "Linkedin":
        return <Linkedin size={20} />;
      case "Mail":
        return <Mail size={20} />;
      default:
        return null;
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] animate-pulse-slow"
        style={{
          background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Label */}
        <motion.p
          variants={item}
          className="text-accent text-xs sm:text-sm font-jetbrains uppercase tracking-[0.3em] mb-8"
        >
          &lt; AI/ML Engineer · Researcher · Builder /&gt;
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-cormorant font-bold text-text-primary mb-6 leading-tight"
          style={{ letterSpacing: "-0.02em" }}
        >
          Abdulkareem Sikirulahi
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="text-base sm:text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          I build intelligent systems that work in the real world — from LLM pipelines
          and multi-agent architectures to published computer vision research.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={scrollToWork}
            className="w-full sm:w-auto px-8 py-4 bg-accent text-background font-jetbrains text-sm rounded-full hover:bg-accent-light hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all hover:-translate-y-1"
          >
            View My Work
          </button>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 border border-accent text-accent font-jetbrains text-sm rounded-full hover:bg-accent hover:text-background transition-all hover:-translate-y-1"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={item}
          className="flex items-center justify-center gap-8"
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target={link.name !== "Email" ? "_blank" : undefined}
              rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
              className="text-text-secondary hover:text-accent transition-colors hover:scale-110 transform"
              aria-label={link.name}
            >
              {getIcon(link.icon)}
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-text-muted" size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
}
