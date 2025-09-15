import './App.css'
// Importamos las secciones
import Hero from './Components/hero'
import PortfolioLayout from './layout/portfolioLayout'
import VideoCarousel from './Components/videoCarousel'
import Services from './Components/services'
import Footer from './Components/footer'

function App() {
  

  return (
    <div className="bg-white">
      <Hero />
      <PortfolioLayout />
      <VideoCarousel />
      <Services />
      <Footer />
    </div>
  )
}

export default App
