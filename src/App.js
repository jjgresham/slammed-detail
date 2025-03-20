import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import Home from './components/Home';
import Footer from './components/Footer';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      console.log("Toggling menu:", !prev); // Debug log
      return !prev;
    });
  };

  const closeMenu = () => {
    console.log("Closing menu"); // Debug log
    setMenuOpen(false);
  };

  return (
    <Router>
      <div className="container">
        <header className="header">
          <img
            src="/svg-logo.svg"
            alt="Slammed Detailing Logo"
            className="logo"
          />

          {/* Hamburger Button */}
          <button className="hamburger" onClick={toggleMenu}>
            ☰
          </button>

          {/* Navigation Menu */}
          <nav className={menuOpen ? "nav open" : "nav"}>
            <ul>
              <li>
                <Link to="/" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/pricing" onClick={closeMenu}>
                  Services & Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={closeMenu}>
                  Service Area
                </Link>
              </li>
              <li>
                <Link to="/gallery" onClick={closeMenu}>
                  Detail Gallery
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>

          {/* Footer */}
          <Footer />

      </div>
    </Router>
  );
}

export default App;
