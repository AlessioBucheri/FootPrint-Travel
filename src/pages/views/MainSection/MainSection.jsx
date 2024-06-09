import React from "react";
import { Helmet } from "react-helmet";
import "./MainSection.css";

export default function MainSection() {
  const scrollToNextSection = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <div id='home'>
      <Helmet>
        <title>FootPrint Travel Main Section</title>
        <meta name='main section' content='FootPrint Travel' />
      </Helmet>
      <div className='main-section child'>
        <div className='main-section-text'>
          <h1>FootPrint Travel</h1>
          <p>
            Discover your environmental impact by calculating the carbon
            emissions of your travels with this web app and find tips on how to
            be more sustainable!
          </p>
        </div>
      </div>
    </div>
  );
}
