import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Route, Routes, Link }  from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home'
import PokeDetails from './pages/PokeDetails'

function App() {

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/poke/:id" element={<PokeDetails />} />
      </Routes>
    </>
  )
}

export default App
