"use client";

import SectionHeading from "../ui/SectionHeading";
import FadeUp from "../animations/FadeUp";
import { socialLinks } from "@/lib/data";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export default function Contact() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Github":
        return <Github size={24} />;
      case "Linkedin":
        return <Linkedin size={24} />;
      case "Mail":
        return <Mail size={24} />;
      default:
        return null;
    }
  };

  const getDisplayUrl = (url: string) => {
    return url
      .replace("https://", "")
      .replace("http://", "")
      .replace("mailto:", "");
  };

  return (
    <section id="contact" className="section-container bg-surface/30">
      <div className="max-w-4xl mx-auto text-center">
        <FadeUp>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-text-primary mb-6 tracking-tight">
            Let&apos;s Work Together
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="text-lg text-text-secondary mb-16 max-w-2xl mx-auto leading-relaxed">
            Open to AI/ML engineering roles and graduate research opportunities
            worldwide.
          </p>
        </FadeUp>

        {/* Contact Links */}
        <div className="space-y-5 mb-16">
          {socialLinks.map((link, index) => (
            <FadeUp key={index} delay={0.3 + index * 0.1}>
              <a
                href={link.url}
                target={link.name !== "Email" ? "_blank" : undefined}
                rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-center gap-4 bg-card border border-border-subtle hover:border-accent rounded-lg p-6 transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:-translate-y-1"
              >
                <span className="text-accent group-hover:scale-110 transition-transform">
                  {getIcon(link.icon)}
                </span>
                <span className="text-text-primary text-sm sm:text-base group-hover:text-accent transition-colors" style={{ fontFamily: 'var(--font-fira-code), monospace' }}>
                  {getDisplayUrl(link.url)}
                </span>
              </a>
            </FadeUp>
          ))}
        </div>

        {/* Download Buttons */}
        <FadeUp delay={0.7}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="/resume-industry.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-accent to-accent-light text-background font-semibold text-base rounded-lg hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all hover:-translate-y-1"
            >
              <Download size={18} />
              Download Industry Resume
            </a>
            <a
              href="/resume-academic.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 border-2 border-accent text-text-primary font-semibold text-base rounded-lg hover:bg-accent hover:text-background transition-all hover:-translate-y-1"
            >
              <Download size={18} />
              Download Academic CV
            </a>
          </div>
        </FadeUp>

        {/* Footer */}
        <FadeUp delay={0.9}>
          <div className="mt-20 pt-8 border-t border-border-subtle">
            <p className="text-text-muted text-xs" style={{ fontFamily: 'var(--font-fira-code), monospace' }}>
              © 2025 Abdulkareem Sikirulahi · Built with Next.js
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
