// components/Footer.jsx
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="text-white">
      <div className="container mx-auto px-4 py-6 border-t border-[#33363F]">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
          {/* Logo Section */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <Link href="/">
              <div className="w-36 h-12 relative">
                <Image src="/Logo.svg" alt="Logo" width={150} height={81} />
              </div>
            </Link>
          </div>

          {/* Links Section */}
          <div className="w-full md:w-1/3 text-center md:text-left md:mt-1 mt-10">
            <h3 className="text-[#33363F] text-lg mb-4">Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-gray-300">Inicio</Link></li>
              <li><Link href="/quienes-somos" className="hover:text-gray-300">Quienes Somos?</Link></li>
              <li><Link href="/preguntas" className="hover:text-gray-300">Preguntas</Link></li>
              <li><Link href="/historia" className="hover:text-gray-300">Historia</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="text-[#33363F] text-lg mb-4">Contáctanos</h3>
            <ul className="space-y-2">
              <li className="flex justify-center md:justify-start items-center">
                <span>email:</span>
              </li>
              <li className="flex justify-center md:justify-start items-center">
                <span>+ contacto@lmlagencype.com</span>
              </li>
              <li className="flex justify-center md:justify-start items-center">
                <span>+ info@lmlagencype.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and Social Media */}
        <div className="pt-4 mt-6 border-t border-[#33363F] flex flex-col md:flex-row justify-between items-center gap-2 text-center">
          <p className="text-sm">Copyright © 2025 Scout. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
