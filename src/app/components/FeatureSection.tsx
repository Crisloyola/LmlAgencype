import NuestraEsencia from "./Esencia";
import FAQ from "./Faq";
import FeatureCard from "./FeatureCard";

export default function FeaturesSection() {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto bg-[#F7F7F7] rounded-[32px] text-left">
        {/* Título */}
        <div className="flex flex-col items-center justify-center py-8">
          <h1 className="text-3xl sm:text-4xl md:text-[55px] font-bold text-center">
            Producción Creativa FEATURES
          </h1>
        </div>

        {/* Tarjetas de características */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            <FeatureCard
              number="01"
              title="Motor de Producción Ágil"
              description="Optimizamos cada etapa del evento con procesos creativos y técnicos que garantizan resultados impactantes."
              className="h-auto"
            />

            <FeatureCard
              number="02"
              title="Panel Estratégico para Creadores"
              descripcionGreen="Brindamos herramientas visuales personalizadas para que streamers y marcas vean el rendimiento y engagement en tiempo real."
              highlight
              imageSrc="/creadores.png"
              className="h-auto"
            />

            <FeatureCard
              number="03"
              title="Integración sin Fricciones"
              description="Nos adaptamos a tus plataformas y flujos de trabajo sin interrumpir tus operaciones, logrando una ejecución fluida."
              className="h-auto"
            />
          </div>
        </div>

        {/* Nuestra Esencia */}
        <div className="mt-16 px-4 sm:px-6 lg:px-8">
          <NuestraEsencia />
        </div>
      </div>
    </section>
  );
}
