export const navigationLinks = [
  { href: "/", label: "Inicio" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Servicos" },
  { href: "/contato", label: "Contato" },
] as const;

export const contactConfig = {
  whatsappHref:
    "https://wa.me/5500000000000?text=Oi%2C%20quero%20saber%20mais%20sobre%20a%20massagem.",
  whatsappLabel: "Agendar pelo WhatsApp",
  instagramHref: "https://instagram.com/ayurjess",
  instagramLabel: "@ayurjess",
} as const;

export const homeContent = {
  hero: {
    eyebrow: "Ayurjess",
    title: "Cuidado com presenca, toque e ritmo natural.",
    body:
      "Uma experiencia de bem-estar inspirada pelo Ayurveda, pela escuta do corpo e por uma rotina de autocuidado mais consciente.",
    videoSrc: "/media/hero-plants.mp4",
    posterSrc: "/media/hero-poster.svg",
  },
  intro: {
    eyebrow: "Jessica",
    title: "Um espaco para desacelerar e voltar ao corpo.",
    body:
      "Jessica conduz a Ayurjess como um encontro entre toque, presenca e cuidado. A proposta e acolher o ritmo de cada pessoa com uma experiencia mais sensivel, organica e atenta ao bem-estar real.",
    imageSrc: "/media/editorial-plants.svg",
    imageAlt: "Composicao botanica em tons naturais",
  },
  pillars: {
    title: "Ayurveda, massoterapia e rotina consciente em uma mesma presenca.",
    items: [
      {
        title: "Escuta",
        body: "Cada atendimento parte do corpo real, do momento presente e da necessidade percebida com calma.",
      },
      {
        title: "Ritmo",
        body: "A proposta do autocuidado aqui nao e pressa, e sim constancia, respiracao e reconexao.",
      },
      {
        title: "Presenca",
        body: "A massagem entra como experiencia principal, mas sempre conectada a uma visao mais ampla de bem-estar.",
      },
    ],
  },
  closing: {
    title: "Se fizer sentido para voce, a conversa pode comecar por aqui.",
    body:
      "O primeiro passo nao precisa ser complicado. Basta chamar no WhatsApp para entender melhor a experiencia e tirar duvidas.",
  },
} as const;
