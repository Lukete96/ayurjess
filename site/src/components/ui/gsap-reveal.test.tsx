import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import {
  motionDistances,
  motionDurations,
  motionEases,
} from "@/lib/motion/motion-tokens";

const fromToMock = vi.fn();
const setMock = vi.fn();
const observerInstances: MockIntersectionObserver[] = [];

class MockIntersectionObserver {
  callback: IntersectionObserverCallback;
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
    observerInstances.push(this);
  }

  trigger(target: Element | null = null, isIntersecting = true) {
    this.callback(
      [
        {
          isIntersecting,
          target: target ?? document.createElement("div"),
        } as IntersectionObserverEntry,
      ],
      this as unknown as IntersectionObserver,
    );
  }
}

vi.mock("gsap", () => ({
  gsap: {
    fromTo: fromToMock,
    set: setMock,
  },
}));

describe("GsapReveal", () => {
  const originalNodeEnv = process.env.NODE_ENV;
  const originalMatchMedia = window.matchMedia;
  const originalIntersectionObserver = window.IntersectionObserver;

  beforeEach(() => {
    observerInstances.length = 0;
    window.IntersectionObserver =
      MockIntersectionObserver as unknown as typeof IntersectionObserver;
    fromToMock.mockReset();
    setMock.mockReset();
    vi.resetModules();
  });

  afterEach(() => {
    process.env.NODE_ENV = originalNodeEnv;
    window.matchMedia = originalMatchMedia;
    window.IntersectionObserver = originalIntersectionObserver;
    cleanup();
  });

  it("renders children immediately in tests", async () => {
    process.env.NODE_ENV = "test";

    const { GsapReveal } = await import("./gsap-reveal");

    render(
      <GsapReveal>
        <span>Visible now</span>
      </GsapReveal>,
    );

    expect(screen.getByText("Visible now")).toBeVisible();
    expect(fromToMock).not.toHaveBeenCalled();
    expect(setMock).not.toHaveBeenCalled();
  });

  it("skips the reveal tween when reduced motion is enabled", async () => {
    process.env.NODE_ENV = "development";
    window.matchMedia = vi.fn().mockReturnValue({ matches: true });

    const { GsapReveal } = await import("./gsap-reveal");

    render(
      <GsapReveal>
        <span>Reduced motion</span>
      </GsapReveal>,
    );

    expect(screen.getByText("Reduced motion")).toBeVisible();
    expect(setMock).toHaveBeenCalledTimes(1);
    expect(setMock.mock.calls[0]?.[1]).toEqual({ clearProps: "all" });
    expect(fromToMock).not.toHaveBeenCalled();
  });

  it("kills the gsap animation on cleanup", async () => {
    process.env.NODE_ENV = "development";
    window.matchMedia = vi.fn().mockReturnValue({ matches: false });

    const killMock = vi.fn();
    fromToMock.mockReturnValue({ kill: killMock });

    const { GsapReveal } = await import("./gsap-reveal");

    const { unmount } = render(
      <GsapReveal delay={0.15} y={32}>
        <span>Animate me</span>
      </GsapReveal>,
    );

    observerInstances[0]?.trigger();

    expect(fromToMock).toHaveBeenCalledTimes(1);
    expect(fromToMock.mock.calls[0]?.[1]).toEqual({ autoAlpha: 0, y: 32 });
    expect(fromToMock.mock.calls[0]?.[2]).toEqual({
      autoAlpha: 1,
      delay: 0.15,
      duration: motionDurations.reveal,
      ease: motionEases.reveal,
      y: 0,
    });

    unmount();

    expect(killMock).toHaveBeenCalledTimes(1);
  });

  it("uses the shared reveal tokens by default", async () => {
    process.env.NODE_ENV = "development";
    window.matchMedia = vi.fn().mockReturnValue({ matches: false });

    fromToMock.mockReturnValue({ kill: vi.fn() });

    const { GsapReveal } = await import("./gsap-reveal");

    render(
      <GsapReveal>
        <span>Token defaults</span>
      </GsapReveal>,
    );

    observerInstances[0]?.trigger();

    expect(fromToMock).toHaveBeenCalledTimes(1);
    expect(fromToMock.mock.calls[0]?.[1]).toEqual({
      autoAlpha: 0,
      y: motionDistances.revealY,
    });
    expect(fromToMock.mock.calls[0]?.[2]).toEqual({
      autoAlpha: 1,
      delay: 0,
      duration: motionDurations.reveal,
      ease: motionEases.reveal,
      y: 0,
    });
  });

  it("waits for intersection before running the reveal animation", async () => {
    process.env.NODE_ENV = "development";
    window.matchMedia = vi.fn().mockReturnValue({ matches: false });

    fromToMock.mockReturnValue({ kill: vi.fn() });

    const { GsapReveal } = await import("./gsap-reveal");

    render(
      <GsapReveal>
        <span>Scroll reveal</span>
      </GsapReveal>,
    );

    expect(fromToMock).not.toHaveBeenCalled();

    observerInstances[0]?.trigger();

    expect(fromToMock).toHaveBeenCalledTimes(1);
  });
});
