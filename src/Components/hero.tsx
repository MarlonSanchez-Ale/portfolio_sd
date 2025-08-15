import { motion } from 'framer-motion';
import logo from '../assets/images/logosdblanco.png';
import fondo from '../assets/Images/fondo-portafolio.jpg';

export default function Hero() {
  return (
    <section
      className="relative h-screen flex flex-col justify-center items-center px-6 text-center rounded-lg"
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay oscuro pero no demasiado */}
      <div className="absolute inset-0 bg-black/50 rounded-lg"></div>

      {/* Logo */}
      <div
        className="
          absolute top-6 z-10 rounded-lg
          left-1/2 -translate-x-1/2
          md:left-6 md:translate-x-0
        "
      >
        <img src={logo} alt="Sinfonía Digital" className="w-40 md:w-60 h-auto" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col gap-4">
        <motion.span
          className="subtitle"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Portafolio
        </motion.span>

        <motion.h1
          className="title text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Sinfonía Digital
        </motion.h1>

        <motion.p
          className="description text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Desde la cobertura de eventos hasta el desarrollo web, estamos para amplificar tu presencia digital con un toque único.
        </motion.p>
      </div>
    </section>
  );
}
