import React from 'react';
import './ComingSoon.css';

const ComingSoon = () => {
  return (
    <>
      <div className="coming-soon-page-container">
      <div className="coming-soon-container">
        <h1 className="coming-soon-title">LAUNCHING SOON</h1>
        <br />
        <p className="coming-soon-description">Everything you need at <i>one place</i></p>
        <br />
        <p className="second-line-desc">Watch this space for the ultimate personal shopping experience —minus the deceit. </p>
        <br />
        <p className="second-line-desc"> 🔽 Scroll down 🔽 </p>
      </div>
      <div className="coming-soon-container">
        <ol>
          <li>Make a mock landing page for Cleanser category to show what is being built</li>
          <li>cleanser (animation like skineasy) : different skin types + concerns </li>
          <li>ecom filters : image : name : price </li>
        </ol>
      </div>      
      </div>
    </>
  );
};

export default ComingSoon;
