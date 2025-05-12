"use client";

export default function Herosection() {
  return (
    <section className="text-white py-16 px-6 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Izquierda: texto */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-[50px] xl:text-[65px] font-bold leading-tight bg-gradient-to-tr from-[#EDFFC2] to-[#B7CE7F] bg-clip-text text-transparent">
            ¿Buscas una experiencia única en entretenimiento digital?
          </h1>

          <p className="text-sm sm:text-base leading-relaxed">
            En LML Agency, creamos momentos memorables. Somos una productora peruana con un equipo apasionado y con años de experiencia en la industria del entretenimiento. Nos especializamos en contenidos IRL, Esports y eventos especiales, colaborando con personalidades de la televisión y reconocidas marcas corporativas.
          </p>

          <p className="text-sm sm:text-base leading-relaxed">
            Cada proyecto que realizamos lleva nuestro sello de calidad y compromiso al 100%. Si buscas innovación, creatividad y un enfoque profesional, estás en el lugar correcto.
          </p>

          {/* Logos de plataformas */}
          <div className="flex justify-center lg:justify-start items-center gap-6 mt-8">
            <img src="/discord.svg" alt="Discord" className="w-[80px] sm:w-[100px] lg:w-[121px]" />
            <img src="/twitch.svg" alt="Twitch" className="w-[80px] sm:w-[100px] lg:w-[90px]" />
            <img src="/kick.svg" alt="Kick" className="w-[80px] sm:w-[100px] lg:w-[90px]" />
          </div>
        </div>

        {/* Derecha: imágenes */}
        <div className="flex-1 relative flex justify-center">
          <div className="relative w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px]">
            {/* Imagen de fondo */}
            <img
              src="/smash.png"
              alt="Foto 1"
              className="rounded-xl object-cover w-full"
            />

            {/* Imagen encima */}
            <img
              src="/lobo1.png"
              alt="Encima"
              className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-[200px] sm:w-[250px] lg:w-[300px] z-10 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
