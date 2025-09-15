import daika1 from '../assets/Images/daikastore/daika1.jpg'
import daika2 from '../assets/Images/daikastore/daika2.jpg'
import daika3 from '../assets/Images/daikastore/3.jpg'
import daika4 from '../assets/Images/daikastore/4.jpg'
import daika5 from '../assets/Images/daikastore/5.jpg'
import daika6 from '../assets/Images/daikastore/6.jpg'
import daika7 from '../assets/Images/daikastore/7.jpg'
import daika8 from '../assets/Images/daikastore/8.jpg'
import daika10 from '../assets/Images/daikastore/10.jpg'
import daika11 from '../assets/Images/daikastore/11.jpg'
import daika12 from '../assets/Images/daikastore/12.jpg'
import daykalogo from '../assets/Images/daikastore/logodaykas.jpeg'

/* Fireplace imagenes */
import fireplace1 from '../assets/Images/fireplace/8.jpg'
import fireplace2 from '../assets/Images/fireplace/9.jpg'
import fireplace3 from '../assets/Images/fireplace/9.jpg'
import fireplace4 from '../assets/Images/fireplace/13.jpg'
import fireplace5 from '../assets/Images/fireplace/15.jpg'
import fireplace6 from '../assets/Images/fireplace/26.jpg'
import fireplace7 from '../assets/Images/fireplace/28.jpg'
import fireplace8 from '../assets/Images/fireplace/29.jpg'
import fireplace9 from '../assets/Images/fireplace/30.jpg'
import fireplace10 from '../assets/Images/fireplace/40.jpg'
import fireplacelogo from '../assets/Images/fireplace/logofireplace.jpg'
import fireplace11 from '../assets/Images/fireplace/1.jpg'
import fireplace12 from '../assets/Images/fireplace/2.jpg'
import fireplace14 from '../assets/Images/fireplace/3.jpg'
import fireplace15 from '../assets/Images/fireplace/4.jpg'
import fireplace16 from '../assets/Images/fireplace/7.jpg'

/* Kensof imagenes */
import kensof1 from '../assets/Images/kensof/1.jpg'
import kensof2 from '../assets/Images/kensof/7.jpg'
import kensof3 from '../assets/Images/kensof/9.jpg'
import kensof4 from '../assets/Images/kensof/19.jpg'
import kensof5 from '../assets/Images/kensof/29.jpg'
import logokensof from '../assets/Images/kensof/logokensof.jpeg'

/* Boda Andino Espinoza imagenes */
import boda1 from '../assets/Images/bodaharryston/1.jpg'
import boda5 from '../assets/Images/bodaharryston/5.jpg'
import boda6 from '../assets/Images/bodaharryston/6.jpg'
import boda8 from '../assets/Images/bodaharryston/8.jpg'
import boda23 from '../assets/Images/bodaharryston/23.jpg'
import boda29 from '../assets/Images/bodaharryston/29.jpg'

/* Flower Online Anto imagenes - VERIFICAR NOMBRES DE ARCHIVO */
import floweranto1 from '../assets/Images/floweranto/1.jpg'
import floweranto2 from '../assets/Images/floweranto/5.jpg'
import floweranto4 from '../assets/Images/floweranto/9.jpg'
import floweranto5 from '../assets/Images/floweranto/12.jpg'
import floweranto6 from '../assets/Images/floweranto/14.jpg'
import logofloweranto from '../assets/Images/floweranto/logofloweranto.jpeg'

/* Despedida Flavia imagenes */
import despedida1 from '../assets/Images/despedidaFlavia/IMG_7945.jpg'
import despedida2 from '../assets/Images/despedidaFlavia/IMG_7989.jpg'
import despedida3 from '../assets/Images/despedidaFlavia/IMG_7990.jpg'
import despedida4 from '../assets/Images/despedidaFlavia/IMG_8034.jpg'
import despedida5 from '../assets/Images/despedidaFlavia/IMG_8038.jpg'


export interface PortfolioItem {
  title: string;
  image: string;
  description: string;
  date: string;
  logo?: string;
  tipo?: string;
}

export const portfolio: PortfolioItem[] = [
  { title: 'Daykas Store', date: '30/06/25', image: daika1, description: 'Sesión de fotos para negocio', logo: daykalogo, tipo: 'portafolio1' },
  { title: 'Daykas Store', date: '30/06/25', image: daika2, description: 'Sesión de fotos para negocio', logo: daykalogo, tipo: 'portafolio1' },
  { title: 'Daykas Store', date: '30/06/25', image: daika3, description: 'Sesión de fotos para negocio', logo: daykalogo, tipo: 'portafolio1' },
  { title: 'Daykas Store', date: '30/06/25', image: daika4, description: 'Sesión de fotos para negocio', logo: daykalogo, tipo: 'portafolio1' },
  { title: 'Daykas Store', date: '30/06/25', image: daika5, description: 'Sesión de fotos para negocio', logo: daykalogo, tipo: 'portafolio1' },
  { title: 'Daykas Store', date: '30/06/25', image: daika6, description: 'Sesión de fotos para negocio', logo: daykalogo, tipo: 'portafolio1' },
  { title: 'Daykas Store', date: '30/06/25', image: daika7, description: 'Sesión de fotos para negocio', logo: daykalogo, tipo: 'portafolio1' },
  { title: 'Daykas Store', date: '30/06/25', image: daika8, description: 'Sesión de fotos para negocio', logo: daykalogo, tipo: 'portafolio1' },
  { title: 'Daykas Store', date: '30/06/25', image: daika10, description: 'Sesión de fotos para negocio', logo: daykalogo, tipo: 'portafolio1' },
  { title: 'Daykas Store', date: '30/06/25', image: daika11, description: 'Sesión de fotos para negocio', logo: daykalogo, tipo: 'portafolio1' },
  { title: 'Daykas Store', date: '30/06/25', image: daika12, description: 'Sesión de fotos para negocio', logo: daykalogo, tipo: 'portafolio1' },
  { title: 'Fireplace', date: '30/06/25', image: fireplace1, description: 'Sesión de fotos para negocio', logo: fireplacelogo, tipo: 'portafolio1' },
  { title: 'Fireplace', date: '30/06/25', image: fireplace2, description: 'Sesión de fotos para negocio', logo: fireplacelogo, tipo: 'portafolio1' },
  { title: 'Fireplace', date: '30/06/25', image: fireplace3, description: 'Sesión de fotos para negocio', logo: fireplacelogo, tipo: 'portafolio1' },
  { title: 'Fireplace', date: '30/06/25', image: fireplace4, description: 'Sesión de fotos para negocio', logo: fireplacelogo, tipo: 'portafolio1' },
  { title: 'Fireplace', date: '30/06/25', image: fireplace5, description: 'Sesión de fotos para negocio', logo: fireplacelogo, tipo: 'portafolio1' },
  { title: 'Fireplace', date: '30/06/25', image: fireplace6, description: 'Sesión de fotos para negocio', logo: fireplacelogo, tipo: 'portafolio1' },
  { title: 'Fireplace', date: '30/06/25', image: fireplace7, description: 'Sesión de fotos para negocio', logo: fireplacelogo, tipo: 'portafolio1' },
  { title: 'Fireplace', date: '30/06/25', image: fireplace8, description: 'Sesión de fotos para negocio', logo: fireplacelogo, tipo: 'portafolio1' },
  { title: 'Fireplace', date: '30/06/25', image: fireplace9, description: 'Sesión de fotos para negocio', logo: fireplacelogo, tipo: 'portafolio1' },
  { title: 'Fireplace', date: '30/06/25', image: fireplace10, description: 'Sesión de fotos para negocio', logo: fireplacelogo, tipo: 'portafolio1' },
  { title: 'Fireplace', date: '30/06/25', image: fireplace11, description: 'Sesión de fotos para negocio', logo: fireplacelogo, tipo: 'portafolio1' },
  { title: 'Fireplace', date: '30/06/25', image: fireplace12, description: 'Sesión de fotos para negocio', logo: fireplacelogo, tipo: 'portafolio1' },
  { title: 'Fireplace', date: '30/06/25', image: fireplace14, description: 'Sesión de fotos para negocio', logo: fireplacelogo, tipo: 'portafolio1' },
  { title: 'Fireplace', date: '30/06/25', image: fireplace15, description: 'Sesión de fotos para negocio', logo: fireplacelogo, tipo: 'portafolio1' },
  { title: 'Fireplace', date: '30/06/25', image: fireplace16, description: 'Sesión de fotos para negocio', logo: fireplacelogo, tipo: 'portafolio1' },
  { title: 'Team Bride', date: '15/09/25', image: despedida2, description: 'Sesiones de fotos para días especiales', logo: despedida2, tipo: 'portafolio2' },
  { title: 'Team Bride', date: '15/09/25', image: despedida3, description: 'Sesiones de fotos para días especiales', logo: despedida2, tipo: 'portafolio2' },
  { title: 'Team Bride', date: '15/09/25', image: despedida1, description: 'Sesiones de fotos para días especiales', logo: despedida2, tipo: 'portafolio2' },
  { title: 'Team Bride', date: '15/09/25', image: despedida4, description: 'Sesiones de fotos para días especiales', logo: despedida2, tipo: 'portafolio2' },
  { title: 'Team Bride', date: '15/09/25', image: despedida5, description: 'Sesiones de fotos para días especiales', logo: despedida2, tipo: 'portafolio2' },
  { title: 'Kensof', date: '15/09/25', image: kensof2, description: 'Sesión de fotos para negocio', logo: logokensof, tipo: 'portafolio2' },
  { title: 'Kensof', date: '15/09/25', image: kensof1, description: 'Sesión de fotos para negocio', logo: logokensof, tipo: 'portafolio2' },
  { title: 'Kensof', date: '15/09/25', image: kensof3, description: 'Sesión de fotos para negocio', logo: logokensof, tipo: 'portafolio2' },
  { title: 'Kensof', date: '15/09/25', image: kensof4, description: 'Sesión de fotos para negocio', logo: logokensof, tipo: 'portafolio2' },
  { title: 'Kensof', date: '15/09/25', image: kensof5, description: 'Sesión de fotos para negocio', logo: logokensof, tipo: 'portafolio2' },
  { title: 'Boda Andino Espinoza', date: '15/09/25', image: boda1, description: 'Cobertura de boda', logo: boda1, tipo: 'portafolio2' },
  { title: 'Boda Andino Espinoza', date: '15/09/25', image: boda5, description: 'Cobertura de boda', logo: boda1, tipo: 'portafolio2' },
  { title: 'Boda Andino Espinoza', date: '15/09/25', image: boda6, description: 'Cobertura de boda', logo: boda1, tipo: 'portafolio2' },
  { title: 'Boda Andino Espinoza', date: '15/09/25', image: boda8, description: 'Cobertura de boda', logo: boda1, tipo: 'portafolio2' },
  { title: 'Boda Andino Espinoza', date: '15/09/25', image: boda23, description: 'Cobertura de boda', logo: boda1, tipo: 'portafolio2' },
  { title: 'Boda Andino Espinoza', date: '15/09/25', image: boda29, description: 'Cobertura de boda', logo: boda1, tipo: 'portafolio2' },
  { title: 'Flower Online Anto', date: '15/09/25', image: floweranto1, description: 'Contenido para negocios', logo: logofloweranto, tipo: 'portafolio2' },
  { title: 'Flower Online Anto', date: '15/09/25', image: floweranto2, description: 'Contenido para negocios', logo: logofloweranto, tipo: 'portafolio2' },
  { title: 'Flower Online Anto', date: '15/09/25', image: floweranto4, description: 'Contenido para negocios', logo: logofloweranto, tipo: 'portafolio2' },
  { title: 'Flower Online Anto', date: '15/09/25', image: floweranto5, description: 'Contenido para negocios', logo: logofloweranto, tipo: 'portafolio2' },
  { title: 'Flower Online Anto', date: '15/09/25', image: floweranto6, description: 'Contenido para negocios', logo: logofloweranto, tipo: 'portafolio2' },
];