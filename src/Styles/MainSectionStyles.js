// src/Styles/MainSectionStyles.js
import styled, { keyframes } from "styled-components";
import BackgroundImage from "../../public/Sostenibilita_ambientale.jpg"; // Assicurati che il percorso dell'immagine sia corretto

const slideInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const popUp = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const MainSection = styled.section`
  position: relative;
  display: flex;
  height: 100vh;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  letter-spacing: 2px;
  overflow: hidden;
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;

  @media screen and (max-width: 768px) {
    height: 100vh;
  }
`;

export const MainSectionText = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  position: absolute;
  top: 65%;
  right: 10%;
  z-index: 2;
  max-width: 600px;
  text-align: center;
  color: #2043bf;
  text-shadow: white 0 0 5px;
  opacity: 0;
  transform: translateX(-100%);
  animation: ${slideInLeft} 1s ease-out forwards;

  @media screen and (max-width: 768px) {
    max-width: 90%;
    padding: 10px;
    top: 60%;
    right: 5%;
  }

  @media screen and (max-width: 412px) {
    top: 20%; /* Adjust top position for better visibility on small screens */
  }
`;

export const MainSectionTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 5rem;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const MainSectionDescription = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 412px) {
    margin-top: 20px; /* Increase margin-top for better spacing on small screens */
  }
`;