import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left side - Contact Info */}
        <span className="footer-contact">
          <h2>Contact</h2>
          <span>(208) 831-5748</span><br></br>
          <span>801slammed-detailing@gmail.com</span><br></br>
          <span> Monday - Friday 8am to 5pm</span>
        </span>
        {/* Right side - Social Icons */}
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Bottom - Copyright */}
      <div className="footer-bottom">
        <p>© 2025 Slammed Detailing | All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
