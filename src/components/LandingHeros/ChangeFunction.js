// ChangeFunction.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ChangeFunction.css';

import morningRoutineImage from '../../images/morningRoutine.jpeg';
import nightRoutineImage from '../../images/nightRoutine.avif';

const ChangeFunction = () => {
  const [isMorning, setIsMorning] = useState(true);

  const handleToggle = () => {
    setIsMorning(!isMorning);
  };

  // Separate lists for Morning and Night routines
  const morningProducts = [
    { name: 'Cleanser', image: morningRoutineImage},
    { name: 'Toner', image: morningRoutineImage},
    { name: 'Serum', image: morningRoutineImage},
    { name: 'Moisturizer', image: morningRoutineImage},
    { name: 'Eye Cream', image: morningRoutineImage},
    { name: 'SPF', image: morningRoutineImage},
    { name: 'Lip Balm', image: morningRoutineImage},
    { name: 'Mask', image: morningRoutineImage},
  ];

  const nightProducts = [
    { name: 'Makeup Remover', image: nightRoutineImage},
    { name: 'Cleanser', image: nightRoutineImage},
    { name: 'Hydration Booster', image: nightRoutineImage},
    { name: 'Night Cream', image: nightRoutineImage},
    { name: 'Eye Cream', image: nightRoutineImage},
    { name: 'Night Lotion', image: nightRoutineImage},
    { name: 'Night Serum', image: nightRoutineImage},
    { name: 'Night eye mask', image: nightRoutineImage},
  ];

  const getRoutineProducts = () => {
    const products = isMorning ? morningProducts : nightProducts;
    return (
      <div className={isMorning ? 'morning-routine' : 'night-routine'}>
        <div className="product-container">
          {products.map((product, index) => (
            <div className="product-item" key={index}>
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <br />
              <Link to={product.link}>
                <button>Explore</button>
                <br />
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="footer-line"></div>
      <div className={`change-function ${isMorning ? 'morning' : 'night'}`}>
        <h2 style={{ fontSize: '28px', fontFamily: 'Gill Sans' }}>
          Shop by Routine
        </h2>
        <br />
        <br />
        <label className="switch">
          <input type="checkbox" onChange={handleToggle} checked={isMorning} />
          <span className="slider round"></span>
        </label>
        <br />
        <br />
        <div className="routine-text">
          <p>
            <b>
              <i>
                {isMorning
                  ? 'Good Morning! Explore our morning routine products.'
                  : 'Good Night! Explore our night routine products.'}
              </i>
            </b>
          </p>
        </div>
        {getRoutineProducts()}
      </div>
    </>
  );
};

export default ChangeFunction;
