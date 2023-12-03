import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import './Footer.css';

import { BsInstagram } from 'react-icons/bs';
import { FaXTwitter } from 'react-icons/fa6';
import { FiYoutube } from 'react-icons/fi';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-line"></div> {/* Line above */}
      
      <div className="footer-content">
        <p>© SkinEasy 2023. All rights reserved.</p>

        <p>
          <Link to="/legal">Legal Notice</Link> | <Link to="/privacy">Privacy Policy</Link>
        </p>

        <div className="social-icons">
          <BsInstagram />
          <FaXTwitter />
          <FiYoutube />
        </div>
      </div>
    </div>
  );
}

export default Footer;
