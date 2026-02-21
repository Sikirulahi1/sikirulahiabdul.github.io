import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  label?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  label,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-14 ${centered ? "text-center" : ""}`}>
      {label && (
        <p className="text-accent text-xs tracking-widest mb-4 uppercase" style={{ fontFamily: 'var(--font-fira-code), monospace' }}>
          {label}
        </p>
      )}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg text-text-secondary max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
