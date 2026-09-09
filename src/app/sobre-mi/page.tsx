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
        photoSrc="/images/foto-nosotros.png"
        photoAlt="Fred Flores en un retrato personal"
        patternOrientation="horizontal"
        patternPosition="left"
        uncroppedPhoto
      />

      <section className="bg-background-muted py-[var(--section-space-compact)]">
        <Container>
          <SectionHeading
            eyebrow="Mi enfoque"
            title="Una forma de acompañarte centrada en ti"
            description="Cada historia es diferente. El proceso se construye desde la escucha, el respeto y objetivos claros."
            align="center"
          />
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {aboutPageContent.approach.map((item, index) => {
              const Icon = approachIcons[index];

              return (
                <FeatureCard
                  key={item.title}
                  icon={<Icon className="h-9 w-9" />}
                  title={item.title}
                  description={item.description}
                  centered
                />
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-background py-[var(--section-space)]">
        <Container>
          <SectionHeading
            eyebrow="Trayectoria"
            title="Formación académica"
            description="Formación universitaria y especialización clínica orientada a una atención psicológica responsable y basada en evidencia."
            align="center"
          />

          <div className="mx-auto mt-8 grid max-w-5xl gap-4 lg:grid-cols-3">
            {aboutPageContent.education.map((item) => (
              <article
                key={item.title}
                className="card-motion flex h-full flex-col rounded-card border border-border bg-surface p-5 shadow-card"
              >
                <span className="w-fit rounded-pill bg-secondary-soft px-3 py-1 text-sm font-extrabold text-secondary-strong">
                  {item.date}
                </span>
                <h3 className="mt-4 font-display text-xl font-extrabold leading-7 text-primary">
                  {item.title}
                </h3>
                <p className="mt-auto pt-5 font-semibold text-text-muted">
                  {item.institution}
                </p>
                <p className="mt-1 text-sm text-text-muted">{item.location}</p>
              </article>
            ))}
          </div>

        </Container>
      </section>

      <section className="bg-background-muted py-[var(--section-space-compact)]">
        <Container>
          <SectionHeading
            eyebrow="Actualización profesional"
            title="Capacitaciones realizadas"
            description="Cursos, diplomas y especializaciones que complementan mi práctica clínica."
          />

          <div className="mt-7 grid gap-4 lg:grid-cols-2">
            {aboutPageContent.training.map((item) => (
              <article
                key={`${item.title}-${item.date}`}
                className="card-motion grid gap-4 rounded-card border border-border bg-surface p-5 shadow-card sm:grid-cols-[auto_1fr]"
              >
                <span className="h-fit w-fit rounded-pill bg-primary-soft px-3 py-1 text-sm font-extrabold text-primary">
                  {item.date}
                </span>
                <div>
                  <h3 className="font-display text-lg font-extrabold leading-6 text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-6 text-text-muted">
                    {item.institution}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <ContactCta />
    </>
  );
}
