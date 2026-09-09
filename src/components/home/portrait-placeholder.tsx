import Image from "next/image";

export function PortraitPlaceholder() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-full bg-secondary-soft">
      <Image
        src="/images/foto-home.png"
        alt="Fred Flores en su consultorio"
        fill
        priority
        sizes="(min-width: 1024px) 34rem, 88vw"
        className="object-cover object-center"
      />
    </div>
  );
}
