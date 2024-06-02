import React from "react";
import "./About.css";

export default function About() {
  return (
    <div id='about' className='content child'>
      <div className='content-inner'>
        <div className='content-text'>
          <h2 className='title'>
            What is carbon footprint and how is it measured?
          </h2>
          <p className='text'>
            Carbon footprint measurement is a way to track the impact of our
            actions on the environment. In practice, it is an index for
            assessing the environmental impact of our habits, measured in terms
            of emitted CO2. This index is calculated by analyzing data related
            to direct emissions (those produced by our transportation, heating,
            etc.) and indirect emissions (those resulting from the use of
            electricity in our work or in the production of goods and services).
            There are numerous factors that contribute to determining the amount
            of carbon dioxide emitted by a company or organization, ranging from
            the energy consumption of structures to that of transportation, and
            to the production and disposal of waste. Proper management of one's
            carbon footprint thus requires a thorough analysis of all these
            factors in order to identify potential areas for intervention to
            optimize them.
          </p>
        </div>
        <img className='content-image' src='/footprint-carbon.png' alt='' />
      </div>
    </div>
  );
}
