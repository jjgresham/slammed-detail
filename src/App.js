import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; // Import global styles
import Contact from './components/Contact';
import Pricing from './components/Pricing';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="container">
        <header className="header">
          <img src="/svg-logo.svg" alt="Slammed Detailing Logo" className="logo" />
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>© 2024 Slammed Detailing | All rights reserved</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
