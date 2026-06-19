import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <header className="navbar">
      <div className="nav-left">
        <a href="#main-content" aria-label="Skip to main content">Portfolio</a>
      </div>
      <nav className="nav-right" aria-label="Primary navigation">
        <ul className='nav-links'>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href='#project'>Projects</a></li>
          <li><a href='#skills'>Skills</a></li>
          <li><a href='#certificates'>Certificates</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
