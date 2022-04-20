import React, { Component } from 'react'
import $ from 'jquery'
import { NavLink } from 'react-router-dom'
import '../stylesheets/main.scss'

// Navbar version Mobile - animating it with jQuery

export default class Burger extends Component {
  jQuerycode = () => {
    // toggle icon
    $('.burger__toggle-icon').click(function () {
      $('#burger-menu__container').toggleClass('pushed')
    })

    // burger menu content
    $('.burger__links').click(function () {
      $('.burger-menu__content').toggleClass('burger-menu__content-show')
    })
  }

  componentDidMount() {
    this.jQuerycode()
  }

  render() {
    return (
      <>
        {/* Burger Menu icon  */}
        <section id="burger-menu__container">
          <div type="button" className="burger__links burger__toggle-icon">
            <span className="burger__bar"></span>
            <span className="burger__bar"></span>
            <span className="burger__bar"></span>
          </div>
        </section>

        {/* Burger Menu content  */}
        <section className="burger-menu__content">
          <ul></ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about">Infos utiles</NavLink>
          </li>
          <li>
            <NavLink to="/about">Membres</NavLink>
          </li>
          <li>
            <NavLink to="/about">Notre histoire</NavLink>
          </li>
          <li>
            <NavLink to="/about">Contact</NavLink>
          </li>
        </section>
      </>
    )
  }
}
