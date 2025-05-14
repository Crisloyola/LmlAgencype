import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Swiper as SwiperType } from 'swiper';

export default function NuestraEsenciaConCarrusel() {
  const swiperRef = useRef<SwiperType | null>(null);

  const slidesData = [
    {
      id: 0,
      title: 'LMLAGENCY',
      images: ['/agency/agency1.webp', '/agency/agency2.webp',, '/agency/agency3.webp',, '/agency/agency4.webp',, '/agency/agency5.webp'],
    },
    {
      id: 1,
      title: 'BAR DEL LOBO',
      images: ['/parado/pa1.webp', '/parado/pa2.webp', '/parado/pa3.webp', '/parado/pa4.webp', '/parado/pa5.webp','/parado/pa6.webp','/parado/pa7.webp'],
    },
    {
      id: 2,
      title: 'STREAMERS',
      images: ['/stream/01.jpg', '/stream/2.webp', '/stream/03.webp', '/stream/fabio01.webp', '/stream/fabio02.webp', '/stream/fabio03.webp', '/stream/fabio04.webp'],
    },
  ];

  const allSlides = slidesData.flatMap((category) =>
    category.images.map((img) => ({ img, categoryId: category.id }))
  );

  const [activeCategory, setActiveCategory] = useState<number>(0);

  const handleTabClick = (categoryId: number) => {
    setActiveCategory(categoryId);
    const indexInAllSlides = allSlides.findIndex(
      (slide) => slide.categoryId === categoryId
    );
    swiperRef.current?.slideToLoop(indexInAllSlides, 1000);
  };

  const handleSlideChange = (swiper: SwiperType) => {
    const currentSlide = allSlides[swiper.realIndex];
    if (currentSlide) {
      setActiveCategory(currentSlide.categoryId);
    }
  };

  return (
    <section className="text-white rounded-3xl flex flex-col gap-10 px-4 md:px-6 lg:px-10 mt-6" id='nuestro'>
      <h1 className="text-[28px] md:text-[38px] lg:text-[48px] font-extrabold text-center leading-tight">
        Nuestro Trabajo nos identifica
      </h1>

      {/* Tabs */}
      <div className="flex overflow-x-auto border-y border-[#33363F] mb-4 -mt-4 scrollbar-hide">
        {slidesData.map((category) => (
          <button
            key={category.id}
            className={`text-sm md:text-base px-4 py-4 font-bold whitespace-nowrap transition-colors duration-300 ${
              activeCategory === category.id
                ? 'bg-[#B2FA03] text-[#131313]'
                : 'text-white'
            }`}
            onClick={() => handleTabClick(category.id)}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Swiper */}
      <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px]">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={handleSlideChange}
          speed={1000}
          touchStartPreventDefault={false}
          className="w-full h-full rounded-3xl overflow-hidden"
        >
          {allSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <img
                src={slide.img}
                alt={`Slide ${index}`}
                className="object-cover w-full h-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Gradientes laterales (solo visibles en pantallas grandes) */}
        <div className="hidden sm:block pointer-events-none absolute top-0 left-0 h-full w-1/5 bg-gradient-to-r from-[#131313] to-transparent z-10 rounded-3xl"></div>
        <div className="hidden sm:block pointer-events-none absolute top-0 right-0 h-full w-1/5 bg-gradient-to-l from-[#131313] to-transparent z-10 rounded-3xl"></div>
      </div>
    </section>
  );
}
