"use client";

import { useState } from "react";

type Service = {
  title: string;
  description: string;
};

type ServicesAccordionProps = {
  services: readonly Service[];
};

export function ServicesAccordion({ services }: ServicesAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto mt-6 grid max-w-5xl items-start gap-3 md:grid-cols-2">
      {services.map((service, index) => {
        const isOpen = openIndex === index;
        const panelId = `service-panel-${index}`;
        const buttonId = `service-button-${index}`;

        return (
          <article
            key={service.title}
            className="card-motion overflow-hidden rounded-card border border-border bg-surface shadow-card"
          >
            <h2>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 p-4 text-left font-display text-lg font-extrabold leading-6 text-primary transition-colors hover:bg-primary-soft/60 sm:px-5"
              >
                <span>{service.title}</span>
                <span
                  aria-hidden="true"
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-secondary-soft text-xl text-secondary-strong transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
            </h2>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <p className="border-t border-border px-4 py-4 leading-7 text-text-muted sm:px-5">
                  {service.description}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
