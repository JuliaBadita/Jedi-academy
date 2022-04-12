import React from 'react'
import logo from '../assets/logo_light-mode.png'
import '../stylesheets/main.scss'

const Footer = () => {
  return (
    <>
      <footer>
        <article class="footer">
          <img src={logo} className="footer__logo" alt="logo académie Jedi" />©
          2022 Académie Jedi Team | All rights reserved
          <div class="footer__social-medias"></div>
        </article>
      </footer>
    </>
  )
}

export default Footer
