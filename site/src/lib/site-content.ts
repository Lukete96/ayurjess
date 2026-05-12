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

export const aboutContent = {
  hero: {
    eyebrow: "Sobre",
    title: "Ayurveda em uma linguagem mais proxima, sensivel e vivida.",
    body:
      "A Ayurjess nasce do desejo de tornar o cuidado mais acessivel, mais encarnado no cotidiano e mais conectado com a escuta do corpo.",
    videoSrc: "/media/hero-plants.mp4",
    posterSrc: "/media/hero-poster.svg",
  },
  story: {
    eyebrow: "Jessica",
    title: "Uma presenca que une acolhimento, estudo e experiencia.",
    body:
      "Jessica conduz esse espaco com uma abordagem que valoriza o toque, a atencao e o tempo certo das coisas. O Ayurveda entra como inspiracao para um cuidado mais consciente, aplicavel e humano.",
    imageSrc: "/media/editorial-plants-2.svg",
    imageAlt: "Composicao botanica em tons suaves e acolhedores",
  },
} as const;

export const servicesContent = {
  hero: {
    eyebrow: "Massoterapia",
    title: "Uma experiencia de toque para aliviar, desacelerar e reorganizar o corpo.",
    body:
      "Nesta primeira fase do site, a massagem e o foco central da Ayurjess: uma experiencia pensada para cuidado, presenca e reconexao.",
    videoSrc: "/media/hero-plants.mp4",
    posterSrc: "/media/hero-poster.svg",
  },
  benefits: {
    title: "O atendimento pode apoiar voce em diferentes momentos.",
    items: [
      {
        title: "Descanso",
        body: "Ajuda a criar uma pausa real para o corpo e para a mente.",
      },
      {
        title: "Reconexao",
        body: "Favorece percepcao corporal, respiracao e presenca.",
      },
      {
        title: "Cuidado",
        body: "Oferece uma experiencia mais acolhedora e personalizada.",
      },
    ],
  },
  closing: {
    title: "Se voce quer entender como funciona, o melhor caminho e conversar.",
    body:
      "O WhatsApp funciona como um primeiro contato simples para tirar duvidas, alinhar expectativa e agendar.",
  },
} as const;

export const contactPageContent = {
  hero: {
    eyebrow: "Contato",
    title: "Vamos conversar com calma.",
    body:
      "Se quiser saber mais sobre a massagem, disponibilidade ou proposta da Ayurjess, o WhatsApp e o canal principal desta fase.",
    videoSrc: "/media/hero-plants.mp4",
    posterSrc: "/media/hero-poster.svg",
  },
  intro: {
    eyebrow: "WhatsApp",
    title: "Um contato simples, direto e acolhedor.",
    body:
      "A ideia aqui nao e complicar. E abrir uma conversa para entender o que voce busca e apresentar a experiencia com mais clareza.",
    imageSrc: "/media/contact-plants.svg",
    imageAlt: "Ilustracao botanica em tons naturais",
  },
} as const;
