export const siteConfig = {
  name: "Sunrise Painting Co.",
  description: "Premium residential and commercial painting services serving Greater Houston since 2012.",
  url: "https://sunrisepaintingco.com",
  links: {
    phone: "(713) 555-8291",
    email: "info@sunrisepaintingco.com",
    address: "2847 Westpark Dr, Suite 110, Houston, TX 77098",
  },
  nav: [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    { title: "Gallery", href: "/gallery" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ],
};

export type SiteConfig = typeof siteConfig;