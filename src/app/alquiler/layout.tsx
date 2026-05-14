// src/app/alquiler/layout.tsx
import type { Metadata } from "next";
import "../globals.css";

const siteUrl = "https://lmlagencype.com";

const pageUrl = `${siteUrl}/alquiler`;

export const metadata: Metadata = {
  title: "Alquiler de Equipos Audiovisuales en Lima",
  description:
    "Alquila cámaras Sony, iluminación Godox, micrófonos Shure y equipos de streaming en Lima desde S/ 50/día. Disponibles para eventos, producciones y contenido digital. LML Agency.",
  keywords: [
    "alquiler de equipos audiovisuales Lima",
    "alquiler de cámaras Lima",
    "alquiler de iluminación Lima",
    "alquiler de audio Lima",
    "alquiler de streaming Lima",
    "alquiler Sony A7 Lima",
    "alquiler Blackmagic Lima",
    "alquiler ATEM Mini Lima",
    "alquiler Shure SM7B Lima",
    "equipos para producción Lima",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Alquiler de Equipos Audiovisuales en Lima | LML Agency",
    description:
      "Cámaras, iluminación, audio y streaming desde S/ 50/día. Todo lo que necesitas para producir contenido profesional en Lima.",
    url: pageUrl,
    siteName: "LML Agency",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "/lmlagency1.png",
        width: 1200,
        height: 630,
        alt: "Alquiler de equipos audiovisuales Lima — LML Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alquiler de Equipos Audiovisuales en Lima | LML Agency",
    description:
      "Cámaras, iluminación, audio y streaming desde S/ 50/día en Lima.",
    images: ["/lmlagency1.png"],
  },
  icons: {
    icon: [{ url: "/Logo.svg", type: "image/svg+xml" }],
    shortcut: "/Logo.svg",
  },
};

export default function AlquilerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#131313] text-white">
      {children}
    </div>
  );
}
