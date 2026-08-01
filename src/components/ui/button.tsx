import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "inverted"
  | "outline"
  | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const baseClasses =
  "inline-flex items-center justify-center gap-2.5 rounded-control font-bold transition-[transform,background-color,border-color,color,box-shadow] hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-50";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white shadow-card hover:bg-primary-strong hover:shadow-elevated",
  secondary:
    "bg-secondary text-white shadow-card hover:bg-secondary-strong hover:shadow-elevated",
  inverted:
    "bg-white text-primary shadow-card hover:bg-background-muted hover:shadow-elevated",
  outline:
    "border border-primary/20 bg-surface text-primary hover:border-primary/40 hover:bg-primary-soft",
  ghost: "bg-transparent text-primary hover:bg-primary-soft",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 text-sm",
  md: "min-h-12 px-5 text-sm",
  lg: "min-h-14 px-6 text-base",
};

function buttonClasses(
  variant: ButtonVariant,
  size: ButtonSize,
  className = "",
) {
  return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonClasses(variant, size, className)}
      {...props}
    />
  );
}

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  external?: boolean;
};

export function ButtonLink({
  href,
  children,
  icon,
  variant = "primary",
  size = "md",
  className,
  external = false,
}: ButtonLinkProps) {
  const content = (
    <>
      {icon}
      {children}
    </>
  );
  const classes = buttonClasses(variant, size, className);

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
