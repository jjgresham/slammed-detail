import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6"; 
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
          <a href="https://facebook.com/share/1ELn1GyG9t/?mibextid=wwXlfr" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/801slammed.detailing" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.tiktok.com/@801slammed.detailing" target="_blank" rel="noopener noreferrer">
            <FaTiktok />
          </a>
        </div>
      </div>

      {/* Bottom - Copyright */}
      <div className="footer-bottom">
        <p>© 2025 Slammed Detailing | All rights reserved</p>
      </div>

      {/* Bottom banner advert */}
      <div className="footer-banner">
        <a
          className="footer-banner-link"
          href="https://www.linkedin.com/in/jordan-james-gresham/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Built by Jordan Gresham — LinkedIn"
        >
          <span className="jg-dot">JG</span>
          <span>Built by: <br/> Jordan Gresham</span>
          <span className="banner-text">Want a website like this?<br/> Please click here & reach out!</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
