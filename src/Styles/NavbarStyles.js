// src/Styles/NavbarStyles.js
import styled from "styled-components";

export const Navbar = styled.nav`
  z-index: 1000;
  color: #2043bf;
  background-color: white;
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;

  @media screen and (min-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    border-right: #2043bf solid 3px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100px;
    position: relative;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background-color: white;
    display: flex;
  }
`;

export const NavbarLogo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const Logo = styled.img`
  width: 200px;
  height: auto;

  @media screen and (max-width: 768px) {
    width: 100px;
  }

  @media screen and (max-width: 430px) {
    width: 130px;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden; 
  a {
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    display: none;
    position: absolute;
    top: 100px;
    left: 0;
    width: 100%;
    background-color: white;
    flex-direction: column;
    align-items: center;
    max-height: 0;
    transition: max-height 5s ease-out;

    &.open {
      display: flex;
      max-height: 900px;
    }
  }
`;

export const NavItem = styled.li`
  width: 100%;
  padding: 50px;
  text-align: center;
  cursor: pointer;
  font-size: 25px;
  text-decoration: none;
  color: #2043bf;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6fbc5f;
    color: white;
  }

  &.active {
    background-color: #ec662f;
  }

  @media screen and (max-width: 768px) {
    padding: 10px;
    text-align: left;
  }
`;

export const NavHamburger = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
    position: absolute; 
    right: 20px;       
    top: 50%;          
    transform: translateY(-50%); 

    span {
      display: block;
      width: 25px;
      height: 3px;
      background-color: #2043bf;
      margin: 5px;
      transition: all 0.3s ease-in-out;
    }

    &.open span:nth-child(1) {
      transform: rotate(45deg);
      position: relative;
      top: 11px;
    }

    &.open span:nth-child(2) {
      opacity: 0;
    }

    &.open span:nth-child(3) {
      transform: rotate(-45deg);
      position: relative;
      top: -5px;
    }
  }
`;

export const Content = styled.div`
  @media screen and (min-width: 768px) {
    margin-left: 200px;
    padding: 20px;
  }
`;
