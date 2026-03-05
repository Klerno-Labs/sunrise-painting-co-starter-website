import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { images } from "@/config/images";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sunrisepaintingco.com"),
  title: {
    default: "Sunrise Painting Co. | Houston's Premier Residential & Commercial Painters",
    template: "%s | Sunrise Painting Co."
  },
  description: "Family-owned residential and commercial painting company serving the Greater Houston area. Interior, exterior, cabinet refinishing, and drywall repair. Licensed & Insured.",
  openGraph: {
    title: "Sunrise Painting Co. | Houston's Premier Residential & Commercial Painters",
    description: "Premium painting services in Houston, Katy, Sugar Land, and The Woodlands. Get a free quote today.",
    url: "https://sunrisepaintingco.com",
    siteName: "Sunrise Painting Co.",
    images: [
      {
        url: images.hero.src,
        width: images.hero.width,
        height: images.hero.height,
        alt: images.hero.alt,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${inter.variable}`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Sunrise Painting Co.",
              "image": images.hero.src,
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
                "latitude": "29.7304",
                "longitude": "-95.4642"
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
      </body>
    </html>
  );
}