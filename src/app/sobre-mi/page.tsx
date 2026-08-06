import type { Metadata } from "next";

import {
  ClipboardIcon,
  HeartHandIcon,
  ShieldIcon,
} from "@/components/icons/system-icons";
import { ContactCta } from "@/components/interior/contact-cta";
import { InteriorHero } from "@/components/interior/interior-hero";
import { Container } from "@/components/ui/container";
import { FeatureCard } from "@/components/ui/feature-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutPageContent } from "@/data/interior-pages";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "Conoce la trayectoria, formación y enfoque profesional del Ps. Fred Flores.",
};

const approachIcons = [HeartHandIcon, ClipboardIcon, ShieldIcon] as const;

export default function AboutPage() {
  return (
    <>
      <InteriorHero
        eyebrow="Sobre mí"
        title="Una práctica guiada por el compromiso y la vocación"
        description="Acompaño procesos de adolescentes, adultos y parejas desde una mirada cercana, profesional y adaptada a cada persona."
        photoSrc="/images/foto-nosotros.jpeg"
        photoAlt="Fred Flores en un retrato personal"
        patternOrientation="horizontal"
        patternPosition="left"
      />

      <section className="bg-background-muted py-[var(--section-space-compact)]">
        <Container>
          <SectionHeading
            eyebrow="Mi enfoque"
            title="Una forma de acompañarte centrada en ti"
            description="Cada historia es diferente. El proceso se construye desde la escucha, el respeto y objetivos claros."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {aboutPageContent.approach.map((item, index) => {
              const Icon = approachIcons[index];

              return (
                <FeatureCard
                  key={item.title}
                  icon={<Icon className="h-9 w-9" />}
                  title={item.title}
                  description={item.description}
                />
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-background py-[var(--section-space-compact)]">
        <Container className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeading
            eyebrow="Trayectoria"
            title="Formación y experiencia profesional"
            description="Esta información se completará con los datos exactos y acreditaciones definitivas antes de publicar."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {aboutPageContent.experience.map((item, index) => (
              <div
                key={item}
                className="rounded-card border border-border bg-surface p-5 shadow-card"
              >
                <span className="font-display text-3xl font-extrabold text-secondary/35">
                  0{index + 1}
                </span>
                <p className="mt-3 font-display text-lg font-bold text-primary">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ContactCta />
    </>
  );
}
