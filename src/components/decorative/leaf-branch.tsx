import type { SVGProps } from "react";

export function LeafBranch(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 190 330" aria-hidden="true" {...props}>
      <path
        d="M48 326c11-72 29-139 67-218M65 253c-4-51-14-89-35-120M88 190c28-42 51-72 79-99M102 148c-2-45 2-83 13-125"
        fill="none"
        stroke="var(--color-brand-secondary-strong)"
        strokeLinecap="round"
        strokeWidth="3"
      />
      <g fill="var(--color-brand-secondary)" opacity=".86">
        <path d="M28 154C4 132 3 105 4 76c28 14 45 37 38 69-2 8-6 12-14 9Z" />
        <path d="M54 221c-30-17-42-42-49-74 35 8 57 28 59 62 1 9-2 14-10 12Z" />
        <path d="M78 177c-2-31 13-53 37-73 8 32-2 58-27 77-6 5-10 4-10-4Z" />
        <path d="M105 128c-12-31-5-59 13-86 19 29 18 58-3 84-4 6-8 7-10 2Z" />
        <path d="M120 105c17-29 42-42 71-48-8 34-28 55-61 59-8 1-13-3-10-11Z" />
        <path d="M83 205c24-24 51-31 82-29-17 31-42 46-76 39-8-1-11-5-6-10Z" />
      </g>
    </svg>
  );
}
