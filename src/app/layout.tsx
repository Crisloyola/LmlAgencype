import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://lmlagencype.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LML Agency | Alquiler de Equipos Audiovisuales en Lima, Perú",
    template: "%s | LML Agency",
  },
  description:
    "Alquila cámaras Sony, iluminación Godox, micrófonos Shure, switchers ATEM y más en Lima. LML Agency — productora audiovisual peruana con equipos profesionales desde S/ 50/día.",
  keywords: [
    "alquiler de equipos Lima",
    "alquiler de cámaras Lima",
    "alquiler de cámaras profesionales Perú",
    "alquiler de equipos audiovisuales Lima",
    "alquiler de equipos de video Lima",
    "alquiler de iluminación para video Lima",
    "alquiler equipo de streaming Lima",
    "alquiler de micrófonos Lima",
    "alquiler Sony A7 III Lima",
    "alquiler Blackmagic Lima",
    "alquiler Godox Lima",
    "productora audiovisual Lima",
    "LML Agency",
    "producción de video Lima",
    "alquiler equipos producción Lima",
    "equipo audiovisual Perú",
  ],
  authors: [{ name: "LML Agency", url: siteUrl }],
  creator: "LML Agency",
  publisher: "LML Agency",
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
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: siteUrl,
    siteName: "LML Agency",
    title: "LML Agency | Alquiler de Equipos Audiovisuales en Lima, Perú",
    description:
      "Alquila cámaras, iluminación, audio y equipos de streaming profesional en Lima. Desde S/ 50/día.",
    images: [
      {
        url: "/lmlagency1.png",
        width: 1200,
        height: 630,
        alt: "LML Agency — Alquiler de Equipos Audiovisuales en Lima, Perú",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LML Agency | Alquiler de Equipos Audiovisuales en Lima",
    description:
      "Alquila cámaras, iluminación, audio y equipos de streaming en Lima. Desde S/ 50/día.",
    images: ["/lmlagency1.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [{ url: "/Logo.svg", type: "image/svg+xml" }],
    shortcut: "/Logo.svg",
    apple: "/apple-touch-icon.png",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": siteUrl,
  name: "LML Agency",
  description:
    "Productora audiovisual peruana especializada en alquiler de equipos de video, cámaras, iluminación y audio profesional en Lima.",
  url: siteUrl,
  logo: `${siteUrl}/Logo.svg`,
  image: `${siteUrl}/lmlagency1.png`,
  telephone: "+51",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lima",
    addressCountry: "PE",
  },
  areaServed: {
    "@type": "City",
    name: "Lima",
  },
  priceRange: "S/ 50 - S/ 320",
  sameAs: [],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: siteUrl,
  name: "LML Agency",
  description:
    "Alquiler de equipos audiovisuales profesionales en Lima, Perú.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/alquiler?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
