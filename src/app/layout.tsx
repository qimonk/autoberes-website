import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AutoBeres - Biro Jasa STNK & BPKB Terpercaya di Bandung",
  description:
    "AutoBeres adalah biro jasa kendaraan terpercaya di Bandung. Layanan perpanjang STNK, pajak kendaraan, balik nama, mutasi, BPKB, cabut berkas. Cepat, aman, transparan.",
  keywords: [
    "biro jasa STNK Bandung",
    "jasa BPKB Bandung",
    "perpanjang STNK Bandung",
    "pajak kendaraan Bandung",
    "balik nama kendaraan Bandung",
    "mutasi kendaraan Bandung",
    "cabut berkas BPKB Bandung",
    "biro jasa kendaraan Bandung",
    "AutoBeres",
    "urusan STNK BPKB",
  ],
  authors: [{ name: "AutoBeres" }],
  creator: "AutoBeres",
  publisher: "AutoBeres",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://autoberes-website.pages.dev"),
  alternates: {
    canonical: "https://autoberes-website.pages.dev",
  },
  openGraph: {
    title: "AutoBeres - Semua Urusan Kendaraan, Auto Beres",
    description:
      "Biro jasa STNK & BPKB cepat, aman, terpercaya di Bandung. Perpanjang STNK, pajak kendaraan, balik nama, mutasi, BPKB, cabut berkas.",
    url: "https://autoberes-website.pages.dev",
    siteName: "AutoBeres",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoBeres - Semua Urusan Kendaraan, Auto Beres",
    description:
      "Biro jasa STNK & BPKB cepat, aman, terpercaya di Bandung.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AutoBeres",
    description:
      "Biro jasa STNK & BPKB terpercaya di Bandung. Layanan perpanjang STNK, pajak kendaraan, balik nama, mutasi, BPKB, cabut berkas.",
    url: "https://autoberes-website.pages.dev",
    telephone: "+6285150690994",
    email: "qimonk1989@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl Negla Tengah No 74",
      addressLocality: "Bandung",
      addressRegion: "Jawa Barat",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.9175,
      longitude: 107.6191,
    },
    areaServed: {
      "@type": "City",
      name: "Bandung",
    },
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "17:00",
    },
    sameAs: ["https://wa.me/6285150690994"],
  };

  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
