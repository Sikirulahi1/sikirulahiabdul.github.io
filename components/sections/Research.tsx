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

        <div className="space-y-12">
          {publications.map((pub, index) => (
            <FadeUp key={index} delay={index * 0.2}>
              <div className="bg-card border border-border-subtle rounded-lg p-8 hover:border-accent transition-all">
                {/* Status Badge */}
                <div className="mb-4">
                  <motion.span
                    animate={{
                      scale: pub.status === "published" ? [1, 1.05, 1] : 1,
                    }}
                    transition={{
                      duration: 2,
                      repeat: pub.status === "published" ? Infinity : 0,
                      ease: "easeInOut",
                    }}
                    className={`inline-block px-3 py-1 text-xs font-jetbrains rounded-full uppercase tracking-wider ${
                      pub.status === "published"
                        ? "bg-accent/20 text-accent border border-accent"
                        : "bg-yellow-500/20 text-yellow-400 border border-yellow-500"
                    }`}
                  >
                    {pub.status === "published" ? "Published" : "Under Review"}
                  </motion.span>
                </div>

                {/* Journal */}
                <p className="text-accent text-sm font-jetbrains mb-2">
                  {pub.journal}
                </p>

                {/* Title */}
                <h3 className="text-2xl font-cormorant font-bold text-text-primary mb-3">
                  {pub.title}
                </h3>

                {/* Authors */}
                <p
                  className="text-text-secondary text-sm mb-3"
                  dangerouslySetInnerHTML={{
                    __html: pub.authors.replace(
                      "S. Abdulkareem",
                      "<strong class='text-text-primary'>S. Abdulkareem</strong>"
                    ),
                  }}
                />

                {/* Details */}
                <p className="text-text-muted text-xs font-jetbrains mb-4">
                  {pub.details}
                </p>

                {/* DOI Link */}
                {pub.doi && (
                  <a
                    href={pub.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors text-sm mb-4"
                  >
                    <ExternalLink size={14} />
                    <span className="underline">DOI: {pub.doi.split("/").slice(-1)}</span>
                  </a>
                )}

                {/* Contribution */}
                <div className="mt-4 pt-4 border-t border-border-subtle">
                  <p className="text-text-secondary text-sm">
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
            <h3 className="text-lg font-cormorant font-semibold text-text-primary mb-4">
              Research Interests
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {researchInterests.map((interest, index) => (
                <Tag key={index} variant="accent">
                  {interest}
                </Tag>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
