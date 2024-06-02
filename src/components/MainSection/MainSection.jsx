import React from "react";
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
      <div className='scroll-arrow' onClick={scrollToNextSection}>
        <span className='material-symbols-outlined'>stat_minus_1</span>
      </div>
    </div>
  );
}
