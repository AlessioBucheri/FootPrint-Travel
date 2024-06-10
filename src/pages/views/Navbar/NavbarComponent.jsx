import React, { useState } from "react";
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
        <Link to='/about'>
          <NavItem>ABOUT</NavItem>
        </Link>
        <Link to='/airport-form' className='active'>
          <NavItem>TRY IT NOW</NavItem>
        </Link>
        <Link to='/contact'>
          <NavItem>CONTACT</NavItem>
        </Link>
      </NavList>
      <Content>
        {/* Inserisci qui il contenuto principale della pagina */}
      </Content>
    </Navbar>
  );
}
