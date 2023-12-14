import React, { useState } from 'react';
import './ShopByRoutine.css';

const ShopByRoutine = () => {
  const [isMorning, setIsMorning] = useState(true);
  const [currentStep, setCurrentStep] = useState('Cleanser');

  const handleToggleRoutine = () => {
    setIsMorning((prevIsMorning) => !prevIsMorning);
    setCurrentStep('Cleanser');
  };

  const handleTimelineClick = (step) => {
    setCurrentStep(step);
  };

  const renderCarouselContent = () => {
    switch (currentStep) {
      case 'Cleanser':
        return (
          <>
            <p>Choose the perfect cleanser for your morning routine</p>
            <div className="image-containers">
            <img
              src="https://skineasy.s3.us-west-2.amazonaws.com/cetaphil.jpeg"
              alt="Cleanser"
              className="carousel-image"
            />
            <img
              src="https://skineasy.s3.us-west-2.amazonaws.com/inkey.jpeg"
              alt="Cleanser"
              className="carousel-image"
            />
            <img
              src="https://skineasy.s3.us-west-2.amazonaws.com/minimalist.jpeg"
              alt="Cleanser"
              className="carousel-image"
            />
            </div>
          </>
        );
      
      case 'Toner':
        return (
          <>
            <p>Discover the benefits of our toner for your skincare routine</p>
            <img
              src="https://skineasy.s3.us-west-2.amazonaws.com/thayers.jpeg"
              alt="Toner"
              className="carousel-image"
            />
            <img
              src="https://skineasy.s3.us-west-2.amazonaws.com/aroma_magic.jpeg"
              alt="Toner"
              className="carousel-image"
            />
            <img
              src="https://skineasy.s3.us-west-2.amazonaws.com/dermalogica.jpeg"
              alt="Toner"
              className="carousel-image"
            />
          </>
        );

      case 'Serum':
        return (
          <>
            <p>Enhance your routine with our powerful serum</p>
            <img
              src="https://skineasy.s3.us-west-2.amazonaws.com/hyaluronic.jpeg"
              alt="Serum"
              className="carousel-image"
            />
            <img
              src="https://skineasy.s3.us-west-2.amazonaws.com/niacinamide.jpeg"
              alt="Serum"
              className="carousel-image"
            />
            <img
              src="https://skineasy.s3.us-west-2.amazonaws.com/vitaminc.jpeg"
              alt="Serum"
              className="carousel-image"
            />
          </>
        );

      case 'Moisturizer':
        return (
          <>
            <p>Keep your skin hydrated with our moisturizer</p>
            <img
              src="https://skineasy.s3.us-west-2.amazonaws.com/dotkey.jpeg"
              alt="Moisturizer"
              className="carousel-image"
            />
            <img
              src="https://skineasy.s3.us-west-2.amazonaws.com/riceceramide.jpeg"
              alt="Moisturizer"
              className="carousel-image"
            />
            <img
              src="https://skineasy.s3.us-west-2.amazonaws.com/suganda.jpeg"
              alt="Moisturizer"
              className="carousel-image"
            />
          </>
        );

      case 'SPF':
        return (
          <>
            <p>Protect your skin with our SPF product</p>
            <img
              src="https://skineasy.s3.us-west-2.amazonaws.com/neutrogena.jpeg"
              alt="SPF"
              className="carousel-image"
            />
            <img
              src="https://skineasy.s3.us-west-2.amazonaws.com/earthrhythm.jpeg"
              alt="SPF"
              className="carousel-image"
            />
            <img
              src="https://skineasy.s3.us-west-2.amazonaws.com/moody.jpeg"
              alt="SPF"
              className="carousel-image"
            />
          </>
        );

        case 'Eye Cream & Lip Balm':
        return (
          <>
            <p>Protect your eyes and repair the damange</p>
            <img
              src="https://skineasy.s3.us-west-2.amazonaws.com/moody.jpeg"
              alt="SPF"
              className="carousel-image"
            />
            <img
              src="https://skineasy.s3.us-west-2.amazonaws.com/earthrhythm.jpeg"
              alt="SPF"
              className="carousel-image"
            />
            <img
              src="https://skineasy.s3.us-west-2.amazonaws.com/moody.jpeg"
              alt="SPF"
              className="carousel-image"
            />
          </>
        );


      default:
        return 'Cleanser';
    }
  };

  return (
    <>
      <div className="footer-line"></div>

      <div className={isMorning ? 'gradient-container morning' : 'gradient-container night'}>
        <div className="shop-by-routine">
          <h2 style={{ color: 'white', fontSize: '28px', fontFamily: 'Gill Sans' }}>Shop by Routine</h2>
        </div>

        <br />
        <br />

        <button onClick={handleToggleRoutine}>Switch Routine</button>

        <br />
        <br />

        <div>
          {isMorning
            ? 'Good Morning! Explore our morning routine products.'
            : 'Good Night! Explore our night routine products.'}
        </div>

        <br />
        <br />

        <div className="timeline">
          <div
            className={`timeline-point ${currentStep === 'Cleanser' ? 'active' : ''}`}
            onClick={() => handleTimelineClick('Cleanser')}
          >
            Cleanser
          </div>
          <div
            className={`timeline-point ${currentStep === 'Toner' ? 'active' : ''}`}
            onClick={() => handleTimelineClick('Toner')}
          >
            {isMorning ? 'Toner' : 'Serum'}
          </div>
          <div
            className={`timeline-point ${currentStep === 'Serum' ? 'active' : ''}`}
            onClick={() => handleTimelineClick('Serum')}
          >
            {isMorning ? 'Serum' : 'Night Moisturizer'}
          </div>
          <div
            className={`timeline-point ${currentStep === 'Moisturizer' ? 'active' : ''}`}
            onClick={() => handleTimelineClick('Moisturizer')}
          >
            {isMorning ? 'Moisturizer' : 'Eye Cream'}
          </div>
          <div
            className={`timeline-point ${currentStep === 'SPF' ? 'active' : ''}`}
            onClick={() => handleTimelineClick('SPF')}
          >
            {isMorning ? 'SPF' : 'Lip Balm'}
          </div>
        </div>

        <div className="routine-content">
          <div className="carousel-container">{renderCarouselContent()}</div>
        </div>
      </div>
    </>
  );
};

export default ShopByRoutine;

