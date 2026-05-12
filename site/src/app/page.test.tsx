import { render, screen } from "@testing-library/react";
import { SiteHeader } from "@/components/layout/site-header";
import HomePage from "./page";

describe("HomePage", () => {
  it("renders the main WhatsApp CTA", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("link", { name: /agendar pelo whatsapp/i }),
    ).toBeInTheDocument();
  });

  it("renders the main navigation links", () => {
    render(<SiteHeader />);

    expect(screen.getByRole("link", { name: /inicio/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /sobre/i })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /servicos/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /contato/i }),
    ).toBeInTheDocument();
  });
});
