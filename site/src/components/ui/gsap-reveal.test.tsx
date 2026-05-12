import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const fromToMock = vi.fn();
const setMock = vi.fn();

vi.mock("gsap", () => ({
  gsap: {
    fromTo: fromToMock,
    set: setMock,
  },
}));

describe("GsapReveal", () => {
  const originalNodeEnv = process.env.NODE_ENV;
  const originalMatchMedia = window.matchMedia;

  beforeEach(() => {
    fromToMock.mockReset();
    setMock.mockReset();
    vi.resetModules();
  });

  afterEach(() => {
    process.env.NODE_ENV = originalNodeEnv;
    window.matchMedia = originalMatchMedia;
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

    expect(fromToMock).toHaveBeenCalledTimes(1);
    expect(fromToMock.mock.calls[0]?.[1]).toEqual({ autoAlpha: 0, y: 32 });
    expect(fromToMock.mock.calls[0]?.[2]).toEqual({
      autoAlpha: 1,
      delay: 0.15,
      duration: 0.6,
      ease: "power2.out",
      y: 0,
    });

    unmount();

    expect(killMock).toHaveBeenCalledTimes(1);
  });
});
