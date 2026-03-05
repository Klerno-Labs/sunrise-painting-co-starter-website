export const siteConfig = {
  name: "Sunrise Painting Co.",
  description: "Family-owned residential and commercial painting company serving Greater Houston since 2012. Interior, exterior, cabinet refinishing, and drywall repair.",
  url: "https://sunrisepaintingco.com",
  links: {
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
  contact: {
    phone: "(713) 555-8291",
    email: "info@sunrisepaintingco.com",
    address: "2847 Westpark Dr, Suite 110, Houston, TX 77098",
    hours: "Mon-Fri: 7am-6pm, Sat: 8am-2pm, Sun: Closed",
  },
  navItems: [
    { title: "Home", href: "/" },
    { title: "Services", href: "/#services" },
    { title: "Gallery", href: "/#gallery" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ],
};

export type SiteConfig = typeof siteConfig;