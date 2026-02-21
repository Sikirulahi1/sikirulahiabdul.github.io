"use client";

import SectionHeading from "../ui/SectionHeading";
import FadeUp from "../animations/FadeUp";
import { motion } from "framer-motion";
import { stats } from "@/lib/data";
import CountUpAnimation from "../animations/CountUp";

export default function About() {
  const statData = [
    { value: stats.yearsExperience, label: "Years Building AI Systems" },
    { value: stats.workloadReduction, label: "Workload Reduction Delivered" },
    { value: stats.publications, label: "Research Publications" },
    { value: stats.gpa, label: "GPA (First Class)" },
  ];

  return (
    <section id="about" className="section-container">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="// about_me"
          title="About Me"
        />

        <div className="grid md:grid-cols-5 gap-16 lg:gap-20 mt-16">
          {/* Left Column - Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 space-y-8"
          >
            <p className="text-text-secondary text-base lg:text-lg leading-relaxed">
              I started in Mechatronics Engineering at FUNAAB, where I fell in love
              with the challenge of making machines intelligent. What began with
              control systems and robotics evolved into a deep dive into artificial
              intelligence and machine learning — where I discovered I could build
              systems that don't just execute commands, but understand, learn, and adapt.
            </p>

            <p className="text-text-secondary text-base lg:text-lg leading-relaxed">
              Today, I architect production AI systems at Optimus AI Labs, building
              everything from multi-agent workflows and RAG pipelines to autonomous
              phone agents that cut operational workload by 80%. I work across the
              full LLM lifecycle — fine-tuning models with PyTorch, deploying them
              at scale, and optimizing for performance and cost. I've benchmarked
              Claude, GPT, and Gemini in real-world scenarios to find the right tool
              for the right job.
            </p>

            <p className="text-text-secondary text-base lg:text-lg leading-relaxed">
              But I'm not just an engineer — I'm also a published researcher. My work
              on drone-mounted disease detection using YOLOv8 is indexed in Web of
              Science, and I'm an active member of MLCollective Nigeria, contributing
              to research at the intersection of computer vision, NLP, and multi-agent
              systems. For me, the best solutions come from bridging rigorous research
              with pragmatic engineering.
            </p>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 grid grid-cols-2 gap-8"
          >
            {statData.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-card border border-border-subtle rounded-lg p-8 hover:border-accent transition-colors"
              >
                <div className="text-4xl lg:text-5xl font-cormorant italic text-accent font-bold mb-2">
                  {stat.value.includes("+") || stat.value.includes("%") ? (
                    stat.value
                  ) : (
                    <CountUpAnimation
                      end={parseFloat(stat.value)}
                      decimals={stat.value.includes(".") ? 2 : 0}
                    />
                  )}
                </div>
                <p className="text-xs lg:text-sm font-jetbrains text-text-muted uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
