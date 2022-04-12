import React, { Component } from 'react'
import $ from 'jquery'
import '../stylesheets/main.scss'

// Navbar version Mobile

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
      </section>
    )
  }
}
