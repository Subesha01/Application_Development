// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PiSpeakerHighFill } from "react-icons/pi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaBook } from 'react-icons/fa'; // Importing the book icon from react-icons/fa
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className='navbar' id="navbar">
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          <Link to="/" className='navbar-brand flex'>
            <span className='text-uppercase fw-7 fs-24 ls-1' >Liber</span>
          </Link>
          <button type="button" className='navbar-toggler-btn' onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size={35} style={{
              color: `${toggleMenu ? "#fff" : "#010101"}`
            }} />
          </button>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className="navbar-nav">
            <li className='nav-item'>
              <Link to="book" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to="about" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>About</Link>
            </li>
            <li className='nav-item'>
              <Link to="login" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Login</Link>
            </li>
            <li className='nav-item'>
              <Link to="signup" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Signup</Link>
            </li>
            <li className='nav-item'>
              <Link to="profile" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Profile</Link>
            </li>
            <li className='nav-item'>
              <Link to="scholarship" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Scholarship</Link>
            </li>
            <li className='nav-item'>
              <Link to="multimedia" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Trailers</Link>
            </li>
            
          </ul>
        </div>
        
      
        <div className='dictionary-icon'>
        <Link to="voice" style={{fontSize:'200%',color : '#DCA47C'}}>
                <PiSpeakerHighFill  style={{paddingRight:'10px',fontSize:'150%',color : '#DCA47C',paddingTop:'10px'}}/>
              </Link>
          <a href="https://www.oxfordlearnersdictionaries.com/" target="_blank" rel="noopener noreferrer">
            <FaBook size={32} color="#DCA47C" title="Open Oxford Dictionary" />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
