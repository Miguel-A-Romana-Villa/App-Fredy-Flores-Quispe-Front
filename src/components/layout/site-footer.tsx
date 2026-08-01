import Link from "next/link";

import { Brand } from "@/components/brand/brand";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="grid gap-8 py-10 md:grid-cols-[1fr_auto] md:items-center">
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
          <p className="mt-2 md:mt-0">
            Sitio informativo · Atención en español
          </p>
        </div>
      </Container>
    </footer>
  );
}
