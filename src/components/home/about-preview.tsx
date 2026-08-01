import { BrandMark } from "@/components/brand/brand-mark";
import { LeafBranch } from "@/components/decorative/leaf-branch";
import { CheckIcon, UserIcon } from "@/components/icons/system-icons";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { homeContent } from "@/data/home";

export function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-background py-[var(--section-space)]">
      <LeafBranch className="absolute -bottom-14 -left-5 hidden h-[24rem] w-auto opacity-75 xl:block" />

      <Container className="relative grid gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="lg:pl-8">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-secondary">
            {homeContent.about.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-heading font-extrabold text-primary">
            {homeContent.about.title}
          </h2>
          <span className="mt-4 block h-0.5 w-12 rounded-full bg-secondary" />

          <div className="mt-6 space-y-4">
            {homeContent.about.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-[39rem] leading-7 text-text-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <ButtonLink
            href="/sobre-mi"
            variant="secondary"
            className="mt-7"
            icon={<UserIcon className="h-5 w-5" />}
          >
            Conoce más sobre mi trayectoria
          </ButtonLink>
        </div>

        <article className="relative overflow-hidden rounded-panel border border-white bg-white/95 p-7 shadow-elevated sm:p-10">
          <BrandMark className="absolute -bottom-10 -right-6 h-60 w-60 opacity-[0.07]" />
          <div className="relative">
            <h2 className="font-display text-heading font-extrabold text-primary">
              Formación y experiencia
            </h2>
            <span className="mt-4 block h-0.5 w-12 rounded-full bg-secondary" />

            <ul className="mt-7 space-y-4">
              {homeContent.experience.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 leading-6 text-text-muted"
                >
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </Container>
    </section>
  );
}
