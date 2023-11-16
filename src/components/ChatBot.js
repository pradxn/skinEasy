import React, { useState } from 'react';
import './ChatBot.css';

const ChatBot = ({ icon }) => {
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [query, setQuery] = useState('');

  const toggleChatbox = () => {
    setIsChatboxOpen(!isChatboxOpen);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Logic to handle the submission of the form
    console.log(name, mobile, query);
    // Reset the form fields
    setName('');
    setMobile('');
    setQuery('');
  };

  return (
    <div className="Chat-bot-container">
      <div className="circle-button" onClick={toggleChatbox}>
        <img src={icon} alt="Chat Icon" className="circle-icon" />
      </div>
      {isChatboxOpen && (
        <div className="chatbox">
          <div className="chatbox-header">
            <h1>How can we help you?</h1>
            <button className="close-button" onClick={toggleChatbox}>X</button>
          </div>
          <div className="chatbox-content">
            <div className="whatsapp-chat">
              <a href="https://wa.me/whatsappnumber"  rel="noopener noreferrer">Chat on WhatsApp</a>
            </div>
            <form className="query-form" onSubmit={handleFormSubmit}>
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Your Name"
                required
              />
              <input
                type="tel"
                value={mobile}
                onChange={handleMobileChange}
                placeholder="Mobile No"
                required
              />
              <textarea
                placeholder="Your Query"
                rows="3"
                value={query}
                onChange={handleQueryChange}
                required
              ></textarea>
              <button type="submit" className="send-button">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
