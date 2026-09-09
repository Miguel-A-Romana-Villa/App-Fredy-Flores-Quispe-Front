import Image from "next/image";

type OrganicPhotoPlaceholderProps = {
  className?: string;
  label?: string;
  src?: string;
  alt?: string;
  uncropped?: boolean;
  spacious?: boolean;
};

export function OrganicPhotoPlaceholder({
  className = "",
  label = "+ Foto aquí",
  src,
  alt = "Fotografía de Fred Flores",
  uncropped = false,
  spacious = false,
}: OrganicPhotoPlaceholderProps) {
  if (src && uncropped) {
    return (
      <div
        className={`relative mx-auto aspect-[3/4] w-full max-w-[28rem] overflow-hidden rounded-panel border-[6px] border-white/80 bg-secondary-soft shadow-elevated ${className}`.trim()}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 34rem, 92vw"
          className="object-cover object-center"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden ${spacious ? "min-h-[30rem] sm:min-h-[34rem]" : "min-h-[25rem]"} ${className}`.trim()}
      aria-label={src ? undefined : "Espacio planificado para una fotografía"}
    >
      <div className="absolute inset-[5%_3%_0] bg-[radial-gradient(ellipse_at_55%_52%,rgba(114,152,149,0.22)_0%,rgba(220,232,229,0.52)_38%,transparent_72%)]" />
      <div className="absolute bottom-0 left-[12%] right-[5%] top-[8%] rounded-[45%_55%_20%_20%/35%_42%_18%_22%] bg-gradient-to-t from-secondary-soft/75 via-secondary-soft/25 to-transparent blur-[1px]" />
      {src ? (
        <div
          className={`absolute left-1/2 z-10 -translate-x-1/2 overflow-hidden rounded-[46%_54%_44%_56%/32%_38%_62%_68%] border-[6px] border-white/80 bg-secondary-soft shadow-elevated ${spacious ? "inset-y-[1%] w-[min(94%,30rem)]" : "inset-y-0 w-[min(78%,22rem)]"}`.trim()}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes={
              spacious
                ? "(min-width: 1024px) 30rem, 94vw"
                : "(min-width: 1024px) 22rem, 78vw"
            }
            className="object-cover object-center"
          />
        </div>
      ) : (
        <span className="absolute inset-0 z-10 grid place-items-center font-display text-xl font-extrabold text-secondary-strong/75">
          {label}
        </span>
      )}
    </div>
  );
}
