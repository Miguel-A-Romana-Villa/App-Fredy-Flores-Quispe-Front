import type { Metadata } from "next";

import {
  CheckIcon,
  MonitorIcon,
  WhatsAppIcon,
} from "@/components/icons/system-icons";
import { ContactCta } from "@/components/interior/contact-cta";
import { InteriorHero } from "@/components/interior/interior-hero";
import { LottieAnimation } from "@/components/media/lottie-animation";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { whatsappUrl } from "@/config/site";
import { onlineTherapyContent } from "@/data/interior-pages";

export const metadata: Metadata = {
  title: "Terapia Online",
  description:
    "Información sobre las sesiones de psicoterapia online en español.",
};

export default function OnlineTherapyPage() {
  return (
    <>
      <InteriorHero
        eyebrow="Terapia Online"
        title="Acompañamiento profesional desde donde estés"
        description="Conéctate desde un espacio cómodo y privado para recibir atención psicológica en español mediante Google Meet."
        photoSide="left"
        patternPosition="right"
        visual={
          <LottieAnimation
            src="/animations/Paz%20e%20Yoga.json"
            label="Animación de paz y yoga"
          />
        }
      >
        <ButtonLink
          href={whatsappUrl}
          external
          size="lg"
          icon={<WhatsAppIcon className="h-6 w-6" />}
        >
          Consultar disponibilidad
        </ButtonLink>
      </InteriorHero>

      <section className="bg-background-muted py-[var(--section-space-compact)]">
        <Container>
          <SectionHeading
            eyebrow="Cómo funciona"
            title="Comienza en tres pasos"
            description="El proceso de coordinación es sencillo y se realiza directamente por WhatsApp."
            align="center"
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {onlineTherapyContent.steps.map((step) => (
              <article
                key={step.number}
                className="rounded-card border border-border bg-surface p-6 text-center shadow-card"
              >
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-secondary-soft font-display text-lg font-extrabold text-secondary-strong">
                  {step.number}
                </span>
                <h2 className="mt-5 font-display text-xl font-extrabold text-primary">
                  {step.title}
                </h2>
                <p className="mt-3 leading-7 text-text-muted">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-background py-[var(--section-space-compact)]">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="rounded-panel bg-primary p-8 text-white shadow-elevated sm:p-10">
            <MonitorIcon className="h-12 w-12 text-secondary-soft" />
            <h2 className="mt-6 font-display text-heading font-extrabold">
              Sesiones mediante Google Meet
            </h2>
            <p className="mt-4 text-lg leading-8 text-white/75">
              Recibirás un enlace privado antes de la sesión. Solo necesitas
              conexión a internet, un dispositivo con cámara y un espacio donde
              puedas conversar con tranquilidad.
            </p>
          </div>

          <div>
            <SectionHeading
              eyebrow="Ventajas"
              title="Terapia cercana, flexible y segura"
            />
            <ul className="mt-7 space-y-4">
              {onlineTherapyContent.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 text-lg text-text-muted"
                >
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-secondary" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <ContactCta
        title="Tu espacio terapéutico puede comenzar hoy"
        description="Escríbeme para resolver tus dudas y encontrar un horario adecuado para tu primera sesión online."
      />
    </>
  );
}
