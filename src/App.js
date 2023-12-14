import React, { useState } from 'react';
import { HiOutlineUserCircle } from 'react-icons/hi';
import './App.css';


import LandingHero from './components/LandingHero';
import ChatBot from './components/ChatBot';
import Footer from './components/Footer/Footer';
import TermsFooter from './components/Footer/TermsFooter';
import ShopByType from './components/LandingHeros/ShopByType';
import AboutUs from './components/Pages/AboutUs';
import ShopByProduct from './components/LandingHeros/ShopByProduct';
//import ChangeFunction from './components/LandingHeros/ChangeFunction';
import ShopByRoutine from './components/LandingHeros/ShopByRoutine';


function App() {

  const landingImage = "https://skineasy.s3.us-west-2.amazonaws.com/landing.png";
  const iconImage = "https://skineasy.s3.us-west-2.amazonaws.com/Chat.png";

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      window.location.href = "/search";
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  return (
    <>
      <div className='App'>

        <div> <ChatBot icon={iconImage} /> </div>
        <div className="title-header">
          <div className="title-name">
            <a href="/">
              <h1><b><i>skin</i></b>Easy</h1>
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
            <input type="text" placeholder="🔎"
              value={searchQuery}
              onChange={handleInputChange}
              onKeyUp={handleKeyPress} />
          </div>

          {/* Account Page Link with User Icon */}
          <div className="account-link">
            <a href="/account"><HiOutlineUserCircle size={35} /></a>
          </div>
        </div>


        {/* Landing Hero */}
        <div> <LandingHero icon={landingImage} /> </div>

        <br />

        {/* Shop by type : skin, hair and others*/}
        <div> <ShopByType /> </div>

        {/* About us */}
        <div><AboutUs /></div>

        {/* Shop by product : cleanser, toner, spf and others */}
        <div> <ShopByProduct /> </div>

        {/* Shop by routine : day | night 
        <div> <ChangeFunction /> </div> */}

        {/* Shop by routine : day | night */}
        <div><ShopByRoutine /></div>

        {/* Terms footer */}
        <div> <TermsFooter /> </div>

        {/* Footer */}
        <div> <Footer /> </div>
      </div>
    </>
  );
}

export default App;
