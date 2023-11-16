import React from 'react';
import { Link } from 'react-router-dom';
import './LandingHero.css';

const LandingHero = ({ icon }) => {
  return (
    <div className="landing-hero">
      <img
        src={icon}
        alt="Landing Hero"
        className="hero-image"
      />

      <div className="hero-content">
        <h2>Elevate your routine</h2>

        <br />
        <br />

        <p>Shop with confidence for personal care essentials tailored
          <br />for brown skin. Experience the precision of personalized
          <br />care at skinEasy.

          <br />
          <br />

          Ready for a beauty upgrade? Start shopping now!
        </p>

        <br />
        <br />
        <br />

        <div className="hero-buttons">
          <button>Shop Now</button>
          <Link to="/analyze">
            <button>Analyze Product</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
