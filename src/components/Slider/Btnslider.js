import React from 'react'
import leftArrow from './icons/left-arrow.svg'
import rightArrow from './icons/right-arrow.svg'

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide)

  return (
    <button
      onClick={moveSlide}
      // adding a dynamic class to the button => checks which direction to add the correct classes ex: if direction = next then add class btn-slide + class next
      // if it is false then add the class prev instead of next

      className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}
    >
      {/* Here = the same as above :  if direction = next = true then use rightArrow and if it's false = leftArrow*/}
      <img src={direction === 'next' ? rightArrow : leftArrow} alt="" />
    </button>
  )
}
