import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <ul className='nav'>
    <Link to="/">Home</Link>
    <Link to="about">About us</Link>
    <Link to="contactus">Contact us</Link>
    <Outlet/>
    </ul>
  )
}

export default Navbar