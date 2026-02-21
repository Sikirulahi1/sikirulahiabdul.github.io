"use client";

import SectionHeading from "../ui/SectionHeading";
import FadeUp from "../animations/FadeUp";
import Tag from "../ui/Tag";
import { publications, researchInterests } from "@/lib/data";
import { FileText, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function Research() {
  return (
    <section id="publications" className="section-container">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          label="// publications"
          title="Publications"
          subtitle="Bridging academic rigor with practical AI engineering."
          centered
        />

        <div className="space-y-12 mt-14">
          {publications.map((pub, index) => (
            <FadeUp key={index} delay={index * 0.2}>
              <div className="bg-card border border-border-subtle rounded-lg p-8 lg:p-10 hover:border-accent transition-all">
                {/* Status Badge */}
                <div className="mb-5">
                  <motion.span
                    animate={{
                      scale: pub.status === "published" ? [1, 1.05, 1] : 1,
                    }}
                    transition={{
                      duration: 2,
                      repeat: pub.status === "published" ? Infinity : 0,
                      ease: "easeInOut",
                    }}
                    className={`inline-block px-3 py-1 text-xs rounded-lg uppercase tracking-wider ${pub.status === "published"
                      ? "bg-accent/20 text-accent border border-accent"
                      : "bg-yellow-500/20 text-yellow-400 border border-yellow-500"
                      }`}
                    style={{ fontFamily: 'var(--font-fira-code), monospace' }}
                  >
                    {pub.status === "published" ? "Published" : "Under Review"}
                  </motion.span>
                </div>

                {/* Journal */}
                <p className="text-accent text-sm mb-3" style={{ fontFamily: 'var(--font-fira-code), monospace' }}>
                  {pub.journal}
                </p>

                {/* Title */}
                <h3 className="text-xl font-bold text-text-primary mb-4 leading-snug">
                  {pub.title}
                </h3>

                {/* Authors */}
                <p
                  className="text-text-secondary text-xs mb-4 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: pub.authors.replace(
                      "S. Abdulkareem",
                      "<strong class='text-text-primary'>S. Abdulkareem</strong>"
                    ),
                  }}
                />

                {/* Details */}
                <p className="text-text-muted text-xs mb-4" style={{ fontFamily: 'var(--font-fira-code), monospace' }}>
                  {pub.details}
                </p>

                {/* DOI Link */}
                {pub.doi && (
                  <a
                    href={pub.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors text-sm mb-5"
                  >
                    <ExternalLink size={14} />
                    <span className="underline">DOI: {pub.doi.split("/").slice(-1)}</span>
                  </a>
                )}

                {/* Contribution */}
                <div className="mt-5 pt-5 border-t border-border-subtle">
                  <p className="text-text-secondary text-xs leading-relaxed">
                    <span className="text-accent font-semibold">My Contribution:</span>{" "}
                    {pub.contribution}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Research Interests */}
        <FadeUp delay={0.4}>
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold text-text-primary mb-8">
              Research Interests
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {researchInterests.map((interest, index) => (
                <span
                  key={index}
                  className="inline-block px-5 py-2.5 text-sm font-medium border border-accent text-accent rounded-lg hover:shadow-[0_0_10px_rgba(16,185,129,0.3)] hover:scale-105 transition-all"
                  style={{ fontFamily: 'var(--font-fira-code), monospace' }}
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
