import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F2B46",
        secondary: "#00A9CE",
        accent: "#FF6B35",
        background: "#F8F9FA",
        surface: "#FFFFFF",
        text_heading: "#1A202C",
        text_body: "#4A5568",
        text_muted: "#718096",
        border_light: "#E2E8F0",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      spacing: {
        "section-mobile": "5rem", // 80px
        "section-desktop": "6rem", // 96px
      },
      borderRadius: {
        "lg": "0.75rem", // 12px
        "xl": "1rem", // 16px
      },
      boxShadow: {
        "card": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        "hover": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
      screens: {
        '3xl': '1600px',
      },
    },
  },
  plugins: [],
};
export default config;