import type { ReactNode } from "react";

import { GeometricPattern } from "@/components/decorative/geometric-pattern";
import { Container } from "@/components/ui/container";

import { OrganicPhotoPlaceholder } from "./organic-photo-placeholder";

type PatternPosition = "left" | "right" | "bottom-right";

type InteriorHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  photoSide?: "left" | "right";
  photoLabel?: string;
  patternOrientation?: "vertical" | "horizontal";
  patternPosition?: PatternPosition;
  visual?: ReactNode;
  compact?: boolean;
  whiteBackground?: boolean;
  children?: ReactNode;
};

const patternClasses: Record<PatternPosition, string> = {
  left: "-left-10 top-10 h-auto w-80 sm:w-[25rem]",
  right: "-right-8 top-10 h-80 w-auto",
  "bottom-right": "-bottom-8 right-3 h-auto w-72 sm:w-96",
};

export function InteriorHero({
  eyebrow,
  title,
  description,
  photoSide = "right",
  photoLabel,
  patternOrientation = "vertical",
  patternPosition = "right",
  visual,
  compact = false,
  whiteBackground = false,
  children,
}: InteriorHeroProps) {
  const contentOrder = photoSide === "left" ? "lg:order-2" : "";
  const photoOrder = photoSide === "left" ? "lg:order-1" : "";
  const sectionSpacing = compact
    ? "py-8 sm:py-10 lg:min-h-0 lg:py-12"
    : "py-12 sm:py-16 lg:min-h-[35rem] lg:py-20";
  const visualHeight = compact ? "min-h-[19rem] sm:min-h-[21rem]" : "min-h-[25rem]";
  const responsiveLeftPattern =
    patternPosition === "left" && patternOrientation === "vertical";

  return (
    <section
      className={`relative isolate overflow-hidden ${whiteBackground ? "bg-surface" : "bg-background"} ${sectionSpacing}`}
    >
      {whiteBackground ? null : (
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_70%_45%,var(--color-brand-secondary-soft),transparent_33%)] opacity-75" />
      )}
      {responsiveLeftPattern ? (
        <>
          <GeometricPattern
            orientation="horizontal"
            className="absolute -left-4 top-10 -z-10 h-auto w-[calc(100%-2rem)] max-w-[32rem] opacity-40 lg:hidden"
          />
          <GeometricPattern
            orientation="vertical"
            className="absolute -left-10 top-10 -z-10 hidden h-auto w-80 opacity-55 lg:block"
          />
        </>
      ) : (
        <GeometricPattern
          orientation={patternOrientation}
          className={`absolute -z-10 opacity-55 ${patternClasses[patternPosition]}`}
        />
      )}

      <Container className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className={`relative z-10 max-w-2xl ${contentOrder}`}>
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-secondary">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-display text-title font-extrabold text-primary">
            {title}
          </h1>
          <span className="mt-5 block h-1 w-16 rounded-full bg-secondary" />
          <p className="mt-6 max-w-xl text-lead text-text-muted">
            {description}
          </p>
          {children ? <div className="mt-8">{children}</div> : null}
        </div>

        {visual ? (
          <div className={`relative z-0 ${visualHeight} ${photoOrder}`}>
            {visual}
          </div>
        ) : (
          <OrganicPhotoPlaceholder
            label={photoLabel}
            className={`relative z-0 ${photoOrder}`}
          />
        )}
      </Container>
    </section>
  );
}
