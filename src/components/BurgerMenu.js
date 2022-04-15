import React, { Component } from 'react'
import $ from 'jquery'
import { NavLink } from 'react-router-dom'
import '../stylesheets/main.scss'

// Navbar version Mobile - animating it with jQuery

export default class Burger extends Component {
  jQuerycode = () => {
    // toggle icon
    $('.toggle-icon').click(function () {
      $('#nav-container').toggleClass('pushed')
    })

    // burger menu content
    $('.link').click(function () {
      $('.content').toggleClass('content-show')
    })
  }

  componentDidMount() {
    this.jQuerycode()
  }

  render() {
    return (
      <>
        <section class="reserve" id="nav-container">
          <div type="button" class="link toggle-icon" id="nav-icon">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
        </section>

        <section class="content">
          <ul id="li-head"></ul>
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
