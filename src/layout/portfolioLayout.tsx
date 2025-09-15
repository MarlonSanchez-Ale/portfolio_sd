import PortfolioCarousel from '../Components/portfoliocarousel';
import { portfolio } from '../data/portfolio';

export default function PortfolioLayout() {
  return (
    <>
      <section className="py-20 px-6">
        <h2 className="font-juana text-3xl font-bold text-center mb-2">Producción Audiovisual</h2>
        <p className="font-juana text-center text-gray-600 max-w-2xl mx-auto mb-10">
         Transformamos cada instante en contenido visual memorable, reflejando la esencia de tus eventos, producciones y proyectos con estilo minimalista y cuidado en cada detalle.
        </p>

        <PortfolioCarousel items={portfolio} tipo='portafolio1' />
      </section>

      <section className="py-20 px-6">
        <PortfolioCarousel items={portfolio} tipo="portafolio2" />
      </section>
    </>
  );
}