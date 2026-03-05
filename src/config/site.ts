export const siteConfig = {
  name: "Sunrise Painting Co.",
  description: "Premium residential and commercial painting services in Greater Houston. Licensed, insured, and rated A+ with the BBB.",
  url: "https://sunrisepaintingco.com",
  links: {
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
  contact: {
    phone: "(713) 555-8291",
    email: "info@sunrisepaintingco.com",
    address: "2847 Westpark Dr, Suite 110, Houston, TX 77098",
    hours: "Mon-Fri: 7am-6pm, Sat: 8am-2pm, Sun: Closed",
  },
  nav: [
    { title: "Home", href: "/" },
    { title: "Services", href: "/#services" },
    { title: "Gallery", href: "/#gallery" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ],
};

export type SiteConfig = typeof siteConfig;