import React from 'react'
import Testimonials from './components/Testimonials'

const users = [
  {
    name: 'John Doe',
    profileImage: { src: 'https://picsum.photos/200/300' },
    testimonial:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, quisquam.'
  },
  {
    name: 'William Doe',
    profileImage: { src: 'https://picsum.photos/200/300' },
    testimonial:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, quisquam.'
  },
  {
    name: 'Johan Doe',
    profileImage: { src: 'https://picsum.photos/200/300' },
    testimonial:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, quisquam.'
  }
]
function App() {
  return <Testimonials users={users} />
}
//https://placehold.co/400
export default App
// JSX Rules
// it must have one single root element per component
// class attribute x , use className
// for attribute x , use htmlFor
// to render valid js expression use { }
// to pass attribute values use { }, only exception is strings ""
