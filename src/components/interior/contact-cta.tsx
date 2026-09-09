import { WhatsAppIcon } from "@/components/icons/system-icons";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { whatsappUrl } from "@/config/site";

type ContactCtaProps = {
  title?: string;
  description?: string;
};

export function ContactCta({
  title = "¡Da el primer paso hacia tu bienestar!",
  description = "Si tienes dudas antes de comenzar, escríbeme por WhatsApp y coordinaremos la opción más adecuada para ti.",
}: ContactCtaProps) {
  return (
    <section className="bg-background py-[var(--section-space-compact)]">
      <Container>
        <div className="relative overflow-hidden rounded-panel bg-gradient-to-br from-[#174781] to-primary-strong px-6 py-8 text-center text-white shadow-elevated sm:px-10 sm:py-9">
          <div className="absolute -left-16 -top-20 h-56 w-56 rounded-full border-[34px] border-white/5" />
          <div className="absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-secondary/20" />
          <div className="relative mx-auto max-w-3xl">
            <h2 className="font-display text-title font-extrabold">{title}</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/80">
              {description}
            </p>
            <ButtonLink
              href={whatsappUrl}
              external
              size="lg"
              variant="inverted"
              className="mt-8"
              icon={<WhatsAppIcon className="h-6 w-6 text-whatsapp" />}
            >
              Conversar por WhatsApp
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
