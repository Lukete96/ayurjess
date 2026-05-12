import { render, screen } from "@testing-library/react";
import HomePage from "./page";

describe("HomePage", () => {
  it("renders the main WhatsApp CTA", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("link", { name: /agendar pelo whatsapp/i }),
    ).toBeInTheDocument();
  });
});
