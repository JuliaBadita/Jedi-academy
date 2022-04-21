import React from 'react'
import card1 from '../assets/img1.jpg'
import card2 from '../assets/img2.jpg'
import card3 from '../assets/img3.jpg'
import '../stylesheets/main.scss'

const cardsHome = () => {
  return (
    <>
      <div className="div__container">
        <section className="home__cards-grid">
          <h1 className="home__card-title">
            L'Académie Jedi, association de combats au labre laser
          </h1>
          <article className="home__cards-container">
            <img
              src={card1}
              alt="combat au labre laser"
              className="card1__home cards__home"
            />
            <img
              src={card2}
              alt="combat au labre laser"
              className="card2__home cards__home"
            />
            <img
              src={card3}
              alt="combat au labre laser"
              className="card3__home cards__home"
            />
          </article>
        </section>
      </div>
    </>
  )
}

export default cardsHome
