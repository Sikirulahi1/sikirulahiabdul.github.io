"use client";

import SectionHeading from "../ui/SectionHeading";
import FadeUp from "../animations/FadeUp";
import Tag from "../ui/Tag";
import { skills } from "@/lib/data";
import * as Icons from "lucide-react";

export default function Skills() {
  const getIcon = (iconName: string) => {
    const Icon = (Icons as any)[iconName];
    return Icon ? <Icon size={24} /> : null;
  };

  return (
    <section id="skills" className="section-container bg-surface/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="// technical_skills"
          title="Skills & Expertise"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <FadeUp key={index} delay={index * 0.1}>
              <div className="bg-card border-l-2 border-accent border-border-subtle hover:border-accent rounded-lg p-8 transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] h-full">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-accent">{getIcon(skillGroup.icon)}</div>
                  <h3 className="text-lg font-cormorant font-semibold text-text-primary">
                    {skillGroup.category}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
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
