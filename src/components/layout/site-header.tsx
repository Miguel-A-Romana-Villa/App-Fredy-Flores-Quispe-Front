"use client";

import Link from "next/link";
import { useRef } from "react";

import { Brand } from "@/components/brand/brand";
import {
  CalendarIcon,
  MenuIcon,
  WhatsAppIcon,
} from "@/components/icons/system-icons";
import { Button, ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig, whatsappUrl } from "@/config/site";

const navLinkClasses =
  "rounded-sm py-2 text-sm font-bold text-text-muted transition-colors hover:text-primary";

export function SiteHeader() {
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);
  const appointmentDialogRef = useRef<HTMLDialogElement>(null);

  const closeMobileMenu = () => {
    mobileMenuRef.current?.removeAttribute("open");
  };

  const openAppointmentDialog = () => {
    closeMobileMenu();
    appointmentDialogRef.current?.showModal();
  };

  const closeAppointmentDialog = () => {
    appointmentDialogRef.current?.close();
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-surface/95 backdrop-blur-xl">
      <Container className="flex min-h-[var(--header-height)] items-center justify-between gap-6">
        <Brand />

        <div className="hidden items-center gap-7 lg:flex">
          <nav aria-label="Navegación principal">
            <ul className="flex items-center gap-6">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={navLinkClasses}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Button
            onClick={openAppointmentDialog}
            aria-haspopup="dialog"
          >
            <CalendarIcon className="h-5 w-5" />
            Agendar tu cita
          </Button>
        </div>

        <details ref={mobileMenuRef} className="group relative lg:hidden">
          <summary className="grid h-11 w-11 cursor-pointer list-none place-items-center rounded-control border border-border bg-surface text-primary shadow-subtle [&::-webkit-details-marker]:hidden">
            <span className="sr-only">Abrir menú de navegación</span>
            <MenuIcon className="h-6 w-6" />
          </summary>

          <div className="absolute right-0 top-14 w-[min(20rem,calc(100vw-2.5rem))] rounded-panel border border-border bg-surface p-4 shadow-elevated">
            <nav aria-label="Navegación móvil">
              <ul className="grid gap-1">
                {siteConfig.navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="block rounded-control px-4 py-3 font-bold text-text-muted hover:bg-primary-soft hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Button
              onClick={openAppointmentDialog}
              aria-haspopup="dialog"
              className="mt-3 w-full"
            >
              <CalendarIcon className="h-5 w-5" />
              Agendar tu cita
            </Button>
          </div>
        </details>
      </Container>

      <dialog
        ref={appointmentDialogRef}
        aria-labelledby="appointment-dialog-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeAppointmentDialog();
          }
        }}
        className="m-auto w-[min(92vw,31rem)] rounded-panel border border-border bg-surface p-0 text-text shadow-elevated backdrop:bg-primary-strong/55 backdrop:backdrop-blur-sm"
      >
        <div className="relative p-6 sm:p-8">
          <button
            type="button"
            onClick={closeAppointmentDialog}
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full text-2xl leading-none text-text-muted transition hover:bg-background-muted hover:text-primary"
            aria-label="Cerrar ventana"
          >
            ×
          </button>

          <span className="grid h-14 w-14 place-items-center rounded-full bg-secondary-soft text-secondary-strong">
            <CalendarIcon className="h-7 w-7" />
          </span>
          <h2
            id="appointment-dialog-title"
            className="mt-5 pr-10 font-display text-2xl font-extrabold text-primary"
          >
            Agenda tu cita
          </h2>
          <p className="mt-3 leading-7 text-text-muted">
            Para reservar una sesión o consultar disponibilidad, escríbeme por
            WhatsApp. Coordinaremos directamente la fecha y el horario más
            adecuados para ti.
          </p>
          <p className="mt-3 rounded-card bg-background-muted p-4 text-sm leading-6 text-text-muted">
            La atención es completamente online mediante Google Meet.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Button variant="outline" onClick={closeAppointmentDialog}>
              Ahora no
            </Button>
            <ButtonLink
              href={whatsappUrl}
              external
              icon={<WhatsAppIcon className="h-5 w-5" />}
            >
              Escribir por WhatsApp
            </ButtonLink>
          </div>
        </div>
      </dialog>
    </header>
  );
}
