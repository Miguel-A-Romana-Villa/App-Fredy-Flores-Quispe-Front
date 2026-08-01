import type { SVGProps } from "react";

export function BrandMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label="Símbolo de Ps. Fred Flores"
      {...props}
    >
      <path
        d="M29.5 7.5C17.2 5.1 7 13.2 7 25.1c0 12.7 9.9 22.3 24.7 22.3 2.1 0 4.2-.2 6.1-.7l9 4.2 1-9c6.3-4 10.2-10.4 10.2-18 0-11.8-9.6-19.8-21-17.1"
        fill="none"
        stroke="var(--color-brand-primary)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3.2"
      />
      <path
        d="M32 35.1S18.8 26.4 18.8 18.6c0-6.2 7.8-9.2 13.2-2.4 5.4-6.8 13.2-3.8 13.2 2.4 0 7.8-13.2 16.5-13.2 16.5Z"
        fill="none"
        stroke="var(--color-brand-secondary)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3.2"
      />
    </svg>
  );
}
