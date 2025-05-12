import NuestraEsencia from "./Esencia";
import FAQ from "./Faq";
import FeatureCard from "./FeatureCard";

export default function FeaturesSection() {
  return (
    <section className="py-15 sm:px-8 lg:px-16 ">
      <div className="max-w-7xl mx-auto  bg-[#F7F7F7]  rounded-[32] text-left">
        <div className="flex flex-col items-center justify-center py-8">
            <h1 className="text-4xl md:text-[55px] lg:justify-center font-bold text-center mb-6">
                Producción Creativa FEATURES
            </h1>
        </div>

        <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
                <FeatureCard
                number="01"
                title="Motor de Producción Ágil"
                description="Optimizamos cada etapa del evento con procesos creativos y técnicos que garantizan resultados impactantes."
                className="h-[300px] mt-[55px]"
                />

                <FeatureCard
                number="02"
                title="Panel Estratégico para Creadores"
                descripcionGreen="Brindamos herramientas visuales personalizadas para que streamers y marcas vean el rendimiento y engagement en tiempo real."
                highlight
                imageSrc="/creadores.png"
                />

                <FeatureCard
                number="03"
                title="Integración sin Fricciones"
                description="Nos adaptamos a tus plataformas y flujos de trabajo sin interrumpir tus operaciones, logrando una ejecución fluida."
                className="h-[300px] mt-[55px]"
                />
            </div>
        </div>
        <div className="py-16 px-6 sm:px-8 lg:px-16">
          <NuestraEsencia />
        </div>
      </div>

      
       
    </section>
  );
}
