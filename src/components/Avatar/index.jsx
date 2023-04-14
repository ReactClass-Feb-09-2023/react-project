import './avatar.styles.css'

import Image from '../Image'
import Initials from '../Initials'
import React from 'react' // not mandatory

function Avatar({ name, imageSrc, fontStyles }) {
  const hasImage = !!imageSrc
  return (
    <div className="avatar__container">
      {hasImage ? <Image src={imageSrc} /> : <Initials userName={name} />}
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
