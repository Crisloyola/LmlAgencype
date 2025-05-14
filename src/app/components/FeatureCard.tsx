type FeatureCardProps = {
  number: string;
  title: string;
  description?: string;
  highlight?: boolean;
  imageSrc?: string;
  descripcionGreen?: string;
  className?: string;
};

export default function FeatureCard({
  number,
  title,
  description,
  highlight = false,
  imageSrc,
  descripcionGreen,
  className
}: FeatureCardProps) {
  return (
    <div
      className={`rounded-3xl p-8 shadow-md flex flex-col transition-all duration-300 border ${
        highlight ? 'bg-[#B2FA03] text-black  p-10' : 'bg-white text-black '
      }${className}`}
    >
      <div>
        <div className="flex justify-between items-start ">
          <span className="text-5xl font-bold">{number}</span>
          {highlight && (
            <img
              src="flecha.svg" // Cambia esta ruta a la ubicación real de tu archivo fecha.svg
              alt="Fecha"
              className="w-20 h-20 -mt-5"
            />
          )}
        </div>
        <h1 className="text-[25px]  mb-2 mt-[30px] text-left">{title}</h1>
        <p className="text-[15px] text-[#838893] text-left">{description}</p>
        <p className="text-[15px] text-[#070707] text-left">{descripcionGreen}</p>
      </div>

      {imageSrc && (
        <img
          src={imageSrc}
          alt="feature"
          className="mt-4 rounded-xl w-full h-[120px] object-cover"
        />
      )}
    </div>
  );
}