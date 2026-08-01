import type { ReactNode } from "react";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <article className="rounded-card border border-border/80 bg-surface p-6 shadow-card">
      <span className="grid h-16 w-16 place-items-center rounded-full bg-secondary-soft text-secondary-strong">
        {icon}
      </span>
      <h3 className="mt-5 font-display text-xl font-extrabold text-primary">
        {title}
      </h3>
      <p className="mt-2 leading-7 text-text-muted">{description}</p>
    </article>
  );
}
