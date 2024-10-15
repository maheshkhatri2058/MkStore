import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Course from './components/Course'
import Home from './components/home'
import Login from './components/Login'



import './index.css'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
