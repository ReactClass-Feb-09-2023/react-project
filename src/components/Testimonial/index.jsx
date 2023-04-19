import './testimonial.styles.css'

import React, { useState } from 'react'

import Avatar from '../Avatar'

function Testimonial({ user }) {
  const { name, profileImage, testimonial } = user
  const [containerStyles, setContainerStyles] = useState('')

  const handleOnClick = () => {
    setContainerStyles('hide')
  }

  return (
    <div className={`testimonial__container ${containerStyles}`}>
      <Avatar name={name} imageSrc={profileImage.src} />
      <p className="testimonial__text">{testimonial}</p>
      <button onClick={handleOnClick} className="testimonial__hideBtn">
        Hide
      </button>
    </div>
  )
}

export default Testimonial
