import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar'>
      <Helmet>
        <title>FootPrint Travel Navbar</title>
        <meta
          name='navbar del sito FootPrint Travel'
          content='FootPrint Travel'
        />
      </Helmet>
      <Link to='/'>
        <div className='navbar-logo'>
          <img
            className='logo'
            src='/footprint-logo.png'
            alt='footprint main logo'
          />
        </div>
      </Link>
      <div
        className={`nav--hamburger ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <>
          <span></span>
          <span></span>
          <span></span>
        </>
      </div>
      <ul className={`${isOpen ? "open" : ""}`}>
        <Link to='/about'>
          <li>ABOUT</li>
        </Link>
        <Link to='/airport-form' className='active'>
          <li>TRY IT NOW</li>
        </Link>
        <Link to='/contact'>
          <li>CONTACT</li>
        </Link>
      </ul>
    </div>
  );
}
