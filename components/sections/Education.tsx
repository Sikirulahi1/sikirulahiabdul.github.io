"use client";

import SectionHeading from "../ui/SectionHeading";
import FadeUp from "../animations/FadeUp";
import Tag from "../ui/Tag";
import { education, awards } from "@/lib/data";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="section-container bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="// academic_background"
          title="Education & Awards"
        />

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {/* Education */}
          <FadeUp>
            <div className="bg-card border border-border-subtle rounded-lg p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="text-accent" size={32} />
                <div>
                  <h3 className="text-2xl font-cormorant font-bold text-text-primary">
                    {education.university}
                  </h3>
                </div>
              </div>

              <p className="text-lg text-text-secondary mb-2">
                {education.degree}
              </p>

              <p className="text-sm text-text-muted font-jetbrains mb-6">
                {education.period}
              </p>

              <div className="bg-surface border border-accent/30 rounded-lg p-4 mb-6">
                <div className="text-5xl font-cormorant italic text-accent font-bold mb-1">
                  {education.gpa}
                </div>
                <p className="text-xs font-jetbrains text-text-muted uppercase tracking-wider">
                  GPA (First Class Honours)
                </p>
              </div>

              <div>
                <h4 className="text-sm font-jetbrains text-text-primary mb-3 uppercase tracking-wider">
                  Relevant Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course, index) => (
                    <Tag key={index}>{course}</Tag>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Awards */}
          <div className="space-y-6">
            {awards.map((award, index) => (
              <FadeUp key={index} delay={index * 0.1}>
                <div className="bg-card border-l-2 border-accent rounded-lg p-6 hover:border-accent hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] transition-all">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{award.icon}</span>
                    <div>
                      <h3 className="text-lg font-cormorant font-bold text-text-primary mb-1">
                        {award.title}
                      </h3>
                      <p className="text-sm text-text-secondary mb-1">
                        {award.subtitle}
                      </p>
                      <p className="text-xs text-text-muted font-jetbrains">
                        {award.year}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
