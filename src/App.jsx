import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import MainSectionComponent from "./pages/views/MainSection/MainSectionComponent";
import NavbarComponent from "./pages/views/Navbar/NavbarComponent";
import AirportForm from "./components/AirportForm/AirportForm";
import About from "./pages/views/About/About";
import Contact from "./pages/views/Contact/Contact";
function App() {
  return (
    <Router>
      <NavbarComponent />
      <div className='container'>
        <Routes>
          <Route path='/' element={<MainSectionComponent />} />
          <Route path='/about' element={<About />} />
          <Route path='/airport-form' element={<AirportForm />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
