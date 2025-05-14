import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LMLAGENCYPE - 🎥 ",
  description:
    "En LML Agency, creamos momentos memorables. Somos una productora peruana con un equipo apasionado y con años de experiencia",
  icons: {
    icon: [
      { url: "/Logo.svg", type: "image/svg+xml" },
    ],
    shortcut: "/Logo.svg",
    apple: "/apple-touch-icon.png",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
