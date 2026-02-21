"use client";

import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import Tag from "../ui/Tag";
import { projects } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, FileText, ImageIcon } from "lucide-react";
import Image from "next/image";

const categories = ["All", "AI & LLM", "Computer Vision", "NLP", "Full Stack"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category.includes(activeFilter));

  return (
    <section id="projects" className="section-container bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="// featured_work"
          title="Projects"
          subtitle="A selection of production systems and research implementations that solve real-world problems."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-5 mb-14 mt-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-8 py-3.5 text-sm font-medium rounded-lg transition-all ${activeFilter === category
                ? "bg-gradient-to-r from-accent to-accent-light text-background shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                : "bg-card text-text-secondary border border-border-subtle hover:border-accent hover:text-accent"
                }`}
              style={{ fontFamily: 'var(--font-fira-code), monospace' }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border-subtle rounded-lg overflow-hidden hover:border-accent hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all hover:-translate-y-1 flex flex-col"
              >
                {/* Project Image/Thumbnail */}
                {project.image ? (
                  <div className="relative w-full h-48 bg-surface overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-48 bg-surface flex items-center justify-center">
                    <ImageIcon className="text-text-muted" size={48} />
                  </div>
                )}

                {/* Category Badge */}
                <div className="p-5 pb-0">
                  <Tag variant="accent">{project.category[0]}</Tag>
                </div>

                {/* Content */}
                <div className="p-5 pt-4 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    {project.title}
                  </h3>

                  <p className="text-text-secondary text-sm mb-4 line-clamp-3 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Metric */}
                  <div className="bg-surface border border-accent/30 rounded-lg p-3 mb-4">
                    <p className="text-accent text-xs" style={{ fontFamily: 'var(--font-fira-code), monospace' }}>
                      {project.keyMetric}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 4).map((tech, techIndex) => (
                      <Tag key={techIndex}>{tech}</Tag>
                    ))}
                    {project.techStack.length > 4 && (
                      <Tag>+{project.techStack.length - 4}</Tag>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border-subtle">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary hover:text-accent transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary hover:text-accent transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                    {project.links.doi && (
                      <a
                        href={project.links.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary hover:text-accent transition-colors"
                        aria-label="Research Paper"
                      >
                        <FileText size={18} />
                      </a>
                    )}
                    {project.links.note && (
                      <span className="text-text-muted text-xs italic ml-auto">
                        {project.links.note}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
