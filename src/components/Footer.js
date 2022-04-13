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
        <article>
          <h4>À propos</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quae
            sed perferendis eius molestiae explicabo itaque quasi nesciunt
            commodi qui! Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Necessitatibus, labore.
          </p>
        </article>
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
        <article>
          <h4>Liens utiles</h4>
          <Link to="/"> Site officiel Star Wars</Link>
          <Link to="/">Boutique Sabre Galactique</Link>
          <Link to="/">Conditions d'utilisations</Link>
        </article>
        <article>
          <h4>Rejoignez l'aventure !</h4>
          <p>jedi-academie@padawan.fr</p>
          <p>0612345678</p>
        </article>
      </footer>
    </>
  )
}

export default Footer
