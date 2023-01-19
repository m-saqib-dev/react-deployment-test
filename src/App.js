import React from 'react'
import {BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar'
import './App.css'
import Home from './Home'
import Contact from './Contact'
const App = () => {
  return (
    <Router>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='contactus' element={<Contact/>}></Route>
      <Route path='about' element={<About/>}></Route>
    </Routes>
    </Router>
  )
}

const About = () => {
  
  return (
    <div className='he'>About</div>
  )
}

export default App