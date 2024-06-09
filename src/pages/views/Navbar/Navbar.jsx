import React, { useState } from "react";
import { Helmet } from "react-helmet";
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
      <a href='#home'>
        <div className='navbar-logo'>
          <img
            className='logo'
            src='/footprint-logo.png'
            alt='footprint main logo'
          />
        </div>
      </a>
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
        <a href='#about'>
          <li>ABOUT</li>
        </a>
        <a className='active' href='#airport-form'>
          <li>TRY IT NOW</li>
        </a>
        <a href='#contact'>
          <li>CONTACT</li>
        </a>
      </ul>
    </div>
  );
}
