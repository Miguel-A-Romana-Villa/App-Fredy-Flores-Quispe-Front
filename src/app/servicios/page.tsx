import type { Metadata } from "next";

import { ContactCta } from "@/components/interior/contact-cta";
import { InteriorHero } from "@/components/interior/interior-hero";
import { ServicesAccordion } from "@/components/services/services-accordion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { servicesPageContent } from "@/data/interior-pages";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios de acompañamiento psicológico para adolescentes, adultos y parejas.",
};

export default function ServicesPage() {
  return (
    <>
      <InteriorHero
        eyebrow="Servicios"
        title="Un espacio para trabajar en lo que hoy necesitas"
        description="Psicoterapia para adolescentes, adultos y parejas, con un acompañamiento profesional y personalizado, adaptado a las necesidades y objetivos de cada proceso."
        photoSrc="/images/foto-servicios.png"
        photoAlt="Fred Flores preparado para una sesión de acompañamiento"
        spaciousPhoto
        patternOrientation="horizontal"
        patternPosition="bottom-right"
      />

      <section className="bg-background-muted py-[var(--section-space-compact)]">
        <Container>
          <SectionHeading
            eyebrow="Cómo puedo ayudarte"
            title="Servicios psicologia"
            description="Podemos trabajar distintas necesidades dentro de un proceso profesional, colaborativo y adaptado a tus objetivos."
            align="center"
          />
          <ServicesAccordion services={servicesPageContent.services} />
        </Container>
      </section>

      <ContactCta
        title="Encuentra el acompañamiento adecuado para ti"
        description="Puedes escribirme por WhatsApp para conversar brevemente sobre el motivo de consulta y resolver tus dudas."
      />
    </>
  );
}
