import './testimonial.styles.css'

import React, { useState } from 'react'

import Avatar from '../Avatar'

function Testimonial({ user }) {
  const { name, profileImage, testimonial } = user
  const [isHidden, setIsHidden] = useState(false)

  const handleOnClick = () => {
    setIsHidden(true)
  }

  return (
    <div className={`testimonial__container ${isHidden ? 'hide' : ''}`}>
      <Avatar name={name} imageSrc={profileImage.src} />
      <p className="testimonial__text">{testimonial}</p>
      <button onClick={handleOnClick} className="testimonial__hideBtn">
        Hide
      </button>
    </div>
  )
}

export default Testimonial
