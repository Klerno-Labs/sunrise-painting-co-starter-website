import type { Metadata } from "next";
import { headingFont, bodyFont } from "@/lib/fonts";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://sunrisepaintingco.com"),
  title: {
    default: "Sunrise Painting Co. | Houston's Trusted Painters",
    template: "%s | Sunrise Painting Co."
  },
  description: "Professional residential and commercial painting services in Houston, TX. Interior, exterior, cabinet refinishing, and drywall repair. Licensed, insured, and A+ rated.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sunrisepaintingco.com",
    siteName: "Sunrise Painting Co.",
    title: "Sunrise Painting Co. | Houston's Trusted Painters",
    description: "Premium painting services in Greater Houston. Get a free quote today.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Sunrise Painting Co. Project"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="font-body text-text_body bg-background antialiased selection:bg-secondary selection:text-white">
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Sunrise Painting Co.",
              "image": "https://sunrisepaintingco.com/logo.png",
              "telephone": "(713) 555-8291",
              "email": "info@sunrisepaintingco.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2847 Westpark Dr, Suite 110",
                "addressLocality": "Houston",
                "addressRegion": "TX",
                "postalCode": "77098",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 29.7346,
                "longitude": -95.4378
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "07:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "08:00",
                  "closes": "14:00"
                }
              ],
              "priceRange": "$$"
            })
          }}
        />
        
        {/* Skip to content for accessibility */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white p-4 rounded-md z-[100]">
          Skip to main content
        </a>

        <Navbar />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}