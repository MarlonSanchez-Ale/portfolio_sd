import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

type PortfolioCarouselProps = {
  items: any[];
  tipo?: string;
};

export default function PortfolioCarousel({ items, tipo }: PortfolioCarouselProps) {
  const filteredItems = typeof tipo === 'string'
    ? items.filter((item: any) => item.tipo === tipo)
    : items;

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }}
    >
      {filteredItems.map((item: any, idx: number) => (
        <SwiperSlide key={idx}>
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            {/* Imagen ocupa todo el card */}
            <img src={item.image} alt={item.title} loading='lazy' className="w-full h-[500px] object-cover" />

            {/* Footer negro semi-transparente */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white flex items-center justify-between px-4 py-2">

              {/* Nombre del cliente y fecha */}
              <div className="flex flex-col justify-start text-start">
                <span className="font-semibold font-juana">{item.title}</span>
              </div>

              {/* Logo del cliente */}
              <div className="border border-white p-1 rounded-full">
                <img
                  src={item.logo || '/assets/images/default-logo.png'}
                  alt={`${item.title} logo`}
                  className="w-10 h-10 rounded-full object-cover"
                  loading='lazy'
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
