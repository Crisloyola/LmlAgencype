"use client";

export default function Herosection() {
  return (
    <section className="text-white py-16 px-6 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Izquierda: texto */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-[65px] font-bold mb-6 leading-tight bg-gradient-to-tr from-[#EDFFC2] to-[#B7CE7F] bg-clip-text text-transparent">
            ¿Buscas una experiencia única en entretenimiento digital?
          </h1>

          <p className="mb-4 text-sm sm:text-base">
            En LML Agency, creamos momentos memorables. Somos una productora peruana con un equipo apasionado y con años de experiencia en la industria del entretenimiento. Nos especializamos en contenidos IRL, Esports y eventos especiales, colaborando con personalidades de la televisión y reconocidas marcas corporativas.
          </p>

          <p className="text-sm sm:text-base">
            Cada proyecto que realizamos lleva nuestro sello de calidad y compromiso al 100%. Si buscas innovación, creatividad y un enfoque profesional, estás en el lugar correcto.
          </p>

          {/* Logos de plataformas */}
          <div className="flex justify-center lg:justify-start items-center gap-8 mt-">
            <img src="/discord.svg" alt="Discord" className="w-[121]  sm:w-[160]" />
            <img src="/twitch.svg" alt="Twitch" className="w-[100]  sm:w-[90]" />
            <img src="/kick.svg" alt="Kick" className="w-[100]  sm:w-[90]" />
          </div>
        </div>

        {/* Derecha: imágenes */}
        <div className="flex-1 relative">
          <div className="relative w-full h-auto max-w-[570px] mx-auto">
            {/* Imagen de fondo */}
            <img
              src="/smash.png"
              alt="Foto 1"
              className="rounded-xl object-cover w-[650]  max-w-[600px] -mt-30"
            />

            {/* Imagen encima */}
           <img
              src="/lobo1.png"
              alt="Encima"
              width={320}
              height={300}
              className="absolute left-50 -mt-40 rounded-lg z-10 shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
