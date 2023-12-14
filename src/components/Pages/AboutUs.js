// AboutUs.js

import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <>
      <div className="footer-line"></div>

      <div className="about-us-section-container">
        <div className="about-us-content">
          <div className="image-container">
            <img
              src="https://skineasy.s3.us-west-2.amazonaws.com/thinking.png"
              alt="Thinking"
              className="thinking-image"
            />
          </div>
          <h1>SkinEasy solves</h1>
          <p className="problem-number">
            <b>TEN</b>
          </p>
          <p className="problems-text">
            Big 🤬 problems with the personal care industry.
          </p>
          <br />
          <p className="problems-text-bottom">
            (Not to mention a bunch of smaller, yet still totally annoying, problems.)
          </p>
          <br />
          <br />
          <div className="see-how-button">
            <a href="/about">See How</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
