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
        <hr />
        <section className="footer__container">
          <div className="footer__row">
            {/* Article 1 - About section  */}
            <article className="footer__about">
              <h4 className="footer__titles">À propos</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                quae explicabo itaque quasi nesciunt commodi qui! Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Necessitatibus,
                labore.
              </p>
            </article>

            {/* Article 2 - Middle section, with the social medias and logo  */}
            <article class="footer__middle">
              <div className="footer__logo-social-medias">
                <img
                  src={logo}
                  className="footer__logo"
                  alt="logo académie Jedi"
                />
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
              </div>
            </article>
            {/* Article 3 - Useful links section  */}
            <article className="footer__right">
              <h4 className="footer__titles">Liens utiles</h4>
              <ul>
                <li>
                  <Link to="/"> Site officiel Star Wars</Link>
                </li>

                <li>
                  <Link to="/">Boutique Sabre Galactique</Link>
                </li>
                <li>
                  <Link to="/">Conditions d'utilisations</Link>
                </li>
              </ul>
            </article>
            {/* Article 4 - Contact section  */}
            <article className="footer__right">
              <h4 className="footer__titles">Rejoignez l'aventure !</h4>
              <ul>
                <li>
                  <p>jedi-academie@padawan.fr</p>
                </li>
                <li>
                  <p>0612345678</p>
                </li>
              </ul>
              <p>265 rue Montaigne, Lille 59000</p>
            </article>
          </div>
        </section>
        <p className="footer__copyrights">
          © 2022 Académie Jedi Team | All rights reserved
        </p>
      </footer>
    </>
  )
}

export default Footer
