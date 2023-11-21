import React from 'react';
import './ComingSoon.css';
import ChatBot from './ChatBot';
import iconImage from '../images/face1.jpg';
const ComingSoon = () => {
  return (
    <>
      <div className="coming-soon-container">
        <h1 className="coming-soon-title">Coming Soon</h1>
        <p className="coming-soon-description">We are working on something amazing for you!</p>
      </div>
      <div>
        <ChatBot icon={iconImage} />
      </div>
    </>
  );
};

export default ComingSoon;
