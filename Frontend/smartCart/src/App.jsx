import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar' 
import Cart from './components/Cart'
import About from './components/About'
import NotFound from './components/NotFound'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home"exact element={<Home />} />
          <Route path="/cart"exact element={<Cart />} />
          <Route path="/about"exact element={<About />} />
          <Route path="/not-found"exact element={<NotFound />} />
          <Redirevt from="*" to="/not-found" />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
