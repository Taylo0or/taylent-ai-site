import { createElement, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Subtle fade-up animation backed by a pure CSS keyframe.
 *
 * Why CSS instead of framer-motion's `whileInView` / `animate`:
 *   • Runs the moment the browser paints the element — no dependency on React
 *     hydration finishing, no IntersectionObserver, no flicker on slow
 *     hydration. This means screenshot tools, SSR previews, and slow devices
 *     all show the content reliably.
 *   • `animation-fill-mode: both` keeps the from-state until the keyframe
 *     starts (prevents a flash of fully-visible content) and locks the
 *     end-state (prevents a flicker after).
 *   • Respects `prefers-reduced-motion` automatically via @media query.
 *
 * Server-component compatible: no `"use client"` directive needed.
 */
export function FadeUp({
  children,
  delay = 0,
  className,
  as = "div",
  style,
  ...rest
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  style?: CSSProperties;
  [key: string]: unknown;
}) {
  return createElement(
    as,
    {
      ...rest,
      className: cn("taylent-fadeup", className),
      style: { ...style, animationDelay: `${delay}s` },
    },
    children,
  );
}
