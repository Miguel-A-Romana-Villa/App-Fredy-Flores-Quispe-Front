type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "mx-auto items-center text-center" : "items-start";

  return (
    <div className={`flex max-w-3xl flex-col ${alignment}`}>
      {eyebrow ? (
        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-secondary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-display text-title font-extrabold text-primary">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-lead text-text-muted">{description}</p>
      ) : null}
    </div>
  );
}
