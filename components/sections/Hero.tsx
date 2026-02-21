"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, GraduationCap } from "lucide-react";
import { socialLinks } from "@/lib/data";
import Image from "next/image";
import TypeWriter from "../animations/TypeWriter";

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

  const phrases = [
    "ABDULKAREEM SIKIRULAHI",
    "a Backend Developer",
    "a Researcher",
    "an AI/ML Engineer",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background Glow */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] animate-pulse-slow"
        style={{
          background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-24 items-center">
          {/* Left Column - Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >
            {/* Heading with Typewriter */}
            <motion.div variants={item}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary leading-tight">
                I am{" "}
                <span className="text-accent">
                  <TypeWriter phrases={phrases} typingSpeed={80} deletingSpeed={40} delayBetweenPhrases={1500} />
                </span>
              </h1>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={item}
              className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl"
            >
              Aspiring PhD student in Electrical and Computer Engineering,
              dedicated to researching and developing solutions that address
              real-world challenges
            </motion.p>

            {/* Social Icons */}
            <motion.div variants={item} className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.name !== "Email" ? "_blank" : undefined}
                  rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                  className="w-12 h-12 rounded-full bg-card border border-border-subtle flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-all hover:scale-110"
                  aria-label={link.name}
                >
                  {getIcon(link.icon)}
                </a>
              ))}
              {/* Scholar Icon */}
              <a
                href="https://scholar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-border-subtle flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-all hover:scale-110"
                aria-label="Google Scholar"
              >
                <GraduationCap size={20} />
              </a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row items-start gap-5"
            >
              <button
                onClick={scrollToWork}
                className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-accent to-accent-light text-background font-semibold text-base rounded-xl hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                Explore Projects
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline"
                >
                  <path
                    d="M2 8H14M14 8L8 2M14 8L8 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={() => {
                  const contact = document.getElementById("contact");
                  if (contact) {
                    contact.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="w-full sm:w-auto px-10 py-4 border-2 border-accent text-text-primary font-semibold text-base rounded-xl hover:bg-accent hover:text-background transition-all hover:-translate-y-1"
              >
                View Resume
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-accent rounded-lg opacity-50" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-2 border-accent rounded-lg opacity-50" />
              
              {/* Profile Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-accent/20 to-surface border-2 border-border-subtle hover:border-accent transition-all duration-300">
                {/* Placeholder - Replace with your image */}
                <div className="w-full h-full flex items-center justify-center bg-surface/50">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-4xl font-bold text-background">
                      AS
                    </div>
                    <p className="text-text-muted text-sm">
                      Add your photo to
                      <br />
                      <code className="text-accent">/public/profile.jpg</code>
                    </p>
                  </div>
                </div>
                {/* Uncomment when you add your image */}
                {/* <Image
                  src="/profile.jpg"
                  alt="Abdulkareem Sikirulahi"
                  fill
                  className="object-cover"
                  priority
                /> */}
              </div>

              {/* Floating tech icons */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -left-6 w-16 h-16 rounded-xl bg-card border border-accent flex items-center justify-center shadow-lg p-3"
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01.21.03zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" fill="#10b981"/>
                </svg>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-20 -right-6 w-16 h-16 rounded-xl bg-card border border-accent flex items-center justify-center shadow-lg p-3"
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.314 5.373h2.628v8.272h-2.628V5.373zm0 10.314h2.628v2.94h-2.628v-2.94z" fill="#10b981"/>
                </svg>
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 -left-6 w-16 h-16 rounded-xl bg-card border border-accent flex items-center justify-center shadow-lg p-3"
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <path d="M12.005 0L4.952 7.053l2.008 2.008L12.005 4.015l5.045 5.046 2.008-2.008L12.005 0zM4.952 16.947l2.008-2.008L12.005 19.985l5.045-5.046 2.008 2.008-7.053 7.053-7.053-7.053z" fill="#10b981"/>
                  <path d="M12 8a4 4 0 100 8 4 4 0 000-8z" fill="#34d399"/>
                </svg>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-10 -right-6 w-16 h-16 rounded-xl bg-card border border-accent flex items-center justify-center shadow-lg p-3"
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <path d="M3 3v18h18V3H3zm16 16H5V5h14v14z" fill="#10b981"/>
                  <path d="M7 7h4v4H7V7zm0 6h4v4H7v-4zm6-6h4v4h-4V7zm0 6h4v4h-4v-4z" fill="#34d399"/>
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
