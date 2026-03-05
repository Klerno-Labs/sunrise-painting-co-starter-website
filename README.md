# Sunrise Painting Co. Website

A premium, high-performance website built for Sunrise Painting Co., a family-owned residential and commercial painting company serving the Greater Houston area.

## 🚀 Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Icons:** Lucide React
- **Animations:** Framer Motion (where needed) & CSS transitions
- **Fonts:** Montserrat (Headings) & Inter (Body) via `next/font`

## 🛠 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-repo/sunrise-painting.git
   cd sunrise-painting
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

4. **Build for production**
   ```bash
   npm run build
   npm run start
   ```

## 📁 Project Structure

```
├── public/              # Static assets (if needed locally)
├── src/
│   ├── app/             # Next.js App Router pages
│   │   ├── about/       # About page
│   │   ├── contact/     # Contact page
│   │   ├── gallery/     # Gallery page
│   │   ├── services/    # Services page
│   │   ├── faq/         # FAQ page
│   │   ├── layout.tsx   # Root layout (fonts, navbar, footer)
│   │   └── page.tsx     # Homepage
│   ├── components/      # React components
│   │   ├── layout/      # Navbar, Footer
│   │   ├── sections/    # Hero, Services, Testimonials
│   │   ├── ui/          # Atomic UI components (Button, Input)
│   │   └── before-after-slider.tsx
│   ├── config/          # Configuration files
│   │   ├── images.ts    # CENTRAL IMAGE MANAGEMENT
│   │   └── site.ts      # Site metadata & links
│   └── lib/             # Utilities (cn helper)
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

## 🎨 Customization Guide

### 🖼 Changing Images
**This is the most important part of maintaining this site.**

All images are managed from a **single file**: `src/config/images.ts`.

1. Open `src/config/images.ts`.
2. Find the image slot you want to change (e.g., `hero`, `about`, `service-1`).
3. Replace the `src` URL with your new image URL (Unsplash, AWS S3, Cloudinary, etc.).
4. Update the `alt` text to describe the new image accurately.
5. Save the file. The change will reflect on **every page** that uses that image slot immediately.

#### Image Slots Explained:
- `hero`: Main image on the Homepage (Professional home renovation project)
- `hero-alt`: Secondary hero image (Modern kitchen renovation)
- `about`: Used on the About page (Craftsman working)
- `service-1` through `service-3`: Used on the Services page
- `gallery-1` through `gallery-4`: Used on the Gallery page
- `cta`: Call to action background image
- `testimonial-bg`: Testimonials background

**Tip:** For best results, use images with a 4:3 or 16:9 aspect ratio and a minimum width of 1200px.

### 🎨 Changing Colors
The color scheme is defined in `tailwind.config.ts` under `theme.extend.colors`.

To update the brand colors:
1. Open `tailwind.config.ts`.
2. Modify the hex codes for `primary`, `secondary`, or `accent`.
3. The site will automatically update (you may need to restart the dev server).

### 📝 Changing Text Content
- **Navigation Links:** Edit `src/config/site.ts`.
- **Services & Prices:** Edit the data arrays in `src/app/services/page.tsx` or `src/components/sections/services.tsx`.
- **Testimonials:** Edit the `TESTIMONIALS` array in `src/components/sections/testimonials.tsx`.
- **Page Content:** Edit the respective `.tsx` file in `src/app/[page-name]/page.tsx`.

### 🏷 Changing Fonts
1. Open `src/app/layout.tsx`.
2. Modify the `Montserrat` or `Inter` configuration.
3. Update the `fontHeading` and `fontBody` variables in `tailwind.config.ts` to match the new font names.

## 🌐 Deployment

This project is configured for **Static Export** (`output: 'export'` in `next.config.mjs`), which means it can be hosted on any static server (Vercel, Netlify, AWS S3, GitHub Pages).

### Vercel Deployment
1. Push your code to GitHub.
2. Go to [Vercel](https://vercel.com) and click "Add New Project".
3. Import your repository.
4. **Framework Preset:** Next.js.
5. **Build Command:** `npm run build` (or `next build`).
6. **Output Directory:** `.next` (Note: Vercel handles static exports automatically with `output: export`).

See `DEPLOYMENT_GUIDE.md` for more detailed instructions.

## 📞 Support
For support or questions regarding the build, please contact the development team.