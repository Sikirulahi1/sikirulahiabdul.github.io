"use client";

import SectionHeading from "../ui/SectionHeading";
import FadeUp from "../animations/FadeUp";
import { motion, useScroll, useTransform } from "framer-motion";
import { experiences } from "@/lib/data";
import { useRef } from "react";
import { MapPin, Calendar } from "lucide-react";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="section-container" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="// work_history"
          title="Experience"
        />

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-border-subtle">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-accent origin-top"
            />
          </div>

          {/* Experience Cards */}
          <div className="space-y-12 ml-8 md:ml-20">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-10 md:-left-[54px] top-2 w-4 h-4 rounded-full bg-accent border-4 border-background" />

                {/* Card */}
                <div className="bg-card border border-border-subtle hover:border-accent rounded-lg p-6 transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] hover:-translate-y-1">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-cormorant font-bold text-text-primary mb-1">
                      {exp.company}
                    </h3>
                    <p className="text-accent font-jetbrains text-sm mb-2">
                      {exp.role}
                    </p>
                    <div className="flex flex-wrap gap-4 text-xs text-text-muted font-jetbrains">
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {exp.startDate} – {exp.endDate}
                      </span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, bulletIndex) => (
                      <li
                        key={bulletIndex}
                        className="text-text-secondary text-sm flex gap-2"
                      >
                        <span className="text-accent flex-shrink-0">›</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
