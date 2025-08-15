import './App.css'
// Importamos las secciones
import Hero from './Components/hero'
import PortfolioCarousel from './Components/portfoliocarousel'
import VideoCarousel from './Components/videoCarousel'
import Services from './Components/services'
import Footer from './Components/footer'

function App() {
  

  return (
    <div className="bg-white">
      <Hero />
      <PortfolioCarousel />
      <VideoCarousel />
      <Services />
      <Footer />
    </div>
  )
}

export default App
