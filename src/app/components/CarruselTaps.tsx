// components/NuestraEsenciaConCarrusel.jsx

import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';

export default function NuestraEsenciaConCarrusel() {
  const swiperRef = useRef<import('swiper').SwiperType | null>(null);

  // Definimos las categorías con varias imágenes
  const slidesData = [
    {
      id: 0,
      title: 'LMLAGENCY',
      images: ['/lmlagency1.png', '/agency/agency2.jpg', '/agency/agency3.jpg','/agency/agency4.jpg','/agency/agency5.jpg'],
    },
    {
      id: 1,
      title: 'PARADO SIN POLO',
      images: ['/parado/pa.jpg', '/parado/pa1.jpg', '/parado/pa2.jpg','/parado/pa3.jpg','/parado/pa4.jpg'],
    },
    {
      id: 2,
      title: 'STREAMERS',
      images: ['/trabajo3.png', '/trabajo3_2.png', '/trabajo3_3.png'],
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

  return (
    <section className="bg-[#131313] text-white rounded-3xl flex flex-col space-y-12 px-6 mt-[30px]">
      <h1 className="text-[55px] font-extrabold text-center border-r-[#33363F]">Nuestro Trabajo nos identifica</h1>

      <div className="flex space-x-4 border-b border-t border-[#33363F] mb-4 overflow-x-auto -mt-6">
        {slidesData.map((category) => (
          <button
            key={category.id}
            className={`text-sm md:text-base px-4 py-5 rounded-t-xl font-bold whitespace-nowrap  ${
              activeCategory === category.id ? ' bg-[#B2FA03] text-[#131313]' : 'text-white'
            }`}
            onClick={() => handleTabClick(category.id)}
          >
            {category.title}
          </button>
        ))}
      </div>

      <div className="relative w-full h-[400px] md:h-[600px]">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          speed={1000}
          className="w-full h-full rounded-3xl overflow-hidden"
        >
          {allSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Image
                src={slide.img}
                alt={`Slide ${index}`}
                fill
                className="object-cover w-full h-full rounded-3xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Degradado lateral izquierdo */}
        <div className="pointer-events-none absolute top-0 left-0 h-full w-1/5 bg-gradient-to-r from-[#131313] to-transparent z-10 rounded-3xl"></div>

        {/* Degradado lateral derecho */}
        <div className="pointer-events-none absolute top-0 right-0 h-full w-1/5 bg-gradient-to-l from-[#131313] to-transparent z-10 rounded-3xl"></div>
      </div>
    </section>
  );
}
