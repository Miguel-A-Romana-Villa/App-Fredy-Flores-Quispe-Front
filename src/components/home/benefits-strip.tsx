import {
  ClipboardIcon,
  HeartHandIcon,
  MonitorIcon,
  ShieldIcon,
} from "@/components/icons/system-icons";
import { Container } from "@/components/ui/container";
import { homeContent } from "@/data/home";

const benefitIcons = [
  ShieldIcon,
  HeartHandIcon,
  ClipboardIcon,
  MonitorIcon,
] as const;

export function BenefitsStrip() {
  return (
    <section className="relative z-20 -mt-16">
      <Container>
        <div className="grid overflow-hidden rounded-panel border border-white/80 bg-white/95 p-3 shadow-elevated backdrop-blur md:grid-cols-2 lg:grid-cols-4 lg:p-5">
          {homeContent.benefits.map((benefit, index) => {
            const Icon = benefitIcons[index];

            return (
              <article
                key={benefit.title}
                className={`flex gap-4 px-3 py-5 lg:px-5 ${
                  index ? "border-t border-border md:border-t-0 md:odd:border-l lg:border-l" : ""
                } ${index === 2 ? "md:border-l-0 lg:border-l" : ""}`}
              >
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-secondary-soft text-secondary-strong">
                  <Icon className="h-9 w-9" />
                </span>
                <div>
                  <h2 className="font-display text-lg font-extrabold leading-6 text-primary">
                    {benefit.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-text-muted">
                    {benefit.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
