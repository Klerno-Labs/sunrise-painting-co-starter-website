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
  // Homepage hero banner — the first image visitors see — REPLACE with a real Unsplash URL matching: "Professional home renovation project"
  "hero": {
    src: "https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?q=80&w=1920&auto=format&fit=crop",
    alt: "Professional home renovation project",
    width: 1920,
    height: 1080,
  },

  // Alternative hero image (used on inner pages or as fallback) — REPLACE with a real Unsplash URL matching: "Modern kitchen renovation with marble countertops"
  "hero-alt": {
    src: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1920&auto=format&fit=crop",
    alt: "Modern kitchen renovation with marble countertops",
    width: 1920,
    height: 1080,
  },

  // About page or About section on homepage — REPLACE with a real Unsplash URL matching: "Craftsman working on home improvement"
  "about": {
    src: "https://images.unsplash.com/photo-1581578731117-104f2a8037e4?q=80&w=1920&auto=format&fit=crop",
    alt: "Craftsman working on home improvement",
    width: 1920,
    height: 1080,
  },

  // First service card image — REPLACE with a real Unsplash URL matching: "Beautiful modern home exterior"
  "service-1": {
    src: "https://images.unsplash.com/photo-1600596542815-e32c215cc2d6?q=80&w=1920&auto=format&fit=crop",
    alt: "Beautiful modern home exterior",
    width: 800,
    height: 600,
  },

  // Second service card image — REPLACE with a real Unsplash URL matching: "Luxurious modern bathroom renovation"
  "service-2": {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1920&auto=format&fit=crop",
    alt: "Luxurious modern bathroom renovation",
    width: 800,
    height: 600,
  },

  // Third service card image — REPLACE with a real Unsplash URL matching: "Professional tradesperson at work"
  "service-3": {
    src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1920&auto=format&fit=crop",
    alt: "Professional tradesperson at work",
    width: 800,
    height: 600,
  },

  // Gallery image 1 — REPLACE with a real Unsplash URL matching: "Modern home interior with natural light"
  "gallery-1": {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop",
    alt: "Modern home interior with natural light",
    width: 800,
    height: 600,
  },

  // Gallery image 2 — REPLACE with a real Unsplash URL matching: "Elegant living room with contemporary design"
  "gallery-2": {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1920&auto=format&fit=crop",
    alt: "Elegant living room with contemporary design",
    width: 800,
    height: 600,
  },

  // Gallery image 3 — REPLACE with a real Unsplash URL matching: "Clean organized workshop tools"
  "gallery-3": {
    src: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?q=80&w=1920&auto=format&fit=crop",
    alt: "Clean organized workshop tools",
    width: 800,
    height: 600,
  },

  // Call-to-action section background — REPLACE with a real Unsplash URL matching: "Stunning home exterior at golden hour"
  "cta": {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1920&auto=format&fit=crop",
    alt: "Stunning home exterior at golden hour",
    width: 1920,
    height: 600,
  },

  // Testimonials section background or decoration — REPLACE with a real Unsplash URL matching: "Modern home with landscaped garden"
  "testimonial-bg": {
    src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1920&auto=format&fit=crop",
    alt: "Modern home with landscaped garden",
    width: 1920,
    height: 600,
  },

  // Gallery image 4 — REPLACE with a real Unsplash URL matching: "Contemporary house front entrance"
  "gallery-4": {
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1920&auto=format&fit=crop",
    alt: "Contemporary house front entrance",
    width: 800,
    height: 600,
  },
} as const;

export type ImageSlot = keyof typeof images;