import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>Contact Us</h1>
      </section>

      <section className="contact-info">
        <h2>Get In Touch</h2>
        <p>Have questions or want to schedule an appointment? Reach out to us!</p>

        <div className="contact-details">
          <div className="contact-item">
            <h3>Phone</h3>
            <p><a href="tel:+1234567890">(123) 456-7890</a></p>
          </div>
          <div className="contact-item">
            <h3>Email</h3>
            <p><a href="mailto:info@slammeddetailing.com">info@slammeddetailing.com</a></p>
          </div>
          <div className="contact-item">
            <h3>Location</h3>
            <p>123 Detailer St, Car City, ST 56789</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Contact;
