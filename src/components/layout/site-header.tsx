import Link from "next/link";

import { Brand } from "@/components/brand/brand";
import { CalendarIcon, MenuIcon } from "@/components/icons/system-icons";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig, whatsappUrl } from "@/config/site";

const navLinkClasses =
  "rounded-sm py-2 text-sm font-bold text-text-muted transition-colors hover:text-primary";

export function SiteHeader() {
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
          <ButtonLink
            href={whatsappUrl}
            external
            icon={<CalendarIcon className="h-5 w-5" />}
          >
            Agenda tu cita
          </ButtonLink>
        </div>

        <details className="group relative lg:hidden">
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
                      className="block rounded-control px-4 py-3 font-bold text-text-muted hover:bg-primary-soft hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <ButtonLink
              href={whatsappUrl}
              external
              className="mt-3 w-full"
              icon={<CalendarIcon className="h-5 w-5" />}
            >
              Agenda tu cita
            </ButtonLink>
          </div>
        </details>
      </Container>
    </header>
  );
}
