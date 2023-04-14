import Avatar from './components/Avatar'
import React from 'react'
function App() {
  return (
    <Avatar
      name="John Doe"
      imageSrc={'https://picsum.photos/200/300'}
      fontStyles={{ color: 'red' }}
    />
  )
}
//https://placehold.co/400
export default App
// JSX Rules
// it must have one single root element per component
// class attribute x , use className
// for attribute x , use htmlFor
// to render valid js expression use { }
// to pass attribute values use { }, only exception is strings ""
