import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
      <>
          <h1>logo</h1>
          <nav>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/dashboard/profile">Profile</Link>
              <Link to="/dashboard/settings">Settings</Link>
          </nav>
      </>
  )
}

export default Navbar