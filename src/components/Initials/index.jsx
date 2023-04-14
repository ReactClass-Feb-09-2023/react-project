import './initials.styles.css'

import React from 'react'

function Initials({ userName }) {
  const firstNameInitial = userName.split(' ')[0][0]
  const secondNameInitial = userName.split(' ')[1][0]
  return (
    <div className="initials__container">
      <p className="initials__initials">
        {firstNameInitial}
        {secondNameInitial}
      </p>
    </div>
  )
}

export default Initials
