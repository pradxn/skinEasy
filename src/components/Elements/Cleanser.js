import React, { useState } from 'react';
import { HiOutlineUserCircle, HiOutlineShoppingCart, HiOutlineClipboardList } from 'react-icons/hi';
import './Cleanser.css';

const Cleanser = () => {
  const [skinType, setSkinType] = useState('Combination');
  const products = {
    'Combination': [
      { name: 'Cetaphil Gentle Cleanser', image: 'https://skineasy.s3.us-west-2.amazonaws.com/cetaphil.jpeg', price: '₹339', link: '/cetaphil-daily-cleanser' },
      { name: 'Cetaphil Cleanser', image: 'https://skineasy.s3.us-west-2.amazonaws.com/cetaphil.jpeg', price: '₹339', link: '/cetaphil-daily-cleanser' },
      { name: 'Cetaphil Cleanser', image: 'https://skineasy.s3.us-west-2.amazonaws.com/cetaphil.jpeg', price: '₹339', link: '/cetaphil-daily-cleanser' },
      { name: 'Cetaphil Cleanser', image: 'https://skineasy.s3.us-west-2.amazonaws.com/cetaphil.jpeg', price: '₹339', link: '/cetaphil-daily-cleanser' },
      { name: 'Cetaphil Cleanser', image: 'https://skineasy.s3.us-west-2.amazonaws.com/cetaphil.jpeg', price: '₹339', link: '/cetaphil-daily-cleanser' },
      { name: 'Cetaphil Cleanser', image: 'https://skineasy.s3.us-west-2.amazonaws.com/cetaphil.jpeg', price: '₹339', link: '/cetaphil-daily-cleanser' },
    ],

    'Dry': [
      { name: 'Cetaphil Dry Cleanser', image: 'https://skineasy.s3.us-west-2.amazonaws.com/cetaphil.jpeg', price: '₹339', link: '/cetaphil-daily-cleanser' },
      { name: 'Cetaphil Cleanser', image: 'https://skineasy.s3.us-west-2.amazonaws.com/cetaphil.jpeg', price: '₹339', link: '/cetaphil-daily-cleanser' },
      { name: 'Cetaphil Cleanser', image: 'https://skineasy.s3.us-west-2.amazonaws.com/cetaphil.jpeg', price: '₹339', link: '/cetaphil-daily-cleanser' },
      { name: 'Cetaphil Cleanser', image: 'https://skineasy.s3.us-west-2.amazonaws.com/cetaphil.jpeg', price: '₹339', link: '/cetaphil-daily-cleanser' },
      { name: 'Cetaphil Cleanser', image: 'https://skineasy.s3.us-west-2.amazonaws.com/cetaphil.jpeg', price: '₹339', link: '/cetaphil-daily-cleanser' },
      { name: 'Cetaphil Cleanser', image: 'https://skineasy.s3.us-west-2.amazonaws.com/cetaphil.jpeg', price: '₹339', link: '/cetaphil-daily-cleanser' },
    ],

    'Normal': [
      { name: 'Cetaphil Normal Cleanser', image: 'https://skineasy.s3.us-west-2.amazonaws.com/cetaphil.jpeg', price: '₹339', link: '/cetaphil-daily-cleanser' },
      { name: 'Cetaphil Cleanser', image: 'https://skineasy.s3.us-west-2.amazonaws.com/cetaphil.jpeg', price: '₹339', link: '/cetaphil-daily-cleanser' },
      { name: 'Cetaphil Cleanser', image: 'https://skineasy.s3.us-west-2.amazonaws.com/cetaphil.jpeg', price: '₹339', link: '/cetaphil-daily-cleanser' },
      { name: 'Cetaphil Cleanser', image: 'https://skineasy.s3.us-west-2.amazonaws.com/cetaphil.jpeg', price: '₹339', link: '/cetaphil-daily-cleanser' },
      { name: 'Cetaphil Cleanser', image: 'https://skineasy.s3.us-west-2.amazonaws.com/cetaphil.jpeg', price: '₹339', link: '/cetaphil-daily-cleanser' },
      { name: 'Cetaphil Cleanser', image: 'https://skineasy.s3.us-west-2.amazonaws.com/cetaphil.jpeg', price: '₹339', link: '/cetaphil-daily-cleanser' },
    ],

    'Oily': [
      { name: 'Cetaphil Oily Cleanser', image: 'https://skineasy.s3.us-west-2.amazonaws.com/cetaphil.jpeg', price: '₹339', link: '/cetaphil-daily-cleanser' },
      { name: 'Cetaphil Cleanser', image: 'https://skineasy.s3.us-west-2.amazonaws.com/cetaphil.jpeg', price: '₹339', link: '/cetaphil-daily-cleanser' },
      { name: 'Cetaphil Cleanser', image: 'https://skineasy.s3.us-west-2.amazonaws.com/cetaphil.jpeg', price: '₹339', link: '/cetaphil-daily-cleanser' },
      { name: 'Cetaphil Cleanser', image: 'https://skineasy.s3.us-west-2.amazonaws.com/cetaphil.jpeg', price: '₹339', link: '/cetaphil-daily-cleanser' },
      { name: 'Cetaphil Cleanser', image: 'https://skineasy.s3.us-west-2.amazonaws.com/cetaphil.jpeg', price: '₹339', link: '/cetaphil-daily-cleanser' },
      { name: 'Cetaphil Cleanser', image: 'https://skineasy.s3.us-west-2.amazonaws.com/cetaphil.jpeg', price: '₹339', link: '/cetaphil-daily-cleanser' },
    ],

    'Sensitive': [
      { name: 'Cetaphil Sensitive Cleanser', image: 'https://skineasy.s3.us-west-2.amazonaws.com/cetaphil.jpeg', price: '₹339', link: '/cetaphil-daily-cleanser' },
      { name: 'Cetaphil Cleanser', image: 'https://skineasy.s3.us-west-2.amazonaws.com/cetaphil.jpeg', price: '₹339', link: '/cetaphil-daily-cleanser' },
      { name: 'Cetaphil Cleanser', image: 'https://skineasy.s3.us-west-2.amazonaws.com/cetaphil.jpeg', price: '₹339', link: '/cetaphil-daily-cleanser' },
      { name: 'Cetaphil Cleanser', image: 'https://skineasy.s3.us-west-2.amazonaws.com/cetaphil.jpeg', price: '₹339', link: '/cetaphil-daily-cleanser' },
      { name: 'Cetaphil Cleanser', image: 'https://skineasy.s3.us-west-2.amazonaws.com/cetaphil.jpeg', price: '₹339', link: '/cetaphil-daily-cleanser' },
      { name: 'Cetaphil Cleanser', image: 'https://skineasy.s3.us-west-2.amazonaws.com/cetaphil.jpeg', price: '₹339', link: '/cetaphil-daily-cleanser' },
    ],
    
  };

  const handleSkinTypeChange = (event) => {
    setSkinType(event.target.value);
  };

  return (
    <>
      <div className="container">
      <div className="header">
        <h1>skinEasy</h1>
        <input type="text" placeholder="Search..." />
        <a href="/account"><HiOutlineUserCircle size={35} /></a>
        <a href="/account"><HiOutlineClipboardList size={35} /></a>
        <a href="/account"><HiOutlineShoppingCart size={35} /></a>
      </div>
      
      <div className="skin-type-selection">
        <label htmlFor="skin-type">Choose your skin type:</label>
        <select id="skin-type" value={skinType} onChange={handleSkinTypeChange}>
          <option value="Combination">Combination</option>
          <option value="Dry">Dry</option>
          <option value="Normal">Normal</option>
          <option value="Oily">Oily</option>
          <option value="Sensitive">Sensitive</option>
        </select>
      </div>

      <div className="product-display">
        {products[skinType].map((product, index) => (
          <div key={index}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <a href={product.link}>More Info</a>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}

export default Cleanser;
