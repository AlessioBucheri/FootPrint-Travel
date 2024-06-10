// src/Styles/ContactStyles.js
import styled from "styled-components";

export const ContactContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0;
  color: #2043bf;
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;
  
  @media screen and (max-width: 430px) {
    padding: 0;
    height: 50vh;
}
`;

export const ContactTitle = styled.h1`
  font-size: 5rem;
  text-align: center;
  margin-bottom: 20px;

  @media screen and (max-width: 430px) {
    font-size: 4rem;
  }
`;

export const ContactDescription = styled.p`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;

  @media screen and (max-width: 430px) {
    font-size: 2rem;
  }
`;

export const ContactList = styled.ol`
  list-style: none;
  font-size: 30px;
  padding: 0;
  
  @media screen and (max-width: 430px) {
    font-size: 20px;
    padding: 0;
  }
`;

export const ContactListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
  &:hover {
    background-color: #6fbc5f;
    color: white;
  }

  &.active {
    background-color: #ec662f;
  }
`;

export const ContactListItemImage = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 20px;

  @media screen and (max-width: 430px) {
    width: 50px;
    height: 50px;
  }
`;

export const CopySuccess = styled.span`
  margin-left: 10px;
  color: #2043bf;
  font-weight: bold;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: #2043bf;
`;
