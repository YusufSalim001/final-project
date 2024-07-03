import { useState } from 'react'

import './App.css'
import Router from './components/router/Router';
import Navbar from './components/NavBar'
import Footer from './components/Footer'



function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Navbar />
        <Router />
      <Footer />
    </>
  )
}

export default App
