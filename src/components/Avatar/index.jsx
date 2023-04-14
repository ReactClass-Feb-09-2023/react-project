import './avatar.styles.css'

import Initials from '../Initials'
import React from 'react' // not mandatory

const spanStyles = {
  fontSize: '1.25rem'
}

function Avatar({ name, image, fontStyles }) {
  const hasImage = !!image
  return (
    <div className="avatar__container">
      {hasImage ? (
        <img className="avatar__image" src={image} alt={'profile image'} />
      ) : (
        <Initials userName={name} />
      )}
      <span className="avatar__name">{name}</span>
    </div>
  )
}

Avatar.defaultProps = {
  // image: 'https://placehold.co/400',
  fontStyles: { color: 'blue' }
}
export default Avatar

// props -> properties
// conditional rendering
