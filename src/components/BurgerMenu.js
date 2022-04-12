import React, { Component } from 'react'
import $ from 'jquery'
// import { NavLink } from 'react-router-dom'
import '../stylesheets/main.scss'

// Navbar version Mobile - animating it with jQuery

export default class Burger extends Component {
  jQuerycode = () => {
    $('.toggle-icon').click(function () {
      $('#nav-container').toggleClass('pushed')
    })
  }

  componentDidMount() {
    this.jQuerycode()
  }
  render() {
    return (
      <section id="nav-container">
        <div class="toggle-icon">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
        {/* 
        <ul>
          <li>
            <NavLink>Home</NavLink>
          </li>
          <li class="green">
            <NavLink>Jedi</NavLink>
          </li>
          <li class="red">
            <NavLink>Sith</NavLink>
          </li>
          <li class="yellow">
            <NavLink>Sentinel</NavLink>
          </li>
          <li class="purple">
            <NavLink>Samuel L. Jackson</NavLink>
          </li>
        </ul> */}

        {/* <article class="menu__box">
          <a href="./index.html" class="menu__item">
            Accueil
          </a>
          <a href="#about" class="menu__item">
            Infos utiles
          </a>
          <a href="#parcours" class="menu__item">
            Membres
          </a>
          <a href="#portfolio" class="menu__item">
            Notre histoire
          </a>
          <a href="#contact" class="menu__item">
            Contact
          </a>
        </article> */}
      </section>
    )
  }
}
