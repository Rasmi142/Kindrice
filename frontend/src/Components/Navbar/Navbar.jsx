import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import './Navbar.css'; // Ensure the path is correct
import { FaUser, FaShoppingCart, FaBars } from 'react-icons/fa'; // Import hamburger icon

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className='navbar-section'>
      <div className="navbar-container">
        {/* Hamburger Icon */}
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <FaBars />
        </div>

        <div className='navbar-logo'>
          <img src={assets.logo} alt='brand-logo' />
        </div>

        <div className={`navbar-menu-container ${isMenuOpen ? 'active' : ''}`}>
          <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
            <ul>
              <li>
              <a href='#' className='link first' style={{ marginLeft: '9rem' }}>Shop</a>
              </li>
              <li><a href='#' className='link'>Low GI</a></li>
              <li><a href='#' className='link'>Impact</a></li>
              <li><a href='#' className='link'>Blog</a></li>
              <li><a href='#' className='link'>Story</a></li>
              <li><a href='#' className='link'>Contact</a></li>
            </ul>
          </div>
          <div className='navbar-icons'>
            <FaUser className='icon user' />
            <FaShoppingCart className='icon cart' />
          </div>
        </div>
      </div>
    </section>
  );
}
