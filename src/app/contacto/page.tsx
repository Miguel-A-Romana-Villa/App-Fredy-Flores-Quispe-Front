import type { Metadata } from "next";

import {
  CalendarIcon,
  CheckIcon,
  MonitorIcon,
  WhatsAppIcon,
} from "@/components/icons/system-icons";
import { InteriorHero } from "@/components/interior/interior-hero";
import { LottieAnimation } from "@/components/media/lottie-animation";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig, whatsappUrl } from "@/config/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta por WhatsApp para solicitar información o coordinar una sesión.",
};

const coordinationDetails = [
  "Contacto inicial mediante WhatsApp",
  "Coordinación de fecha y horario",
  "Sesiones online mediante Google Meet",
  "Atención para pacientes de habla hispana",
] as const;

export default function ContactPage() {
  return (
    <>
      <InteriorHero
        eyebrow="Contacto"
        title="Conversemos sobre cómo puedo ayudarte"
        description="Si deseas comenzar un proceso o tienes alguna duda, puedes escribirme directamente por WhatsApp."
        patternOrientation="vertical"
        patternPosition="left"
        compact
        whiteBackground
        visual={
          <LottieAnimation
            src="/animations/feather-pen.json"
            label="Animación de una pluma escribiendo"
            compact
          />
        }
      >
        <ButtonLink
          href={whatsappUrl}
          external
          size="lg"
          icon={<WhatsAppIcon className="h-6 w-6" />}
        >
          Escribir por WhatsApp
        </ButtonLink>
      </InteriorHero>

      <section className="bg-background-muted py-[var(--section-space-tight)]">
        <Container className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeading
            eyebrow="Coordinación"
            title="Un proceso sencillo y directo"
            description="Por el momento, todas las consultas y reservas se gestionarán mediante WhatsApp."
          />

          <div className="card-motion rounded-panel border border-border bg-surface p-5 shadow-elevated sm:p-6">
            <div className="flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-secondary-soft text-secondary-strong">
                <CalendarIcon className="h-7 w-7" />
              </span>
              <div>
                <h2 className="font-display text-xl font-extrabold text-primary">
                  Agenda tu sesión
                </h2>
                <p className="mt-1 text-text-muted">
                  WhatsApp: {siteConfig.whatsapp.displayPhone}
                </p>
              </div>
            </div>

            <ul className="mt-5 space-y-3 border-t border-border pt-5">
              {coordinationDetails.map((detail) => (
                <li
                  key={detail}
                  className="flex items-start gap-3 text-text-muted"
                >
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            <ButtonLink
              href={whatsappUrl}
              external
              size="lg"
              className="mt-6 w-full"
              icon={<WhatsAppIcon className="h-6 w-6" />}
            >
              Contactar ahora
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="bg-background py-[var(--section-space-tight)]">
        <Container>
          <div className="card-motion flex flex-col items-center rounded-panel border border-border bg-surface p-5 text-center shadow-card sm:p-6">
            <MonitorIcon className="h-12 w-12 text-secondary" />
            <h2 className="mt-4 font-display text-heading font-extrabold text-primary">
              Atención completamente online
            </h2>
            <p className="mt-3 max-w-2xl text-lg leading-8 text-text-muted">
              Después de coordinar la sesión recibirás un enlace privado de
              Google Meet para conectarte desde el lugar donde te encuentres.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
