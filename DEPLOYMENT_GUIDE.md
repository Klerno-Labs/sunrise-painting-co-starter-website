# Deployment Guide

This guide covers deploying the Sunrise Painting Co. website to production.

## 🚀 Deploying to Vercel (Recommended)

Vercel is the creator of Next.js and offers the best performance and ease of use.

### 1. Push Code to GitHub
Ensure your project is pushed to a GitHub repository.

### 2. Import Project on Vercel
1. Log in to [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **"Add New..."** -> **"Project"**.
3. Select your GitHub repository.

### 3. Configure Project Settings
Vercel automatically detects Next.js settings. However, verify the following:

**Build & Development Settings:**
- **Framework Preset:** Next.js
- **Build Command:** `npm run build`
- **Install Command:** `npm install` (or `yarn install`)
- **Output Directory:** Keep default (Vercel handles this automatically for static exports).

**Environment Variables:**
If you have any API keys or specific environment variables (e.g., analytics ID), add them in the "Environment Variables" section.

### 4. Deploy
Click the **"Deploy"** button. Vercel will build your site and provide a live URL (e.g., `sunrise-painting.vercel.app`).

### 5. Custom Domain
1. Go to **Settings** -> **Domains**.
2. Add your domain (e.g., `sunrisepaintingco.com`).
3. Follow the instructions to update your DNS records (A record or CNAME).

## 🔍 Post-Deployment Checklist

- [ ] **SSL Certificate:** Ensure HTTPS is enabled (automatic on Vercel).
- [ ] **Forms:** Test the contact form to ensure it receives submissions.
- [ ] **Images:** Verify all images are loading correctly (check `src/config/images.ts`).
- [ ] **Mobile:** Test the site on a mobile device to ensure responsiveness.
- [ ] **SEO:** Check the page titles and meta tags using a tool like [Lighthouse](https://developers.google.com/web/tools/lighthouse).
- [ ] **Links:** Check that all internal and external links work.
- [ ] **Analytics:** Set up Google Analytics or similar if required.

## 🛠 Static Export Notes

This site uses `output: 'export'` in `next.config.mjs`. This means:
- No Node.js server is required to run the site.
- The site is pre-rendered into static HTML/CSS/JS files.
- API routes are **not** supported in a pure static export context (unless using Next.js serverless functions on platforms like Vercel). The contact form currently simulates a submission. To make it fully functional, you need to integrate a form service (Formspree, Netlify Forms) or a backend API.

### Setting up a Form Backend (e.g., Formspree)

Since we are using static export, the easiest way to handle form submissions is via a service like Formspree:

1. Sign up at [Formspree](https://formspree.io).
2. Create a new form and get your Form ID.
3. Update `src/components/smart-estimate-form.tsx`:
   - Change the `<form>` action to your Formspree URL.
   - Or update the `fetch` call in the `handleSubmit` function to POST to that URL.

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  try {
    await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    setIsSuccess(true);
  } catch (error) {
    // Handle error
  }
  setIsSubmitting(false);
};
```