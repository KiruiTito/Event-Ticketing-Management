import React from 'react'
import { Link } from 'react-router-dom';
import "./header.css"

function Header() {
  return (
  <div className='container_home__container'>
      <div className='home_container'>

        <h1>Crowd-Tix</h1>

        <div className='home_details'>
          <Link to="/home">
            <h3 >Home</h3>
          </Link>
          <Link to="/About us">
            <h3>About Us</h3>
          </Link>
          <Link to="/event">
            <h3>Events</h3>
          </Link>
          <Link to="/">
            <h3>Logout!</h3>
          </Link>

        </div>
    </div>
  </div>
  
  
  
  )
}

export default Header