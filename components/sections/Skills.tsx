"use client";

import SectionHeading from "../ui/SectionHeading";
import FadeUp from "../animations/FadeUp";
import Tag from "../ui/Tag";
import { skills } from "@/lib/data";

import React from "react";

// Real SVG icons for each skill category
const skillIcons: Record<string, React.ReactNode> = {
  Brain: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M9.5 2a3.5 3.5 0 0 0-3.47 3.06A3.5 3.5 0 0 0 3 8.5a3.5 3.5 0 0 0 1.04 2.49A3.5 3.5 0 0 0 3 13.5a3.5 3.5 0 0 0 3.03 3.44A3.5 3.5 0 0 0 9.5 20h.5" />
      <path d="M14.5 2a3.5 3.5 0 0 1 3.47 3.06A3.5 3.5 0 0 1 21 8.5a3.5 3.5 0 0 1-1.04 2.49A3.5 3.5 0 0 1 21 13.5a3.5 3.5 0 0 1-3.03 3.44A3.5 3.5 0 0 1 14.5 20h-.5" />
      <path d="M12 2v18" />
      <path d="M8 8h8" />
      <path d="M8 12h8" />
      <path d="M9 16h6" />
    </svg>
  ),
  Network: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <circle cx="5" cy="6" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="19" cy="6" r="2" />
      <circle cx="5" cy="18" r="2" />
      <circle cx="19" cy="18" r="2" />
      <path d="M6.7 7.5L10.5 10.5" />
      <path d="M17.3 7.5L13.5 10.5" />
      <path d="M6.7 16.5L10.5 13.5" />
      <path d="M17.3 16.5L13.5 13.5" />
    </svg>
  ),
  Server: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <rect x="2" y="2" width="20" height="8" rx="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" />
      <circle cx="6" cy="6" r="1" fill="currentColor" />
      <circle cx="6" cy="18" r="1" fill="currentColor" />
      <path d="M10 6h6" />
      <path d="M10 18h6" />
    </svg>
  ),
  BarChart3: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M3 3v18h18" />
      <rect x="7" y="10" width="3" height="8" rx="0.5" fill="currentColor" opacity="0.3" />
      <rect x="12" y="6" width="3" height="12" rx="0.5" fill="currentColor" opacity="0.5" />
      <rect x="17" y="3" width="3" height="15" rx="0.5" fill="currentColor" opacity="0.7" />
    </svg>
  ),
  BookOpen: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2V3z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7V3z" />
      <path d="M6 8h2" />
      <path d="M6 12h2" />
      <path d="M16 8h2" />
      <path d="M16 12h2" />
    </svg>
  ),
  Globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      <path d="M4.5 7h15" />
      <path d="M4.5 17h15" />
    </svg>
  ),
};

export default function Skills() {
  const getIcon = (iconName: string) => {
    return skillIcons[iconName] || null;
  };

  return (
    <section id="skills" className="section-container bg-surface/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="// technical_skills"
          title="Skills & Expertise"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {skills.map((skillGroup, index) => (
            <FadeUp key={index} delay={index * 0.1}>
              <div className="bg-card border-l-2 border-accent border-border-subtle hover:border-accent rounded-lg p-8 transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] h-full">
                {/* Header */}
                <div className="flex items-center gap-3 mb-7">
                  <div className="text-accent">{getIcon(skillGroup.icon)}</div>
                  <h3 className="text-lg font-semibold text-text-primary">
                    {skillGroup.category}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2.5">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <Tag key={skillIndex}>{skill}</Tag>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
