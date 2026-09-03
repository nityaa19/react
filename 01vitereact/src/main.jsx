import react from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'



// const reactElement ={
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const reactElement = react.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'click me to visit google'
)

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google </a>
)

createRoot(document.getElementById('root')).render(
  <App />
)
