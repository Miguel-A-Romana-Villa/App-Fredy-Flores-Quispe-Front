import { UserIcon } from "@/components/icons/system-icons";

export function PortraitPlaceholder() {
  return (
    <div className="relative grid h-full w-full place-items-center overflow-hidden rounded-full bg-[radial-gradient(circle_at_50%_34%,#ffffff_0%,var(--color-brand-secondary-soft)_48%,#c6d7d4_100%)]">
      <div className="absolute left-[12%] top-[18%] h-32 w-16 rounded-full bg-white/35 blur-2xl" />
      <div className="flex -translate-y-2 flex-col items-center text-secondary-strong">
        <span className="grid h-36 w-36 place-items-center rounded-full border border-white/70 bg-white/50 shadow-subtle sm:h-44 sm:w-44">
          <UserIcon className="h-20 w-20 sm:h-24 sm:w-24" />
        </span>
        <span className="mt-4 rounded-pill bg-white/75 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-primary shadow-subtle backdrop-blur">
          Fotografía de Freddy
        </span>
      </div>
    </div>
  );
}
