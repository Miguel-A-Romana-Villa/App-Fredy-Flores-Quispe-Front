export const siteConfig = {
  name: "Ps. Fred Flores",
  role: "Psicoterapeuta",
  locale: "es",
  whatsapp: {
    phone: "51934717330",
    displayPhone: "+51 934 717 330",
    message: "Hola, quisiera solicitar información sobre las sesiones de psicoterapia.",
  },
  navigation: [
    { label: "Inicio", href: "/" },
    { label: "Sobre mí", href: "/sobre-mi" },
    { label: "Terapia Online", href: "/terapia-online" },
    { label: "Servicios", href: "/servicios" },
    { label: "Contacto", href: "/contacto" },
  ],
} as const;

export const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.phone}?text=${encodeURIComponent(
  siteConfig.whatsapp.message,
)}`;
