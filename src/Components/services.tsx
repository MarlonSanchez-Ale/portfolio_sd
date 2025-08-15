import { services } from '../data/services'
import { motion } from 'framer-motion'

export default function Services() {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 font-juana">Nuestros Servicios</h2>
      <div className="flex flex-col gap-12 max-w-5xl mx-auto">
        {services.map((srv: any, i: number) => (
          <motion.div
            key={i}
            className={`flex flex-col md:flex-row items-stretch gap-4 md:gap-8 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Imagen del servicio */}
            <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg flex-1 h-48 md:h-64">
              <img
                src={srv.image}
                alt={srv.title}
                className="w-full h-full object-cover"
                loading='lazy'
              />
            </div>

            {/* Texto del servicio */}
            <div className="w-full md:w-1/2 bg-gray-200/90 p-6 rounded-lg shadow-md hover:shadow-xl transition flex-1 flex flex-col justify-center items-center text-center">
              <h3 className="text-xl md:text-2xl font-semibold mb-2 font-juana ">{srv.title}</h3>
              <p className="text-gray-600 text-sm md:text-base mb-4 font-juana ">{srv.desc}</p>
              <a
                href="https://wa.me/message/5VKW5SJ77TD7L1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-gray-400 text-black font-juana font-semibold text-sm md:text-base px-6 py-2 rounded hover:bg-white hover:text-black transition"
              >
                Contáctanos
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
