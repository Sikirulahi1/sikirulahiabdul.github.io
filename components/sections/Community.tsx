"use client";

import SectionHeading from "../ui/SectionHeading";
import FadeUp from "../animations/FadeUp";
import { community } from "@/lib/data";
import { Users, Calendar, MapPin } from "lucide-react";

export default function Community() {
  return (
    <section id="community" className="section-container">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="// community_involvement"
          title="Community & Leadership"
          subtitle="Contributing to the growth of AI/ML communities and collaborative learning."
        />

        <div className="grid md:grid-cols-3 gap-10 mt-14">
          {community.map((item, index) => (
            <FadeUp key={index} delay={index * 0.1}>
              <div className="bg-card border border-border-subtle rounded-lg p-8 hover:border-accent hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] transition-all h-full flex flex-col">
                <div className="flex items-start gap-3 mb-6">
                  <Users className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="text-base font-bold text-text-primary mb-1">
                      {item.organization}
                    </h3>
                    <p className="text-accent text-sm mb-2" style={{ fontFamily: 'var(--font-fira-code), monospace' }}>
                      {item.role}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 text-xs text-text-muted mb-5" style={{ fontFamily: 'var(--font-fira-code), monospace' }}>
                  <span className="flex items-center gap-2">
                    <Calendar size={12} />
                    {item.startDate} – {item.endDate}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={12} />
                    {item.location}
                  </span>
                </div>

                <p className="text-text-secondary text-xs flex-grow leading-relaxed">
                  {item.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
