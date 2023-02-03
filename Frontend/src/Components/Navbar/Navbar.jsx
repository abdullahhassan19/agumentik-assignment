import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div className='Navbar-Main'>
        <div className='Navbar-Left'>
          <Link to="#">E_Learn</Link>
          <Link to="#">Courses</Link>
          <Link to="#">Blog</Link>
          <Link to="#">About Us</Link>
        </div>
        <div className='Navbar-Right'>

        </div>
    </div>
  )
}

export default Navbar
