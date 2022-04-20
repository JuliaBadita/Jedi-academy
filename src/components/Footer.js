import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo_light-mode.png'
import { AiFillFacebook } from 'react-icons/ai'
import { FaInstagramSquare } from 'react-icons/fa'
import { BsYoutube } from 'react-icons/bs'
import '../stylesheets/main.scss'

const Footer = () => {
  return (
    <>
      <footer>
        {/* Line above the footer */}

        <hr />

        {/* Footer container
         */}
        <section className="footer__container">
          <div className="footer__row">
            {/* Article 1 - About us section  */}
            <article className="footer__about">
              <h4>À propos</h4>
              <p>
                Notre association a pour but de promouvoir l'oeuvre de Lucas «
                Star-Wars », et ce, grâce à la réalisation de combats au sabre
                laser, ouvert à tous ceux qui souhaiteraient s'y initier.
              </p>
            </article>

            {/* Article 2 - Middle section, with the social medias and logo  */}
            <article class="footer__middle">
              <div className="footer__logo-social-medias">
                {/* Logo  */}
                <img
                  src={logo}
                  className="footer__logo"
                  alt="logo académie Jedi"
                />
                <div className="footer__container-social-medias">
                  {/* Social medias */}
                  <Link to="/">
                    <AiFillFacebook
                      className="social-medias__logo"
                      alt="Lien vers notre
                    Facebook"
                    />
                  </Link>
                  <Link to="/">
                    <FaInstagramSquare
                      className="social-medias__logo"
                      alt="Lien vers notre Instagram"
                    />
                  </Link>
                  <Link to="/">
                    <BsYoutube
                      className="social-medias__logo"
                      alt="Lien vers notre Youtube"
                    />
                  </Link>
                </div>
              </div>
            </article>

            {/* Article 3 - Useful links section  */}
            <article className="footer__right">
              <h4>Liens utiles</h4>
              <ul>
                <li>
                  <a
                    href="https://www.starwars.com/"
                    className="footer__dark-mode"
                  >
                    Site officiel Star Wars
                  </a>
                </li>

                <li>
                  <a href="https://sabre-galactique.fr/">
                    Boutique Sabre Galactique
                  </a>
                </li>
                <li>
                  <a href="https://policies.google.com/?hl=fr">
                    Conditions d'utilisations
                  </a>
                </li>
              </ul>
            </article>

            {/* Article 4 - Contact section  */}
            <article className="footer__right">
              <h4>Rejoignez l'aventure !</h4>
              <ul>
                <li>
                  <a href="mailto:jedi-adademie@padawan.fr">
                    jedi-academie@padawan.fr
                  </a>
                </li>
                <li>
                  <a href="tel:+33612345678">0612345678</a>
                </li>
              </ul>
              <p>265 rue Montaigne, Lille 59000</p>
            </article>
          </div>
        </section>

        {/* Copyrights  */}
        <p className="footer__copyrights">
          © 2022 Académie Jedi Team | All rights reserved
        </p>
      </footer>
    </>
  )
}

export default Footer
