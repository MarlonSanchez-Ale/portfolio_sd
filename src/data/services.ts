import galeria from '../assets/Images/galeria.jpg';
import servicio1 from '../assets/Images/servicios/26.jpg';
import servicio2 from '../assets/Images/servicios/27.jpg';
import servicio3 from '../assets/Images/servicios/28.jpg';
import servicio4 from '../assets/Images/servicios/29.jpg';

export interface Service {
  title: string;
  desc: string;
  image: string;
}

export const services: Service[] = [
  { 
    title: 'Cobertura de Eventos', 
    desc: 'Capturamos cada instante de tu evento con elegancia y profesionalismo.', 
    image: servicio1
  },
  { 
    title: 'Gestión de Redes Sociales', 
    desc: 'Diseñamos y administrás tu estrategia digital de manera efectiva y sofisticada.', 
    image: servicio2
  },
  { 
    title: 'Producción Audiovisual', 
    desc: 'Generamos contenidos que transmiten tu esencia y elevan tu marca.', 
    image: servicio3
  },
  { 
    title: 'Desarrollo Web', 
    desc: 'Creamos sitios minimalistas, funcionales y con diseño que impacta.', 
    image: servicio4
  }
]
