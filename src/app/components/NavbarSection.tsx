"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import ContactForm from "./ContactForm"; // Asegúrate de importar correctamente

export default function NavbarSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <header className="text-white relative z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo mejorado */}
        <div className="flex items-center">
          <img
            src="/Logo.svg"
            alt="Logo"
            width={150}
            height={81}
          />
        </div>

        {/* Botón de menú para móviles */}
        <div className="md:hidden z-50">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Menú de navegación en pantallas medianas y grandes */}
        <ul className="hidden md:flex space-x-8 text-[18px] nav">
          <li>
            <Link href="#" className="hover:text-[#B2FA03] transition">Inicio</Link>
          </li>
          <li>
            <Link href="#somos" className="hover:text-[#B2FA03] transition">¿Quiénes Somos?</Link>
          </li>
          <li>
            <Link href="#nuestro" className="hover:text-[#B2FA03] transition">Nuestro Trabajo</Link>
          </li>
          <li>
            <button
              onClick={() => setShowContactForm(true)}
              className="hover:text-[#B2FA03] transition"
            >
              Más Información
            </button>
          </li>
          <li>
            <Link href="https://wa.link/7cmlp3" target="_blank" className="text-[#B2FA03] border border-neon px-4 py-1 rounded-full transition">Contactanos</Link>
          </li>
        </ul>
      </nav>

      {/* Menú móvil con animación */}
      <div
        className={clsx(
          "fixed inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center space-y-8 text-[40px] font-semibold z-40 transition-all duration-500 ease-in-out",
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-10 pointer-events-none"
        )}
      >
        <Link href="#" onClick={() => setIsOpen(false)} className="hover:text-[#B2FA03] transition">Inicio</Link>
        <Link href="#somos" onClick={() => setIsOpen(false)} className="hover:text-[#B2FA03] transition">¿Quiénes Somos?</Link>
        <Link href="#nuestro" onClick={() => setIsOpen(false)} className="hover:text-[#B2FA03] transition">Nuestro Trabajo</Link>
        <button
          onClick={() => {
            setIsOpen(false);
            setShowContactForm(true);
          }}
          className="text-[#B2FA03] border border-neon px-6 py-2 rounded-full transition"
        >
          Más Información
        </button>
        <Link href="https://wa.link/7cmlp3" target="_blank" onClick={() => setIsOpen(false)} className="text-[#B2FA03] border border-neon px-6 py-2 rounded-full transition">Contactanos</Link>
      </div>

      {/* Modal del formulario */}
      <ContactForm isOpen={showContactForm} onClose={() => setShowContactForm(false)} />
    </header>
  );
}
