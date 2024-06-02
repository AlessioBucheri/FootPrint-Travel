import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import MainSection from "./components/MainSection/MainSection";
import Navbar from "./components/Navbar/Navbar";
import AirportForm from "./components/AirportForm/AirportForm";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <Router>
      <Navbar />
      <div className='container'>
        <MainSection />
        <About />
        <AirportForm />

        <Contact />
      </div>
    </Router>
  );
}

export default App;
