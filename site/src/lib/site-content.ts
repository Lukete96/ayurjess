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
  },
} as const;
