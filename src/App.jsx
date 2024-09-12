import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Friends from './Friends'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <h1>React Core Concepts Practice</h1>
      <Friends></Friends>
      
    </>
  )
}

export default App
