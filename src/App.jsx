import Beneficios from "./components/Beneficios"
import Colabora from "./components/Colabora"
import Contenido from "./components/Contenido"
import Cuadros from "./components/Cuadros"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Membresia from "./components/Membresia"
import Membresia1 from "./components/Membresia1"
import Miembro from "./components/Miembro"
import Slider from "./components/Slider"
import Unite from "./components/Unite"


function App() {

  return (
    <div >
      <Header />
      <Hero />
      <Slider />
      <Miembro />
      <Colabora/>
      <Contenido />
      <Membresia />
      <Cuadros />
      <Beneficios />
      {/* <Unite/>
      <Membresia1/>
      <Footer/> */}
    </div>
  )
}

export default App
