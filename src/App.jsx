import { useState } from 'react'
import reactLogo from './assets/react.svg';
import chinguLogo from './assets/chingo-house-logo.png';
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <Footer />
      </div>
      
    </>
  )
}

export default App
