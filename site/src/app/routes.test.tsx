import { render, screen } from "@testing-library/react";
import ContatoPage from "./contato/page";
import ServicosPage from "./servicos/page";
import SobrePage from "./sobre/page";

describe("Inner routes", () => {
  it("renders the Sobre page heading", () => {
    render(<SobrePage />);

    expect(
      screen.getByRole("heading", {
        name: /ayurveda em uma linguagem mais proxima/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders the Servicos page WhatsApp CTA", () => {
    render(<ServicosPage />);

    expect(
      screen.getByRole("link", { name: /agendar pelo whatsapp/i }),
    ).toBeInTheDocument();
  });

  it("renders the Contato page invitation", () => {
    render(<ContatoPage />);

    expect(
      screen.getByRole("heading", { name: /vamos conversar com calma/i }),
    ).toBeInTheDocument();
  });
});
