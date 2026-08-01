import type { Metadata } from "next";

import { Brand } from "@/components/brand/brand";
import { BrandMark } from "@/components/brand/brand-mark";
import { GeometricPattern } from "@/components/decorative/geometric-pattern";
import {
  CalendarIcon,
  ClipboardIcon,
  HeartHandIcon,
  MonitorIcon,
  ShieldIcon,
  WhatsAppIcon,
} from "@/components/icons/system-icons";
import { Button, ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FeatureCard } from "@/components/ui/feature-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { whatsappUrl } from "@/config/site";

export const metadata: Metadata = {
  title: "Sistema de diseño",
  description: "Guía interna de los elementos visuales del sitio.",
  robots: {
    index: false,
    follow: false,
  },
};

const colors = [
  ["Primario", "--color-brand-primary", "#123B74"],
  ["Primario fuerte", "--color-brand-primary-strong", "#0A2D5C"],
  ["Secundario", "--color-brand-secondary", "#729895"],
  ["Secundario suave", "--color-brand-secondary-soft", "#DCE8E5"],
  ["Fondo", "--color-page-background", "#F6F8F7"],
  ["Fondo alterno", "--color-page-background-muted", "#EDF2F1"],
  ["Texto", "--color-text-primary", "#152B4A"],
  ["Superficie", "--color-page-surface", "#FFFFFF"],
] as const;

const icons = [
  ["Calendario", CalendarIcon],
  ["WhatsApp", WhatsAppIcon],
  ["Confidencialidad", ShieldIcon],
  ["Empatía", HeartHandIcon],
  ["Evidencia", ClipboardIcon],
  ["Terapia online", MonitorIcon],
] as const;

const features = [
  {
    title: "Confidencialidad total",
    description: "Tu información se mantiene segura y protegida.",
    Icon: ShieldIcon,
  },
  {
    title: "Trato empático",
    description: "Escucha activa y respeto durante cada sesión.",
    Icon: HeartHandIcon,
  },
  {
    title: "Enfoque profesional",
    description: "Acompañamiento responsable y basado en evidencia.",
    Icon: ClipboardIcon,
  },
] as const;

export default function DesignSystemPage() {
  return (
    <>
      <section className="border-b border-border bg-background-muted py-16 sm:py-20">
        <Container>
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-secondary">
            Guía interna
          </p>
          <h1 className="mt-4 font-display text-title font-extrabold text-primary">
            Sistema de diseño
          </h1>
          <p className="mt-5 max-w-2xl text-lead text-text-muted">
            Componentes y decisiones visuales que utilizaremos para construir
            todas las páginas.
          </p>
        </Container>
      </section>

      <section className="py-[var(--section-space-sm)]">
        <Container>
          <SectionHeading eyebrow="Identidad" title="Marca provisional" />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="flex min-h-48 items-center justify-center rounded-panel border border-border bg-surface p-8 shadow-card">
              <Brand />
            </div>
            <div className="flex min-h-48 items-center justify-center rounded-panel bg-primary p-8 shadow-card">
              <div className="rounded-full bg-white p-4">
                <BrandMark className="h-24 w-24" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-background-muted py-[var(--section-space-sm)]">
        <Container>
          <SectionHeading
            eyebrow="Tokens"
            title="Paleta cromática"
            description="Azul para confianza y profesionalismo; verde grisáceo para calma, cercanía y equilibrio."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {colors.map(([name, variable, hex]) => (
              <div
                key={variable}
                className="overflow-hidden rounded-card border border-border bg-surface shadow-subtle"
              >
                <div
                  className="h-28"
                  style={{ backgroundColor: `var(${variable})` }}
                />
                <div className="p-4">
                  <p className="font-bold text-text">{name}</p>
                  <p className="mt-1 font-mono text-xs text-text-muted">{hex}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-[var(--section-space-sm)]">
        <Container>
          <SectionHeading eyebrow="Tipografía" title="Jerarquía de textos" />
          <div className="mt-10 space-y-9 rounded-panel border border-border bg-surface p-6 shadow-card sm:p-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">
                Display
              </span>
              <p className="mt-2 font-display text-display font-extrabold text-primary">
                Terapia Online
              </p>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">
                Título
              </span>
              <p className="mt-2 font-display text-title font-extrabold text-primary">
                Desde donde estés
              </p>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">
                Encabezado
              </span>
              <p className="mt-2 font-display text-heading font-bold text-text">
                Un espacio seguro y profesional
              </p>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">
                Texto
              </span>
              <p className="mt-2 max-w-2xl text-lead text-text-muted">
                Te acompaño a comprender lo que sientes y construir el bienestar
                que deseas.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-background-muted py-[var(--section-space-sm)]">
        <Container>
          <SectionHeading eyebrow="Acciones" title="Botones" />
          <div className="mt-10 flex flex-wrap items-center gap-4 rounded-panel border border-border bg-surface p-6 shadow-card">
            <Button>Botón primario</Button>
            <Button variant="secondary">Botón secundario</Button>
            <Button variant="outline">Botón contorno</Button>
            <Button variant="ghost">Botón sutil</Button>
            <ButtonLink
              href={whatsappUrl}
              external
              icon={<WhatsAppIcon className="h-5 w-5" />}
            >
              WhatsApp
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="py-[var(--section-space-sm)]">
        <Container>
          <SectionHeading eyebrow="Componentes" title="Tarjetas de beneficios" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {features.map(({ title, description, Icon }) => (
              <FeatureCard
                key={title}
                title={title}
                description={description}
                icon={<Icon className="h-9 w-9" />}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-background-muted py-[var(--section-space-sm)]">
        <Container>
          <SectionHeading
            eyebrow="Recursos"
            title="Iconografía y patrón decorativo"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_22rem]">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {icons.map(([name, Icon]) => (
                <div
                  key={name}
                  className="flex items-center gap-4 rounded-card border border-border bg-surface p-5 shadow-subtle"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-secondary-soft text-secondary-strong">
                    <Icon className="h-7 w-7" />
                  </span>
                  <span className="font-bold text-text">{name}</span>
                </div>
              ))}
            </div>
            <div className="relative flex min-h-96 items-center justify-center overflow-hidden rounded-panel border border-border bg-surface shadow-card">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-brand-secondary-soft),transparent_68%)]" />
              <GeometricPattern className="relative h-80 w-auto" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
