import type { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

const lineProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function CalendarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <rect {...lineProps} x="3" y="5" width="18" height="16" rx="2" />
      <path {...lineProps} d="M8 3v4M16 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path {...lineProps} d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.7A8.5 8.5 0 1 1 20.5 11.7Z" />
      <path {...lineProps} d="M8 7.3c.2-.4.4-.4.8-.4h.5c.2 0 .4.1.5.4l.8 2c.1.3 0 .5-.2.7l-.7.8c-.2.2-.1.4 0 .6.7 1.2 1.7 2.1 3 2.7.2.1.4.1.6-.1l.9-1.1c.2-.2.4-.3.7-.2l1.9.9c.3.1.5.3.5.5 0 .3-.1 1.4-.7 2-.5.6-1.4.9-2.2.9-1 0-3.7-.7-6.2-2.9-2-1.8-2.9-3.8-2.9-4.9 0-1.1.6-1.7.8-1.9Z" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path {...lineProps} d="M12 3 4.5 6v5.5c0 4.4 3.2 8 7.5 9.5 4.3-1.5 7.5-5.1 7.5-9.5V6L12 3Z" />
      <rect {...lineProps} x="9" y="10" width="6" height="5" rx="1" />
      <path {...lineProps} d="M10.5 10V8.7a1.5 1.5 0 0 1 3 0V10" />
    </svg>
  );
}

export function HeartHandIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path {...lineProps} d="M12 10S7.5 7.2 7.5 4.8c0-2 2.7-3 4.5-.6 1.8-2.4 4.5-1.4 4.5.6C16.5 7.2 12 10 12 10Z" />
      <path {...lineProps} d="m3 15 4-2.2c1-.5 2-.1 2.5.8l.2.4h3.5c1 0 1.8.8 1.8 1.8M3 15l5 5 8.5-3.6c1-.4 1.5-1.6 1-2.5-.4-.7-1.2-1-2-.7L11 15" />
    </svg>
  );
}

export function ClipboardIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <rect {...lineProps} x="5" y="4" width="14" height="17" rx="2" />
      <path {...lineProps} d="M9 4.5V3h6v1.5M8 9h8M8 13h2M12 13h4M8 17h8" />
    </svg>
  );
}

export function MonitorIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <rect {...lineProps} x="3" y="4" width="18" height="13" rx="2" />
      <path {...lineProps} d="M8 21h8M12 17v4M8 11c1.2-1.8 2.5-2.7 4-2.7 1.5 0 2.8.9 4 2.7M10 7.5h.01M14 7.5h.01" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path {...lineProps} d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function PlayIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path fill="currentColor" d="m9 7 8 5-8 5V7Z" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <circle cx="10" cy="10" r="10" fill="currentColor" />
      <path
        d="m6 10 2.5 2.5L14 7"
        fill="none"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function UserIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <circle {...lineProps} cx="12" cy="8" r="4" />
      <path {...lineProps} d="M4.5 21c.8-4.6 3.3-7 7.5-7s6.7 2.4 7.5 7" />
    </svg>
  );
}
