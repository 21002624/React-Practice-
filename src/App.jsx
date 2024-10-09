import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ParentComponent from './ParentComponent'
import Props from './Props'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ParentComponent />
      <Props />
    </>
  )
}

export default App