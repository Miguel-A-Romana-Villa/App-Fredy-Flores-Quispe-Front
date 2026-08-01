"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useSyncExternalStore } from "react";

type LottieAnimationProps = {
  src: string;
  label: string;
  className?: string;
  compact?: boolean;
};

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(callback: () => void) {
  const mediaQuery = window.matchMedia(reducedMotionQuery);
  mediaQuery.addEventListener("change", callback);

  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia(reducedMotionQuery).matches;
}

function getReducedMotionServerSnapshot() {
  return true;
}

export function LottieAnimation({
  src,
  label,
  className = "",
  compact = false,
}: LottieAnimationProps) {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  return (
    <div
      role="img"
      aria-label={label}
      className={`${compact ? "h-[19rem] sm:h-[21rem]" : "h-[25rem]"} w-full ${className}`.trim()}
    >
      <DotLottieReact
        src={src}
        autoplay={!prefersReducedMotion}
        loop={!prefersReducedMotion}
        backgroundColor="#00000000"
        layout={{ fit: "contain", align: [0.5, 0.5] }}
        className="h-full w-full"
        aria-hidden="true"
      />
    </div>
  );
}
