import React from 'react'
import { Link } from 'react-router-dom'
import logo from './assets/logo_light-mode.png'
import './stylesheets/layout/_navigation.scss'

const Navbar = () => {
  return (
    <header className="header">
      <img src={logo} className="logo" alt="logo académie Jedi" />
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">Infos utiles</Link>
          </li>
          <li>
            <Link to="/members">Membres</Link>
          </li>
          <li>
            <Link to="/history">Notre histoire</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
