import { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  variant?: "default" | "accent";
}

export default function Tag({ children, variant = "default" }: TagProps) {
  return (
    <span
      className={`inline-block px-3 py-1.5 text-xs rounded-lg transition-all hover:scale-105 ${variant === "accent"
          ? "border border-accent text-accent hover:shadow-[0_0_10px_rgba(16,185,129,0.3)]"
          : "bg-border-subtle text-text-secondary hover:text-text-primary hover:border hover:border-accent"
        }`}
      style={{ fontFamily: 'var(--font-fira-code), monospace' }}
    >
      {children}
    </span>
  );
}
