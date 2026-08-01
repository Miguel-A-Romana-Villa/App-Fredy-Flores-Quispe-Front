export const siteConfig = {
  name: "Ps. Fred Flores",
  role: "Psicoterapeuta",
  locale: "es",
  whatsapp: {
    phone: "51999999999",
    message: "Hola, quisiera solicitar información sobre las sesiones.",
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
