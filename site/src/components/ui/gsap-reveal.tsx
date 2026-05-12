"use client";

import { gsap } from "gsap";
import {
  type PropsWithChildren,
  useLayoutEffect,
  useRef,
} from "react";

import {
  motionDistances,
  motionDurations,
  motionEases,
} from "@/lib/motion/motion-tokens";

type GsapRevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  y?: number;
}>;

const TEST_ENVIRONMENT = process.env.NODE_ENV === "test";

export function GsapReveal({
  children,
  className,
  delay = 0,
  y = motionDistances.revealY,
}: GsapRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (TEST_ENVIRONMENT) {
      return;
    }

    const element = elementRef.current;

    if (!element) {
      return;
    }

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      gsap.set(element, { clearProps: "all" });
      return;
    }

    const animation = gsap.fromTo(
      element,
      { autoAlpha: 0, y },
      {
        autoAlpha: 1,
        delay,
        duration: motionDurations.reveal,
        ease: motionEases.reveal,
        y: 0,
      },
    );

    return () => {
      animation.kill();
    };
  }, [delay, y]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
