import React from 'react';
import { HiOutlineUserCircle } from 'react-icons/hi';
import './App.css';

import landingImage from './images/landing.png';
import iconImage from './images/Chat.png';

import LandingHero from './components/LandingHero';
import ChatBot from './components/ChatBot';
import Footer from './components/Footer/Footer';
import TermsFooter from './components/Footer/TermsFooter';
import ShopByType from './components/LandingHeros/ShopByType';
import ShopByProduct from './components/LandingHeros/ShopByProduct';
import ChangeFunction from './components/LandingHeros/ChangeFunction';

function App() {
  return (
    <>
      <div className='App'>

        <div> <ChatBot icon = {iconImage}/> </div>
        <div className="title-header">
          <div className="title-name">
            <a href="/">
              <h1><b><i>skin</i></b>Easy</h1>
              <p>by cutis.ai</p>
            </a>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="hamburger-menu">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>

          {/* Header Menu */}
          <div className="header-menu">
            <nav>
              <ul>
                <li><a href="/scalp">scalp</a></li>
                <li><a href="/hair">hair</a></li>
                <li><a href="/face">face</a></li>
                <li><a href="/body">body</a></li>
                <li><a href="/intimate">intimate</a></li>
                <li><a href="/makeup">makeup</a></li>
                <li><a href="/services">services</a></li>
              </ul>
            </nav>
          </div>

          {/* Search Box */}
          <div className="search-box">
            <input type="text" placeholder="Search for products..." />
          </div>

          {/* Account Page Link with User Icon */}
          <div className="account-link">
            <a href="/account"><HiOutlineUserCircle size={35} /></a>
          </div>
        </div>


        {/* Landing Hero */}
        <div> <LandingHero icon={landingImage}/> </div>

        <br />

        {/* Shop by type : skin, hair and others*/}
        <div> <ShopByType /> </div>

        {/* Shop by product : cleanser, toner, spf and others */}
        <div> <ShopByProduct /> </div>

        {/* Shop by routine : day | night */}
        <div> <ChangeFunction /> </div>

        {/* Terms footer */}
        <div> <TermsFooter /> </div>

        {/* Footer */}
        <div> <Footer /> </div>
      </div>
    </>
  );
}

export default App;