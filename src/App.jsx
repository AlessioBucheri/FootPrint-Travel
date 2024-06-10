import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import MainSection from "./pages/views/MainSection/MainSection";
import Navbar from "./pages/views/Navbar/Navbar";
import AirportForm from "./components/AirportForm/AirportForm";
import About from "./pages/views/About/About";
import Contact from "./pages/views/Contact/Contact";
function App() {
  return (
    <Router>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<MainSection />} />
          <Route path='/about' element={<About />} />
          <Route path='/airport-form' element={<AirportForm />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
