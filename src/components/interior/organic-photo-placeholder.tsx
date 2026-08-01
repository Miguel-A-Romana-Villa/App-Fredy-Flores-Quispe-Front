type OrganicPhotoPlaceholderProps = {
  className?: string;
  label?: string;
};

export function OrganicPhotoPlaceholder({
  className = "",
  label = "+ Foto aquí",
}: OrganicPhotoPlaceholderProps) {
  return (
    <div
      className={`relative min-h-[25rem] overflow-hidden ${className}`.trim()}
      aria-label="Espacio planificado para una fotografía"
    >
      <div className="absolute inset-[5%_3%_0] bg-[radial-gradient(ellipse_at_55%_52%,rgba(114,152,149,0.22)_0%,rgba(220,232,229,0.52)_38%,transparent_72%)]" />
      <div className="absolute bottom-0 left-[12%] right-[5%] top-[8%] rounded-[45%_55%_20%_20%/35%_42%_18%_22%] bg-gradient-to-t from-secondary-soft/75 via-secondary-soft/25 to-transparent blur-[1px]" />
      <span className="absolute inset-0 z-10 grid place-items-center font-display text-xl font-extrabold text-secondary-strong/75">
        {label}
      </span>
    </div>
  );
}
