import Image from 'next/image';
import CarruselTabs from './CarruselTaps';

export default function NuestraEsencia() {
  return (
    <section className="bg-[#131313] text-white py-10 px-4 md:px-6 lg:px-10 flex flex-col gap-10 rounded-3xl">
      {/* Bloque de contenido superior */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-12">
        {/* Texto */}
        <div className="w-full md:w-1/2 space-y-8">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">Nuestra Esencia</h1>
          <p className="text-sm md:text-base leading-relaxed">
            Pasión por los Esports, compromiso con la calidad y conexión real con la comunidad gamer.
            En LML Agency creamos experiencias únicas que marcan la diferencia en cada evento digital.
          </p>

          <div>
            <h3 className="font-bold flex items-center mb-2">🎯 Misión</h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Brindamos soluciones creativas y técnicas de alta calidad para transmisiones en vivo, apoyando a streamers, creadores de contenido, influencers y marcas que desean profesionalizar su presencia digital en el mundo de los Esports y el entretenimiento online.
            </p>
          </div>

          <div>
            <h3 className="font-bold flex items-center mb-2">⭐ Visión</h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Ser la agencia líder en el Perú en producción de contenido en vivo y diferido, destacando por nuestra innovación, excelencia y compromiso.
              Aspiramos a ser un referente latinoamericano, aliados estratégicos del crecimiento del ecosistema digital en la región.
            </p>
          </div>

          <div>
            <h3 className="font-bold flex items-center mb-4">🔵 Nuestros Valores</h3>
            <ul className="space-y-2 text-gray-300 text-sm md:text-base leading-relaxed">
              <li>🔥 Pasión: Amamos lo que hacemos: Esports, tecnología y contenido digital.</li>
              <li>🤝 Colaboración: Crecemos junto a nuestros clientes y equipo.</li>
              <li>🏆 Calidad: Cada proyecto refleja nuestro estándar técnico y creativo.</li>
              <li>💪 Resiliencia: Afrontamos retos con esfuerzo y constancia.</li>
              <li>🚀 Innovación: Evolucionamos con las tendencias del mundo digital.</li>
            </ul>
          </div>
        </div>

        {/* Imagen */}
        <div className="w-full md:w-1/2 relative flex flex-col items-center md:items-end">
          <div className="absolute -top-6 right-0 bg-[#B2FA03] text-black px-5 py-3 rounded-2xl shadow-lg flex items-center gap-3">
            <span className="text-[30px] lg:text-[35px] font-extrabold leading-none">100%</span>
            <span className="text-[14px] lg:text-[16px] font-medium leading-snug">
              Comprometidos con nuestros<br />clientes.
            </span>
          </div>

          <div className="rounded-3xl overflow-hidden w-full max-w-[400px] sm:max-w-[600px] lg:max-w-[800px] mt-20 md:mt-0">
            <Image
              src="/Nuestra.png"
              alt="Equipo LML Agency"
              width={700}
              height={500}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Carrusel dentro de la misma sección, pero abajo */}
      <div className="w-full">
        <CarruselTabs />
      </div>
    </section>
  );
}
