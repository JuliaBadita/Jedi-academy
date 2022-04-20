import Burger from './components/BurgerMenu'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import CardsHome from './components/CardsHome.js'
import './stylesheets/main.scss'

function App() {
  return (
    <>
      <Navbar />
      <Burger />
      <CardsHome />
      {/* <Slider /> */}
      <Footer />
    </>
  )
}

export default App
