# Client Handoff: Sunrise Painting Co. Website

Congratulations on your new website! This document is your guide to managing and updating your site.

## 📖 What Was Built

Your new website consists of 6 main pages:
1. **Home:** A professional introduction to your business with a quote request form.
2. **Services:** Detailed list of what you offer (Interior, Exterior, Cabinets, etc.) with prices.
3. **Gallery:** A showcase of your before/after work.
4. **About:** Your company story, history, and values.
5. **Contact:** Your address, phone, hours, and a contact form.
6. **FAQ:** Answers to common customer questions.

## 🖼 Changing Images

We have made updating photos incredibly easy. You do not need to hunt through different files.

**How to update:**
1. Open the file named `images.ts`. It is located in the `src/config` folder.
2. You will see a list of photos with names like `hero`, `about`, `gallery-1`, etc.
3. Find the photo you want to replace.
4. Paste the new web address (URL) of your photo into the `src: "..."` section.
5. Update the description in the `alt: "..."` section.
6. Save the file.

**That's it!** The photo will update automatically on the homepage and anywhere else that specific photo is used.

**Where to find photos:**
If you don't have web addresses for your photos, we recommend uploading them to a free service like Imgur or using a professional cloud storage service like AWS S3 or Cloudinary, then copying the "Link" address.

**Note:** Ensure your new photos are "landscape" (wide) rather than "portrait" (tall) for the best look.

## 🏷 Changing the Logo

The logo on the top left of the website is currently a text-based "S" icon.
To change this to your actual company logo image:
1. Add your logo URL to `src/config/images.ts` (give it a name like `logo`).
2. Open `src/components/layout/navbar.tsx`.
3. Replace the code inside the `<Link href="/" ...>` section with an `<Image>` component pointing to your new logo.

## 🎨 Changing Colors

If you want to change the blue or orange colors of the site:
1. Open `tailwind.config.ts` in the main folder.
2. Look for the `colors` section.
3. Change the hex codes (e.g., `#0F2B46`) to your preferred colors.
4. Save.

## 📝 Changing Text

**Phone Numbers & Addresses:**
These are stored in `src/config/site.ts`. Change them there once, and they update everywhere (Footer, Contact Page, Navbar).

**Services & Prices:**
1. Open `src/app/services/page.tsx`.
2. Look for the `SERVICES_DETAIL` list near the top.
3. Change the titles, prices, or descriptions.

**Testimonials:**
1. Open `src/components/sections/testimonials.tsx`.
2. Update the quotes and names in the `TESTIMONIALS` list.

## 📞 Getting Help

If you encounter a technical error that you cannot fix, or if you need major structural changes (like adding a new page), please contact the development team at Pegrio support.

**Contact:** support@pegrio.com
**Subject:** Sunrise Painting Co. Website Support

## 🚀 Hosting

Your site is currently set up to work with Vercel, a high-quality hosting platform. If you need help changing your domain name (e.g., from `sunrisepainting.vercel.app` to `sunrisepaintingco.com`), please refer to the Deployment Guide or contact support.

---

**Enjoy your new website!**