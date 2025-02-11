import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';  // Import the CSS file
import Contact from './components/Contact';
import Pricing from './components/Pricing';
import Home from './components/Home'

function App() {
  return (
    <Router>
      <div className="home-container">
        <header className="header">
          <img src="logo.png" alt="Logo" className="logo" />
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
            </ul>
          </nav>
        </header>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />
        </Routes>
        <footer className='footer'>
          <p>© 2024 Slammed Detailing All rights reserved</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
