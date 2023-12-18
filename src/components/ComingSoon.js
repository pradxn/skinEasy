import React from 'react';
import './ComingSoon.css';

const ComingSoon = () => {
  return (
    <div className="coming-soon-page-container">
      <div className="coming-soon-container">
        <h1 className="coming-soon-title">Get Ready for Something Amazing</h1>
        <p className="coming-soon-description">Your one-stop solution is on its way</p>
        <p className="second-line-desc">Stay tuned for an unparalleled shopping experience.</p>
        <p className="second-line-desc">Scroll down to learn more</p>
      </div>
      <div className="coming-soon-container">
        <h2 className="coming-soon-title">What's Coming?</h2>
        <ol>
          <li>Mock landing page for the Cleanser category</li>
          <li>Interactive cleanser animation for different skin types and concerns</li>
          <li>E-commerce filters: image, name, price</li>
        </ol>
      </div>
    </div>
  );
};

export default ComingSoon;
