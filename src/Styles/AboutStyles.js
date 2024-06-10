import styled, { keyframes } from 'styled-components';

const breathe = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

export const Content = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  color: #2043BF;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-style: normal;
  margin-left: 230px;

  @media screen and (max-width: 430px) {
    height: 50vh;
  }
`;

export const ContentInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 20px;

  @media screen and (max-width: 1280px) {
    padding: 0;
    flex-direction: column-reverse;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    padding: 0;
  }
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.h2`
  font-size: 5rem;
  margin-bottom: 20px;
  text-align: center;

  @media screen and (max-width: 1280px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 430px) {
    font-size: 1.8rem;
  }
`;

export const Text = styled.p`
  font-size: 1.5rem;
  text-align: center;

  @media screen and (max-width: 1280px) {
    font-size: 1.3rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 430px) {
    font-size: 0.8rem;
  }
`;

export const ContentImage = styled.img`
  width: 400px;
  height: auto;
  animation: ${breathe} 3s ease-in-out infinite;

  @media screen and (max-width: 1280px) {
    width: 700px;
    height: auto;
    content: url('/footprint-carbon-small.png');
  }

  @media screen and (max-width: 768px) {
    width: 500px;
    height: auto;
  }

  @media screen and (max-width: 430px) {
    width: 380px;
    height: auto;
    content: url('/footprint-carbon-small.png');
  }
`;
