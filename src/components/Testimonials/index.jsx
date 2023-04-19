import './testimonials.styles.css'

import React from 'react'
import Testimonial from '../Testimonial'

function Testimonials({ users }) {
  return (
    <ul className="testimonials__container">
      {users.map(user => (
        <li key={crypto.randomUUID()}>
          <Testimonial user={user} />
        </li>
      ))}
    </ul>
  )
}

export default Testimonials
