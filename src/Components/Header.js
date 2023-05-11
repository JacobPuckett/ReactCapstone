import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'


function Header() {
 
  return (
    <div className='head'>
    <nav className="nav">
      <h1 className='title'>MovieList</h1>
      <ul>
          <li>
              <Link to="/auth">Login / Sign Up</Link>
              </li><li>
              <Link to="/list">MovieList</Link>
              </li><li>
              <Link to="/">Home</Link>
          </li>
      </ul>
  </nav>
  <Outlet />
  </div>
  )
}

export default Header

