import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo_light-mode.png'
import sun from '../assets/sun.png'
import moon from '../assets/moon.png'
import '../stylesheets/main.scss'

const Navbar = () => {
  return (
    <header className="header">
      {/* Version desktop  */}

      <img src={logo} className="navbar__logo" alt="logo académie Jedi" />
      <nav className="navbar__desktop">
        <ul>
          <li>
            <NavLink to="/" className="navlinks__desktop">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navlinks__desktop">
              Infos utiles
            </NavLink>
          </li>
          <li>
            <NavLink to="/members" className="navlinks__desktop">
              Membres
            </NavLink>
          </li>
          <li>
            <NavLink to="/history" className="navlinks__desktop">
              Notre histoire
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="navlinks__desktop">
              Contact
            </NavLink>
          </li>
        </ul>
        <hr className="navbar__underline" />
      </nav>

      {/* Dark mode button  */}

      <article class="dark-mode-toggle">
        <input type="checkbox" class="dark-mode-checkbox" id="dark-mode" />
        <label for="dark-mode" class="dark-mode-label">
          <img
            src={moon}
            className="moon__dark-mode"
            alt="Lune pour le bouton dark mode"
          />
          <img
            src={sun}
            className="sun__dark-mode"
            alt="Soleil pour le bouton dark mode"
          />
          <i class="dark-mode-ball"></i>
        </label>
      </article>
    </header>
  )
}

export default Navbar
