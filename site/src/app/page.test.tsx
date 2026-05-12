import { render, screen, within } from "@testing-library/react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { homeContent } from "@/lib/site-content";
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

  it("uses calm hover treatments for navigation and footer links", () => {
    render(
      <>
        <SiteHeader />
        <SiteFooter />
      </>,
    );

    const headerNav = screen.getByRole("navigation", { name: /principal/i });
    const footer = screen.getByRole("contentinfo");

    expect(within(headerNav).getByRole("link", { name: /inicio/i })).toHaveClass(
      "group",
      "transition-colors",
    );
    expect(within(headerNav).getByRole("link", { name: /sobre/i })).toHaveClass(
      "hover:text-[var(--color-forest)]",
    );
    expect(within(footer).getByRole("link", { name: /agendar pelo whatsapp/i })).toHaveClass(
      "hover:text-white",
    );
  });

  it("renders the approved editorial hero title", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", {
        name: /cuidado com presenca, toque e ritmo natural/i,
      }),
    ).toBeInTheDocument();
  });

  it("keeps the hero eyebrow and closing invitation copy on the page", () => {
    render(<HomePage />);

    expect(screen.getByText(homeContent.hero.eyebrow)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: homeContent.closing.title }),
    ).toBeInTheDocument();
  });
});
