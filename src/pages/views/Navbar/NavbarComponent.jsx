import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarLogo,
  Logo,
  NavList,
  NavItem,
  NavHamburger,
  Content,
} from "../../../Styles/NavbarStyles";

import logo from "../../../../public/footprint-logo.png";

export default function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false); // Aggiungiamo stato per schermo ridotto

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Puoi definire tu la soglia
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenuAfterClick = () => {
    if (isSmallScreen) {
      setIsOpen(false);
    }
  };

  return (
    <Navbar>
      <Helmet>
        <title>FootPrint Travel - Navbar</title>
        <meta
          name='navbar del sito FootPrint Travel'
          content='FootPrint Travel'
        />
      </Helmet>
      <Link to='/'>
        <NavbarLogo>
          <Logo src={logo} alt='footprint main logo' />
        </NavbarLogo>
      </Link>
      <NavHamburger onClick={toggleMenu} className={isOpen ? "open" : ""}>
        <span></span>
        <span></span>
        <span></span>
      </NavHamburger>
      <NavList className={isOpen ? "open" : ""}>
        <Link to='/about' onClick={closeMenuAfterClick}>
          <NavItem>ABOUT</NavItem>
        </Link>
        <Link
          to='/airport-form'
          className='active'
          onClick={closeMenuAfterClick}
        >
          <NavItem>TRY IT NOW</NavItem>
        </Link>
        <Link to='/contact' onClick={closeMenuAfterClick}>
          <NavItem>CONTACT</NavItem>
        </Link>
      </NavList>
      <Content>
        {/* Inserisci qui il contenuto principale della pagina */}
      </Content>
    </Navbar>
  );
}
