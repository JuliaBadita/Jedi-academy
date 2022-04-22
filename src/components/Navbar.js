import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo_light-mode.png'
import logoDark from '../assets/logo_dark-mode.png'
import sun from '../assets/icon-light-mode.png'
import moon from '../assets/icon-dark-mode.png'
import '../stylesheets/main.scss'

const Navbar = () => {
  /// For the dark mode
  const [darkMode, setDarkMode] = React.useState(false)

  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [darkMode])

  /// The navbar itself
  return (
    <>
      <header className="header">
        {/* Version desktop  */}

        <img
          src={logo}
          className="navbar__logo navbar__logo-light"
          alt="logo académie Jedi"
        />
        <img
          src={logoDark}
          className="navbar__logo navbar__logo-dark"
          alt="logo académie Jedi version Dark Mode"
        />
        <nav className="navbar__desktop">
          <ul>
            <li>
              <NavLink to="/" className="navlinks__desktop">
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink to="/infos-utiles" className="navlinks__desktop">
                Infos utiles
              </NavLink>
            </li>
            <li>
              <NavLink to="/liste-des-membres" className="navlinks__desktop">
                Membres
              </NavLink>
            </li>
            <li>
              <NavLink to="/histoire" className="navlinks__desktop">
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

        {/* Dark mode toggle  */}
        <article className="dark-mode-toggle">
          <input
            type="checkbox"
            className="dark-mode-checkbox"
            id="dark-mode"
          />
          <label
            onClick={() => setDarkMode(!darkMode)}
            htmlFor="dark-mode"
            className="dark-mode-label"
          >
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
            <i className="dark-mode-ball"></i>
          </label>
        </article>
      </header>
    </>
  )
}

export default Navbar
