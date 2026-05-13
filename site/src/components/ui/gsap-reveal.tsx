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

function isTestEnvironment() {
  return process.env.NODE_ENV === "test";
}

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function revealElement(
  element: HTMLDivElement,
  y: number,
  delay: number,
) {
  return gsap.fromTo(
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
}

export function GsapReveal({
  children,
  className,
  delay = 0,
  y = motionDistances.revealY,
}: GsapRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (isTestEnvironment()) {
      return;
    }

    const element = elementRef.current;

    if (!element) {
      return;
    }

    if (prefersReducedMotion()) {
      gsap.set(element, { clearProps: "all" });
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      const animation = revealElement(element, y, delay);

      return () => {
        animation.kill();
      };
    }

    let animation: gsap.core.Tween | null = null;

    gsap.set(element, { autoAlpha: 0, y });

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (!entry?.isIntersecting || animation) {
          return;
        }

        animation = revealElement(element, y, delay);
        observer.unobserve(element);
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -12% 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      animation?.kill();
    };
  }, [delay, y]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
