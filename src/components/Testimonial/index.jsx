import './testimonial.styles.css'

import Avatar from '../Avatar'
import React from 'react'
function Testimonial({ user }) {
  const { name, profileImage, testimonial } = user
  return (
    <div className="testimonial__container">
      <Avatar name={name} imageSrc={profileImage.src} />
      <p className="testimonial__text">{testimonial}</p>
    </div>
  )
}

export default Testimonial
