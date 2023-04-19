import React from 'react'
import Testimonials from './components/Testimonials'

const users = [
  {
    id: 'fed71864-701f-4423-bbf1-08ec0072392e',
    name: 'John Doe',
    profileImage: { src: 'https://picsum.photos/200/300' },
    testimonial:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, quisquam.'
  },
  {
    id: '14485576-3f81-418b-8711-6e3c3899efb1',
    name: 'William Doe',
    profileImage: { src: 'https://picsum.photos/200/300' },
    testimonial:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, quisquam.'
  },
  {
    id: '2a6a15d0-692a-4549-9165-579eef89b8e7',
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
