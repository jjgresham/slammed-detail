import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import styles

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>Slammed Detailing</h1>
          <p>Bringing out the best in your ride, one detail at a time.</p>
          <Link to="/pricing" className="cta-button">Book Now</Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-list">
          <div className="service">
            <h3>Exterior Detailing</h3>
            <p>Deep cleaning, polishing, and ceramic coatings.</p>
          </div>
          <div className="service">
            <h3>Interior Detailing</h3>
            <p>Thorough vacuuming, steam cleaning, and upholstery care.</p>
          </div>
          <div className="service">
            <h3>Paint Correction</h3>
            <p>Remove swirls and scratches for a flawless finish.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
