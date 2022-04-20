import Burger from './components/BurgerMenu'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import CardsHome from './components/CardsHome.js'
import './stylesheets/main.scss'
import Posts from './pages/PostsPage.js'
import Post from './pages/PostPage.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Burger />
      <CardsHome />
      <Footer />
      <Router>
        <Routes>
          <Route path="/" exact element={<div>Accueil</div>} />
          <Route path="/infos-utiles" exact element={<Posts />} />
          <Route path="/infos-utiles/:slug" element={<Post />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
