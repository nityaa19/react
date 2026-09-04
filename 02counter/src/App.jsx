import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter]=useState(15)
  // let counter=5
  function addValue(){
    counter+=1
    setCounter(counter)
    
  }

  function removeValue(){
    // counter-=1
    setCounter(counter-1)
  }
  

  return (
    <>
      <h1>Chai aur react</h1>
      <h3>Counter value: {counter}</h3>
      <button onClick={addValue}>Add value {counter}</button>
      <br>
      </br>
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
