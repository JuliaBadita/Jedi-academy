import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo_light-mode.png'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import youtube from '../assets/youtube.svg'
import '../stylesheets/main.scss'

const Footer = () => {
  return (
    <>
      <footer>
        <article class="footer">
          <img src={logo} className="footer__logo" alt="logo académie Jedi" />
          <div className="footer__social-medias">
            <Link to="/">
              <img
                src={facebook}
                className="social-medias__logo"
                alt="Lien vers notre Facebook"
              />
            </Link>
            <Link to="/">
              <img
                src={instagram}
                className="social-medias__logo"
                alt="Lien vers notre Instagram"
              />
            </Link>
            <Link to="/">
              <img
                src={youtube}
                className="social-medias__logo"
                alt="Lien vers notre Youtube"
              />
            </Link>
          </div>
          © 2022 Académie Jedi Team | All rights reserved
        </article>
      </footer>
    </>
  )
}

export default Footer
