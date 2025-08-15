import galeria from '../assets/Images/galeria.jpg';

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




export interface PortfolioItem {
  title: string;
  image: string;
  description: string;
  date: string;
  logo?: string;
}

export const portfolio: PortfolioItem[] = [
  { title: 'Daykas Store', date: '30/06/25', image: daika1, description: 'Sesión de fotos para negocio', logo: daykalogo },
  { title: 'Daykas Store', date: '30/06/25', image: daika2, description: 'Sesión de fotos para negocio', logo: daykalogo },
  { title: 'Daykas Store', date: '30/06/25', image: daika3, description: 'Sesión de fotos para negocio', logo: daykalogo },
  { title: 'Daykas Store', date: '30/06/25', image: daika4, description: 'Sesión de fotos para negocio', logo: daykalogo },
  { title: 'Daykas Store', date: '30/06/25', image: daika5, description: 'Sesión de fotos para negocio', logo: daykalogo },
  { title: 'Daykas Store', date: '30/06/25', image: daika6, description: 'Sesión de fotos para negocio', logo: daykalogo },
  { title: 'Daykas Store', date: '30/06/25', image: daika7, description: 'Sesión de fotos para negocio', logo: daykalogo },
  { title: 'Daykas Store', date: '30/06/25', image: daika8, description: 'Sesión de fotos para negocio', logo: daykalogo },
  { title: 'Daykas Store', date: '30/06/25', image: daika10, description: 'Sesión de fotos para negocio', logo: daykalogo },
  { title: 'Daykas Store', date: '30/06/25', image: daika11, description: 'Sesión de fotos para negocio', logo: daykalogo },
  { title: 'Daykas Store', date: '30/06/25', image: daika12, description: 'Sesión de fotos para negocio', logo: daykalogo },
  { title: 'Fireplace', date: '30/06/25', image: fireplace1, description: 'Sesión de fotos para negocio', logo: fireplacelogo },
  { title: 'Fireplace', date: '30/06/25', image: fireplace2, description: 'Sesión de fotos para negocio', logo: fireplacelogo },
  { title: 'Fireplace', date: '30/06/25', image: fireplace3, description: 'Sesión de fotos para negocio', logo: fireplacelogo },
  { title: 'Fireplace', date: '30/06/25', image: fireplace4, description: 'Sesión de fotos para negocio', logo: fireplacelogo },
  { title: 'Fireplace', date: '30/06/25', image: fireplace5, description: 'Sesión de fotos para negocio', logo: fireplacelogo },
  { title: 'Fireplace', date: '30/06/25', image: fireplace6, description: 'Sesión de fotos para negocio', logo: fireplacelogo },
  { title: 'Fireplace', date: '30/06/25', image: fireplace7, description: 'Sesión de fotos para negocio', logo: fireplacelogo },
  { title: 'Fireplace', date: '30/06/25', image: fireplace8, description: 'Sesión de fotos para negocio', logo: fireplacelogo },
  { title: 'Fireplace', date: '30/06/25', image: fireplace9, description: 'Sesión de fotos para negocio', logo: fireplacelogo },
  { title: 'Fireplace', date: '30/06/25', image: fireplace10, description: 'Sesión de fotos para negocio', logo: fireplacelogo },
  { title: 'Fireplace', date: '30/06/25', image: fireplace11, description: 'Sesión de fotos para negocio', logo: fireplacelogo },
  { title: 'Fireplace', date: '30/06/25', image: fireplace12, description: 'Sesión de fotos para negocio', logo: fireplacelogo },
  { title: 'Fireplace', date: '30/06/25', image: fireplace14, description: 'Sesión de fotos para negocio', logo: fireplacelogo },
  { title: 'Fireplace', date: '30/06/25', image: fireplace15, description: 'Sesión de fotos para negocio', logo: fireplacelogo },
  { title: 'Fireplace', date: '30/06/25', image: fireplace16, description: 'Sesión de fotos para negocio', logo: fireplacelogo },
];
