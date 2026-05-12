import { render, screen } from "@testing-library/react";

import { GsapReveal } from "./gsap-reveal";

describe("GsapReveal", () => {
  it("renders children immediately in tests", () => {
    render(
      <GsapReveal>
        <span>Visible now</span>
      </GsapReveal>,
    );

    expect(screen.getByText("Visible now")).toBeVisible();
  });
});
