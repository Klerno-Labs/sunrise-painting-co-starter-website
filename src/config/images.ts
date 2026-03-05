// ── Image Configuration ──────────────────────────────────────────────
// ✏️  HOW TO CHANGE IMAGES:
// 1. Find the slot you want to change below (e.g. "hero", "about", "service-1")
// 2. Replace the "src" URL with your own image URL
// 3. Update the "alt" text to describe the new image
// 4. Save — every component on the site updates automatically
//
// All components import from this file. This is the ONLY file you need
// to edit to swap any image on the entire website.

export const images = {
  // Homepage hero banner — Professional home renovation project
  "hero": {
    src: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1200&auto=format&fit=crop",
    alt: "Professional home renovation project",
    width: 1200,
    height: 800,
  },

  // Alternative hero image — Modern kitchen renovation with marble countertops
  "hero-alt": {
    src: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1200&auto=format&fit=crop",
    alt: "Modern kitchen renovation with marble countertops",
    width: 1200,
    height: 800,
  },

  // About page — Craftsman working on home improvement
  "about": {
    src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",
    alt: "Craftsman working on home improvement",
    width: 1200,
    height: 800,
  },

  // Service 1 — Beautiful modern home exterior
  "service-1": {
    src: "https://images.unsplash.com/photo-1600596542815-2a4d9f6fac95?q=80&w=1200&auto=format&fit=crop",
    alt: "Beautiful modern home exterior",
    width: 1200,
    height: 800,
  },

  // Service 2 — Luxurious modern bathroom renovation
  "service-2": {
    src: "https://images.unsplash.com/photo-1552321902-138a07918df3?q=80&w=1200&auto=format&fit=crop",
    alt: "Luxurious modern bathroom renovation",
    width: 1200,
    height: 800,
  },

  // Service 3 — Professional tradesperson at work
  "service-3": {
    src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1200&auto=format&fit=crop",
    alt: "Professional tradesperson at work",
    width: 1200,
    height: 800,
  },

  // Gallery image 1 — Modern home interior with natural light
  "gallery-1": {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
    alt: "Modern home interior with natural light",
    width: 1200,
    height: 800,
  },

  // Gallery image 2 — Elegant living room with contemporary design
  "gallery-2": {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    alt: "Elegant living room with contemporary design",
    width: 1200,
    height: 800,
  },

  // Gallery image 3 — Clean organized workshop tools
  "gallery-3": {
    src: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1200&auto=format&fit=crop",
    alt: "Clean organized workshop tools",
    width: 1200,
    height: 800,
  },

  // CTA section background — Stunning home exterior at golden hour
  "cta": {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    alt: "Stunning home exterior at golden hour",
    width: 1200,
    height: 800,
  },

  // Testimonials section background — Modern home with landscaped garden
  "testimonial-bg": {
    src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1200&auto=format&fit=crop",
    alt: "Modern home with landscaped garden",
    width: 1200,
    height: 800,
  },

  // Gallery image 4 — Contemporary house front entrance
  "gallery-4": {
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop",
    alt: "Contemporary house front entrance",
    width: 1200,
    height: 800,
  },

  // Before/After 1 (Kitchen Cabinet) - Before
  "ba-before-1": {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1200&auto=format&fit=crop",
    alt: "Kitchen before renovation",
    width: 1200,
    height: 800,
  },
  // Before/After 1 (Kitchen Cabinet) - After
  "ba-after-1": {
    src: "https://images.unsplash.com/photo-1556912173-3db996ea5e4b?q=80&w=1200&auto=format&fit=crop",
    alt: "Kitchen after refinishing",
    width: 1200,
    height: 800,
  },
} as const;

export type ImageSlot = keyof typeof images;