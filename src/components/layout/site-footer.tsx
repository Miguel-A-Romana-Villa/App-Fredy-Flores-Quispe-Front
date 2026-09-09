import Link from "next/link";

import { Brand } from "@/components/brand/brand";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

const studioWhatsappUrl = `https://wa.me/51957943201?text=${encodeURIComponent(
  "Hola, vi su trabajo en la página de Fred Flores y me gustaría conocer más sobre sus servicios.",
)}`;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="grid gap-7 py-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <Brand compact />
          <p className="mt-4 max-w-md text-sm leading-6 text-text-muted">
            Atención psicológica online para pacientes de habla hispana.
          </p>
        </div>

        <nav aria-label="Navegación secundaria">
          <ul className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-text-muted">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-border pt-5 text-sm text-text-muted md:col-span-2 md:flex md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <ButtonLink
            href={studioWhatsappUrl}
            external
            variant="outline"
            size="sm"
            className="mt-3 md:mt-0"
          >
            Diseño y desarrollo web por Commalabs SRL
          </ButtonLink>
        </div>
      </Container>
    </footer>
  );
}
