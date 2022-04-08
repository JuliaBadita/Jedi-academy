import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './assets/logo_light-mode.png'
import './stylesheets/main.scss'

const Navbar = () => {
  return (
    <header className="header">
      <img src={logo} className="navbar__logo" alt="logo académie Jedi" />
      <nav>
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about">Infos utiles</NavLink>
          </li>
          <li>
            <NavLink to="/members">Membres</NavLink>
          </li>
          <li>
            <NavLink to="/history">Notre histoire</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        <hr className="navbar__underline" />
      </nav>
    </header>
  )
}

export default Navbar
