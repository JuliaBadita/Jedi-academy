import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo_light-mode.png'
import '../stylesheets/main.scss'

const Navbar = () => {
  return (
    <header className="header">
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
    </header>
  )
}

export default Navbar
