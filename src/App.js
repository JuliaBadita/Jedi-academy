import Burger from './components/BurgerMenu'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './stylesheets/main.scss'

function App() {
  return (
    <>
      <Navbar />
      <Burger />
      <div className="page-container">
        <Footer />
      </div>
    </>
  )
}

export default App
