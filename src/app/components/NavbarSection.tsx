"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ContactForm from "./ContactForm";

export default function NavbarSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Inicio", href: "#" },
    { label: "¿Quiénes Somos?", href: "#somos" },
    { label: "Nuestro Trabajo", href: "#nuestro" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/70 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 h-[64px] flex items-center justify-between">

          {/* Logo */}
          <Link href="#" className="shrink-0">
            <img src="/Logo.svg" alt="Logo" width={200} height={32} className="w-[98px] h-auto" />
          </Link>

          {/* Links desktop */}
          <ul className="hidden md:flex items-center gap-6 text-[15px]">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="relative py-1 font-[450] text-white/70 hover:text-white transition-colors duration-200 group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-[#B2FA03] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Actions desktop */}
          <div className="hidden md:flex items-center gap-3 text-[14px]">
            {/* Alquiler pill */}
            <Link
              href="/alquiler"
              className="relative flex items-center gap-2 bg-[#B2FA03]/10 border border-[#B2FA03]/35
                         text-[#B2FA03] font-semibold px-4 py-[7px] rounded-full overflow-hidden
                         hover:bg-[#B2FA03] hover:text-black hover:border-[#B2FA03]
                         hover:shadow-[0_0_22px_rgba(178,250,3,0.45)]
                         transition-all duration-300 group"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-600 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12" />
              <CartIcon size={12} />
              Alquiler de Equipos
            </Link>

            {/* Descargar Brochure */}
            <a
              href="/brochure.pdf"
              download="LML_Agency_Brochure.pdf"
              className="flex items-center gap-2 text-white/70 font-[450] px-3 py-1.5 hover:text-white transition-colors duration-200"
            >
              <DownloadIcon />
              Descargar Brochure
            </a>

            {/* Comunícate */}
            <button
              onClick={() => setShowContactForm(true)}
              className="text-white/70 font-[450] px-3 py-1.5 hover:text-white transition-colors duration-200"
            >
              Comunícate
            </button>

            {/* WhatsApp CTA */}
            <Link
              href="https://wa.link/7cmlp3"
              target="_blank"
              className="flex items-center gap-2 bg-white/[0.06] border border-white/[0.12] text-white
                         font-semibold px-4 py-[7px] rounded-full
                         hover:bg-white/[0.12] hover:border-white/25
                         transition-all duration-200"
            >
              <WhatsAppIcon />
              Contáctanos
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="md:hidden w-8 h-8 flex items-center justify-center rounded-lg
                       bg-white/[0.06] border border-white/10 text-white
                       hover:bg-white/[0.12] transition-all duration-200"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </header>

      {/* Spacer */}
      <div className="h-[64px]" />

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          onClick={() => setIsOpen(false)}
        />

        {/* Panel */}
        <div
          className={`relative z-10 flex flex-col h-full px-4 pt-24 pb-12 gap-2 transition-all duration-500 ${
            isOpen ? "translate-y-0" : "-translate-y-6"
          }`}
        >
          {/* Nav links */}
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: isOpen ? `${i * 60}ms` : "0ms" }}
              className={`text-[32px] font-bold text-white/80 hover:text-white py-2
                          border-b border-white/[0.06] transition-all duration-300
                          ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
            >
              {link.label}
            </Link>
          ))}

          {/* Alquiler */}
          <Link
            href="/alquiler"
            onClick={() => setIsOpen(false)}
            style={{ transitionDelay: isOpen ? "180ms" : "0ms" }}
            className={`text-[32px] font-bold text-[#B2FA03] py-2 border-b border-white/[0.06]
                        flex items-center gap-3 transition-all duration-300
                        ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
          >
            <CartIcon size={24} />
            Alquiler
          </Link>

          {/* Bottom actions */}
          <div
            style={{ transitionDelay: isOpen ? "240ms" : "0ms" }}
            className={`mt-auto flex flex-col gap-3 transition-all duration-300
                        ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <a
              href="/brochure.pdf"
              download="LML_Agency_Brochure.pdf"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl border border-white/15
                         text-white text-[16px] font-semibold hover:bg-white/[0.08] transition-all duration-200"
            >
              <DownloadIcon />
              Descargar Brochure
            </a>
            <button
              onClick={() => { setIsOpen(false); setShowContactForm(true); }}
              className="w-full py-4 rounded-2xl border border-white/15 text-white text-[16px] font-semibold
                         hover:bg-white/[0.08] transition-all duration-200"
            >
              Comunícate
            </button>
            <Link
              href="https://wa.link/7cmlp3"
              target="_blank"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl
                         bg-[#B2FA03] text-black text-[16px] font-extrabold
                         hover:bg-lime-300 transition-all duration-200"
            >
              <WhatsAppIcon />
              Contáctanos por WhatsApp
            </Link>
          </div>
        </div>
      </div>

      <ContactForm isOpen={showContactForm} onClose={() => setShowContactForm(false)} />
    </>
  );
}

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function CartIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
