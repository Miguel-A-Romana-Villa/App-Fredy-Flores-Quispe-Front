import type { ReactNode } from "react";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  centered?: boolean;
};

export function FeatureCard({
  icon,
  title,
  description,
  centered = false,
}: FeatureCardProps) {
  return (
    <article
      className={`card-motion rounded-card border border-border/80 bg-surface p-5 shadow-card ${centered ? "text-center" : ""}`.trim()}
    >
      <span
        className={`grid h-16 w-16 place-items-center rounded-full bg-secondary-soft text-secondary-strong ${centered ? "mx-auto" : ""}`.trim()}
      >
        {icon}
      </span>
      <h3 className="mt-5 font-display text-xl font-extrabold text-primary">
        {title}
      </h3>
      <p className="mt-2 leading-7 text-text-muted">{description}</p>
    </article>
  );
}
