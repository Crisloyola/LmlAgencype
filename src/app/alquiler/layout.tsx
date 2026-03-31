// src/app/alquiler/layout.tsx
import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Alquiler de Equipos | LML Agency",
  description:
    "Alquila cámaras, iluminación, audio y equipos de streaming profesional. LML Agency - Producción digital en Perú.",
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
