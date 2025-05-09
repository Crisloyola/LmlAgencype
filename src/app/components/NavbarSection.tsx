"use client";
import Image from 'next/image';
import Link from 'next/link';


export default function NavbarSection() {
  return (
    <header className=" text-white">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* Usar el Logo.svg directamente desde /public */}
          <Image src="/Logo.svg" alt="Logo" width={150} height={81} />
        </div>
        <ul className="flex space-x-8  text-[18px]">
          <li><Link href="#" className="hover:text-neon hover:text-[#B2FA03] transition ">Inicio</Link></li>
          <li><Link href="#" className="hover:text-neon hover:text-[#B2FA03] transition">Quienes Somos?</Link></li>
          <li><Link href="#" className="hover:text-neon hover:text-[#B2FA03] transition">Soluciones</Link></li>
          <li>
            <Link
              href="#"
              className="text-[#B2FA03] border border-neon px-4 py-1 rounded-full transition"
            >
              Nosotros
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
