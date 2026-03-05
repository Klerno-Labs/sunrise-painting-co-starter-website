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
  // Homepage hero banner — the first image visitors see
  "hero": {
    src: "https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Professional home renovation project",
    width: 1200,
    height: 800,
  },

  "hero-alt": {
    src: "https://images.unsplash.com/photo-1556909114-44e3e70034e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Modern kitchen renovation with marble countertops",
    width: 1200,
    height: 800,
  },

  "about": {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Craftsman working on home improvement",
    width: 1200,
    height: 800,
  },

  "service-1": {
    src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Beautiful modern home exterior",
    width: 1200,
    height: 800,
  },

  "service-2": {
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Luxurious modern bathroom renovation",
    width: 1200,
    height: 800,
  },

  "service-3": {
    src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Professional tradesperson at work",
    width: 1200,
    height: 800,
  },

  "gallery-1": {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Modern home interior with natural light",
    width: 1200,
    height: 800,
  },

  "gallery-2": {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Elegant living room with contemporary design",
    width: 1200,
    height: 800,
  },

  "gallery-3": {
    src: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Clean organized workshop tools",
    width: 1200,
    height: 800,
  },

  "cta": {
    src: "https://images.unsplash.com/photo-1600596542815-22b5c1275ef0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Stunning home exterior at golden hour",
    width: 1200,
    height: 800,
  },

  "testimonial-bg": {
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Modern home with landscaped garden",
    width: 1200,
    height: 800,
  },

  "gallery-4": {
    src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Contemporary house front entrance",
    width: 1200,
    height: 800,
  },
} as const;

export type ImageSlot = keyof typeof images;