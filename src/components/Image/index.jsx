import './image.styles.css'

import React from 'react'

function Image({ src, alt }) {
  return (
    <div className="image__container">
      <img className="image__image" src={src} alt={alt} />
    </div>
  )
}

Image.defaultProps = {
  alt: 'profile image'
}

export default Image
