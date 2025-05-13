
type FeatureCardProps = {
  number: string;
  title: string;
  description?: string;
  highlight?: boolean;
  imageSrc?: string;
  descripcionGreen?: string,
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 7l-10 10M17 7h-6m6 0v6"
              />
            </svg>
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
