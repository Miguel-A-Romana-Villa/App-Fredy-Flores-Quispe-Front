import type { Metadata } from "next";

import {
  HeartHandIcon,
  MonitorIcon,
  ShieldIcon,
} from "@/components/icons/system-icons";
import { ContactCta } from "@/components/interior/contact-cta";
import { InteriorHero } from "@/components/interior/interior-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { servicesPageContent } from "@/data/interior-pages";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios de acompañamiento psicológico para pacientes de habla hispana.",
};

const serviceIcons = [
  ShieldIcon,
  HeartHandIcon,
  MonitorIcon,
  HeartHandIcon,
] as const;

export default function ServicesPage() {
  return (
    <>
      <InteriorHero
        eyebrow="Servicios"
        title="Acompañamiento para diferentes etapas y necesidades"
        description="Un espacio profesional para adolescentes, adultos y parejas, adaptado a los objetivos particulares de cada proceso."
        photoSrc="/images/foto-servicios.jpeg"
        photoAlt="Fred Flores preparado para una sesión de acompañamiento"
        patternOrientation="horizontal"
        patternPosition="bottom-right"
      />

      <section className="bg-background-muted py-[var(--section-space-compact)]">
        <Container>
          <SectionHeading
            eyebrow="Cómo puedo ayudarte"
            title="Servicios psicológicos"
            description="Estas categorías son provisionales y podrán ajustarse cuando confirmemos la información profesional definitiva."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {servicesPageContent.services.map((service, index) => {
              const Icon = serviceIcons[index];

              return (
                <article
                  key={service.title}
                  className="group flex gap-5 rounded-panel border border-border bg-surface p-6 shadow-card transition hover:-translate-y-1 hover:shadow-elevated sm:p-8"
                >
                  <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-secondary-soft text-secondary-strong">
                    <Icon className="h-9 w-9" />
                  </span>
                  <div>
                    <h2 className="font-display text-xl font-extrabold text-primary">
                      {service.title}
                    </h2>
                    <p className="mt-3 leading-7 text-text-muted">
                      {service.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-background py-[var(--section-space-compact)]">
        <Container>
          <SectionHeading
            eyebrow="Motivos de consulta"
            title="Podemos trabajar diferentes áreas"
            description="Cada motivo se aborda considerando tu contexto, historia y objetivos personales."
            align="center"
          />
          <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
            {servicesPageContent.topics.map((topic) => (
              <span
                key={topic}
                className="rounded-pill border border-secondary/25 bg-secondary-soft/60 px-5 py-3 font-bold text-primary"
              >
                {topic}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <ContactCta
        title="Encuentra el acompañamiento adecuado para ti"
        description="Puedes escribirme por WhatsApp para conversar brevemente sobre el motivo de consulta y resolver tus dudas."
      />
    </>
  );
}
