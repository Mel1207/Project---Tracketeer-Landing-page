import React from 'react'
import mainLogo from '../assets/tracketeer-logo.png'

const Navigation = () => {
  return (
    <nav className='navbar'>
      <div className="top-navigation">
        <span>Try out the beta for free 🔥</span>
      </div>
      <div className="container">
        <div className="main-navigation">
          <a href="#!">
            <img src={mainLogo} alt="Tracketeer logo" />
          </a>

          <ul className='nav-links'>
            <li>Home</li>
            <li>About</li>
            <li>Features</li>
            <li>Articles</li>
            <li>Contacts</li>
          </ul>

          <div className='nav-cta'>
            <a href="https://project-tracketeer.vercel.app/" className='btn-link'>Login</a>
            <a href="https://project-tracketeer.vercel.app/" className='btn btn-primary shadow-s'>Register</a>
          </div>
        </div>
      </div> 
    </nav>
  )
}

export default Navigation