export const SITE_NAME = "Snowonline";
export const TAGLINE = "Especialistas em Viagens de Ski e Snowboard";
export const WHATSAPP = "+5511999999999";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP.replace(/\+/g, "")}`;
export const EMAIL = "contato@snowonline.com.br";

export const BUSINESS_HOURS = {
  weekdays: "10h às 18h",
  label: "Seg a Sex, 10h às 18h",
};

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/snowonline",
  facebook: "https://facebook.com/snowonline",
  youtube: "https://youtube.com/@snowonline",
};

export const NAV_ITEMS = [
  {
    label: "Destinos",
    href: "/destinos",
    children: [
      { label: "America do Sul", href: "/destinos?region=south-america" },
      { label: "Estados Unidos", href: "/destinos?region=usa" },
      { label: "Canada", href: "/destinos?region=canada" },
      { label: "Europa", href: "/destinos?region=europe" },
      { label: "Japao", href: "/destinos?region=japan" },
    ],
  },
  { label: "Orcamento", href: "/orcamento" },
  { label: "Quem Somos", href: "/quem-somos" },
  { label: "Contato", href: "/contato" },
  { label: "Blog", href: "/blog" },
];
