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
    <div className={`mb-20 ${centered ? "text-center" : ""}`}>
      {label && (
        <p className="text-accent text-xs font-jetbrains uppercase tracking-widest mb-6">
          {label}
        </p>
      )}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-cormorant font-bold text-text-primary mb-6">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-text-secondary max-w-2xl ${centered ? 'mx-auto' : ''}">
          {subtitle}
        </p>
      )}
    </div>
  );
}
