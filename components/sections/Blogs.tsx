"use client";

import SectionHeading from "../ui/SectionHeading";
import FadeUp from "../animations/FadeUp";
import Tag from "../ui/Tag";
import { blogPosts } from "@/lib/data";
import { Calendar, Clock, ExternalLink, ImageIcon } from "lucide-react";
import Image from "next/image";

export default function Blogs() {
  if (blogPosts.length === 0) {
    return (
      <section id="blogs" className="section-container bg-surface/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="// blog_posts"
            title="Blog & Articles"
            subtitle="Technical deep-dives, tutorials, and insights on AI/ML engineering."
          />

          <div className="text-center py-20">
            <p className="text-text-secondary text-lg mb-4">
              Blog posts coming soon!
            </p>
            <p className="text-text-muted text-sm">
              Add your blog posts to <code className="bg-card px-2 py-1 rounded text-accent">lib/data.ts</code>
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blogs" className="section-container bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="// blog_posts"
          title="Blog & Articles"
          subtitle="Technical deep-dives, tutorials, and insights on AI/ML engineering."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
            <FadeUp key={post.id} delay={index * 0.1}>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-card border border-border-subtle rounded-lg overflow-hidden hover:border-accent hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all hover:-translate-y-1"
              >
                {/* Blog Image */}
                {post.image ? (
                  <div className="relative w-full h-56 bg-surface overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-56 bg-surface flex items-center justify-center">
                    <ImageIcon className="text-text-muted" size={48} />
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-xs text-text-muted font-jetbrains mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-cormorant font-bold text-text-primary mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                    {post.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <Tag key={tagIndex}>{tag}</Tag>
                    ))}
                  </div>

                  {/* Read More */}
                  <div className="flex items-center gap-2 text-accent text-sm font-jetbrains group-hover:gap-3 transition-all">
                    Read More
                    <ExternalLink size={14} />
                  </div>
                </div>
              </a>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
