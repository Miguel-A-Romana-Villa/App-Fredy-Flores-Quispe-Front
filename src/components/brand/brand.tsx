import Link from "next/link";

import { BrandMark } from "@/components/brand/brand-mark";
import { siteConfig } from "@/config/site";

type BrandProps = {
  compact?: boolean;
};

export function Brand({ compact = false }: BrandProps) {
  return (
    <Link
      href="/"
      aria-label="Ir al inicio"
      className="inline-flex shrink-0 items-center gap-3 rounded-sm"
    >
      <BrandMark className={compact ? "h-11 w-11" : "h-14 w-14"} />
      <span className="leading-none">
        <strong
          className={`block font-display font-extrabold tracking-[-0.03em] text-primary ${
            compact ? "text-lg" : "text-xl sm:text-2xl"
          }`}
        >
          {siteConfig.name}
        </strong>
        <span className="mt-2 block text-[0.62rem] font-extrabold uppercase tracking-[0.22em] text-secondary sm:text-xs">
          {siteConfig.role}
        </span>
      </span>
    </Link>
  );
}
