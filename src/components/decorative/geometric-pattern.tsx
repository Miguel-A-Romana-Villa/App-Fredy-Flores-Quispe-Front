import type { SVGProps } from "react";

type GeometricPatternProps = SVGProps<SVGSVGElement> & {
  orientation?: "vertical" | "horizontal";
};

const shapes = [
  { type: "square", x: 8, y: 8, tone: "primary" },
  { type: "circle", x: 60, y: 8, tone: "secondary" },
  { type: "square", x: 112, y: 8, tone: "secondary" },
  { type: "square", x: 8, y: 60, tone: "primary" },
  { type: "square", x: 60, y: 60, tone: "secondary" },
  { type: "circle", x: 112, y: 60, tone: "primary" },
  { type: "circle", x: 8, y: 112, tone: "primary" },
  { type: "square", x: 60, y: 112, tone: "secondary" },
  { type: "square", x: 112, y: 112, tone: "secondary" },
  { type: "square", x: 8, y: 164, tone: "primary" },
  { type: "circle", x: 60, y: 164, tone: "secondary" },
  { type: "square", x: 112, y: 164, tone: "secondary" },
  { type: "circle", x: 8, y: 216, tone: "primary" },
  { type: "square", x: 60, y: 216, tone: "primary" },
  { type: "square", x: 112, y: 216, tone: "secondary" },
  { type: "square", x: 8, y: 268, tone: "primary" },
  { type: "circle", x: 60, y: 268, tone: "primary" },
  { type: "square", x: 112, y: 268, tone: "secondary" },
] as const;

export function GeometricPattern({
  orientation = "vertical",
  ...props
}: GeometricPatternProps) {
  const horizontal = orientation === "horizontal";

  return (
    <svg
      viewBox={horizontal ? "0 0 304 148" : "0 0 148 304"}
      aria-hidden="true"
      {...props}
    >
      <g transform={horizontal ? "translate(304 0) rotate(90)" : undefined}>
        {shapes.map((shape, index) => {
          const fill =
            shape.tone === "primary"
              ? "var(--color-brand-primary)"
              : "var(--color-brand-secondary)";

          return shape.type === "circle" ? (
            <circle
              key={index}
              cx={shape.x + 14}
              cy={shape.y + 14}
              r="14"
              fill={fill}
              opacity="0.44"
            />
          ) : (
            <rect
              key={index}
              x={shape.x}
              y={shape.y}
              width="28"
              height="28"
              rx="1"
              fill={fill}
              opacity="0.34"
            />
          );
        })}
      </g>
    </svg>
  );
}
