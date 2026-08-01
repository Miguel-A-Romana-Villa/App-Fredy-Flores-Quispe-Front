import { GeometricPattern } from "@/components/decorative/geometric-pattern";
import {
  PlayIcon,
  WhatsAppIcon,
} from "@/components/icons/system-icons";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { whatsappUrl } from "@/config/site";
import { homeContent } from "@/data/home";

import { PortraitPlaceholder } from "./portrait-placeholder";
import styles from "./home-hero.module.css";

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-background pb-28 pt-10 sm:pt-14 lg:pb-36 lg:pt-16">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_75%_45%,var(--color-brand-secondary-soft),transparent_31%)] opacity-90" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-64 bg-gradient-to-t from-background-muted to-transparent" />

      <GeometricPattern className="absolute right-3 top-9 -z-10 hidden h-[19rem] w-auto opacity-85 xl:block" />

      <Container className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
        <div className="relative z-10 max-w-2xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-secondary">
            {homeContent.hero.eyebrow}
          </p>
          <h1 className="mt-5 font-display text-display font-extrabold text-primary">
            {homeContent.hero.title}
            <span className="block text-secondary">
              {homeContent.hero.titleAccent}
            </span>
          </h1>
          <span className="mt-6 block h-1 w-16 rounded-full bg-secondary" />
          <p className="mt-5 font-display text-lead font-semibold text-text-muted">
            {homeContent.hero.lead}
          </p>
          <p className="mt-5 max-w-[34rem] text-lg leading-8 text-text">
            {homeContent.hero.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink
              href={whatsappUrl}
              external
              size="lg"
              icon={
                <span className="grid h-7 w-7 place-items-center rounded-full bg-whatsapp text-white">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
              }
            >
              Agenda tu cita por WhatsApp
            </ButtonLink>
            <ButtonLink
              href="/sobre-mi"
              variant="ghost"
              size="lg"
              icon={
                <span className="grid h-11 w-11 place-items-center rounded-full border-2 border-secondary/40 text-primary">
                  <PlayIcon className="h-5 w-5" />
                </span>
              }
            >
              Conoce más sobre mí
            </ButtonLink>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[42rem] lg:mr-0">
          <div className="absolute left-[7%] top-[3%] -z-10 h-[88%] w-[88%] rounded-[44%_56%_56%_44%/55%_43%_57%_45%] bg-secondary/20" />
          <div className="relative mx-auto aspect-square w-[min(88vw,34rem)] rounded-full bg-gradient-to-br from-primary via-primary to-[#486a9d] p-3 shadow-elevated lg:mr-[8%]">
            <div className="h-full rounded-full border-[10px] border-[#d9d8be] bg-white p-1.5">
              <PortraitPlaceholder />
            </div>
          </div>

          <aside
            className={`${styles.quoteCard} rounded-panel border border-white/80 bg-white/95 px-6 pb-5 pt-7 shadow-elevated backdrop-blur`}
          >
            <span
              aria-hidden="true"
              className="font-serif text-6xl leading-5 text-primary"
            >
              “
            </span>
            <p className="mt-3 text-[1.05rem] font-semibold leading-6 text-primary">
              {homeContent.hero.quote}
            </p>
            <span
              aria-hidden="true"
              className="mt-3 block text-center text-xl text-primary"
            >
              ♥
            </span>
          </aside>
        </div>
      </Container>
    </section>
  );
}
