"use client";
import { PropsWithChildren } from "react";

type TooltipProps = PropsWithChildren<{
  label: string;
  position?: "top" | "bottom" | "left" | "right";
  className?: string;
}>;

export function Tooltip({
  label,
  position = "top",
  className,
  children,
}: TooltipProps) {
  const posClasses =
    position === "top"
      ? "-top-8 left-1/2 -translate-x-1/2"
      : position === "bottom"
      ? "-bottom-8 left-1/2 -translate-x-1/2"
      : position === "left"
      ? "top-1/2 -translate-y-1/2 -left-2"
      : "top-1/2 -translate-y-1/2 -right-2";

  return (
    <div className={`relative inline-flex group ${className ?? ""}`}>
      {children}
      <span
        role="tooltip"
        className={`pointer-events-none absolute ${posClasses} rounded bg-black/80 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap`}
      >
        {label}
      </span>
    </div>
  );
}
