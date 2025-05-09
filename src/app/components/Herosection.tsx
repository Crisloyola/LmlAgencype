"use client";

export default function Herosection() {
  return (
    <section className=" text-white py-16 px-6 justify-center">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Izquierda: texto */}
        <div className="flex-1">
           <h1 className="text-8xl lg:text-[65px] font-bold mb-9 leading-tight bg-gradient-to-tr from-[#EDFFC2] to-[#B7CE7F] bg-clip-text text-transparent">
            ¿Buscas una experiencia única en entretenimiento digital?
          </h1>
          <p className="text-white mb-6">
            En LML Agency, creamos momentos memorables. Somos una productora peruana con un equipo apasionado y con años de experiencia en la industria del entretenimiento. Nos especializamos en contenidos IRL, Esports y eventos especiales, colaborando con personalidades de la televisión y reconocidas marcas corporativas.
          </p>
          <p className="text-white">
            Cada proyecto que realizamos lleva nuestro sello de calidad y compromiso al 100%. Si buscas innovación, creatividad y un enfoque profesional, estás en el lugar correcto.
          </p>

          {/* Logos de plataformas */}
          <div className="flex items-center gap-6 mt-6">
            <img src="/discord.svg" alt="Discord" className="h-25" />
            <img src="/twitch.svg" alt="Twitch" className="h-6" />
            <img src="/kick.svg" alt="Kick" className="h-6" />
          </div>
        </div>

        {/* Derecha: imágenes */}
        <div className="flex-1 relative">
          <div className="relative w-full h-[500px]">
            {/* Imagen de fondo (smash.png), más arriba */}
            <img
              src="/smash.png"
              alt="Foto 1"
              className="rounded-xl object-cover w-[570px] -mt-70 mx-auto"
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
