import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { portfolio } from '../data/portfolio';

export default function PortfolioCarousel() {
  return (
    <section className="py-20 px-6">
      <h2 className=" font-juana text-3xl font-bold text-center mb-2">Producción Audiovisual</h2>
      <p className=" font-juana text-center text-gray-600 max-w-2xl mx-auto mb-10">
       Transformamos cada instante en contenido visual memorable, reflejando la esencia de tus eventos, producciones y proyectos con estilo minimalista y cuidado en cada detalle.
      </p>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {portfolio.map((item: any, idx: number) => (
          <SwiperSlide key={idx}>
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              {/* Imagen ocupa todo el card */}
              <img src={item.image} alt={item.title} className="w-full h-96 object-cover" />

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
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
