import React from 'react';
import './ComingSoon.css';
import ChatBot from './ChatBot';

const iconImage = "https://skineasy.s3.us-west-2.amazonaws.com/Chat.png";

const ComingSoon = () => {
  return (
    <>
      <div className="coming-soon-page-container">
      <div className="coming-soon-container">
        <h1 className="coming-soon-title">Cool things coming soon</h1>
        <br />
        <p className="coming-soon-description">We are a small team working on the project. Feel free to write a review!</p>
      </div>
      
      </div>
      <div>
        <ChatBot icon={iconImage} />
      </div>
    </>
  );
};

export default ComingSoon;
