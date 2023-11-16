import React, { useState, useEffect } from 'react';
import './ShopByType.css';

import scalpImage1 from '../../images/scalp1.jpg';
import scalpImage2 from '../../images/scalp1.jpg';
import scalpImage3 from '../../images/scalp1.jpg';
import scalpImage4 from '../../images/scalp1.jpg';
import scalpImage5 from '../../images/scalp1.jpg';

import hairImage1 from '../../images/hair1.jpg';
import hairImage2 from '../../images/hair1.jpg';
import hairImage3 from '../../images/hair1.jpg';
import hairImage4 from '../../images/hair1.jpg';
import hairImage5 from '../../images/hair1.jpg';

import faceImage1 from '../../images/face1.jpg';
import faceImage2 from '../../images/face1.jpg';
import faceImage3 from '../../images/face1.jpg';
import faceImage4 from '../../images/face1.jpg';
import faceImage5 from '../../images/face1.jpg';

import bodyImage1 from '../../images/body1.jpg';
import bodyImage2 from '../../images/body1.jpg';
import bodyImage3 from '../../images/body1.jpg';
import bodyImage4 from '../../images/body1.jpg';
import bodyImage5 from '../../images/body1.jpg';

import intimateImage1 from '../../images/intimate1.jpg';
import intimateImage2 from '../../images/intimate1.jpg';
import intimateImage3 from '../../images/intimate1.jpg';
import intimateImage4 from '../../images/intimate1.jpg';
import intimateImage5 from '../../images/intimate1.jpg';

const ShopByType = () => {
  const [selectedCategory, setSelectedCategory] = useState('Scalp');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading delay
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 1000);

    // Clear the timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);

  const initialContent = {
    Scalp: [
      { src: scalpImage1, name: 'Combination', link: "scalp/combination" },
      { src: scalpImage2, name: 'Dry', link: "scalp/dry" },
      { src: scalpImage3, name: 'Normal', link: "scalp/normal" },
      { src: scalpImage4, name: 'Oily', link: "scalp/oily" },
      { src: scalpImage5, name: 'Sensitive', link: "scalp/sensitive" },
    ],
    Hair: [
      { src: hairImage1, name: 'Coily', link: "hair/coily" },
      { src: hairImage2, name: 'Curly', link: "hair/curly" },
      { src: hairImage3, name: 'Normal', link: "hair/normal" },
      { src: hairImage4, name: 'Thick', link: "hair/thick" },
      { src: hairImage5, name: 'Thin', link: "hair/thin" },
      { src: hairImage5, name: 'Straight', link: "hair/straight" },
      { src: hairImage5, name: 'Wavey', link: "hair/wavey" },
    ],
    Face: [
      { src: faceImage1, name: 'Combination', link: "face/combination" },
      { src: faceImage2, name: 'Dry', link: "face/dry" },
      { src: faceImage3, name: 'Normal', link: "face/normal" },
      { src: faceImage4, name: 'Oily', link: "face/oily" },
      { src: faceImage5, name: 'Sensitive', link: "face/sensitive" },
    ],
    Body: [
      { src: bodyImage1, name: 'Combination', link: "body/combination" },
      { src: bodyImage2, name: 'Dry', link: "body/dry" },
      { src: bodyImage3, name: 'Normal', link: "body/normal" },
      { src: bodyImage4, name: 'Oily', link: "body/oily" },
      { src: bodyImage5, name: 'Sensitive', link: "body/sensitive" },
    ],
    Intimate: [
      { src: intimateImage1, name: 'Combination', link: "intimate/combination" },
      { src: intimateImage2, name: 'Dry', link: "intimate/dry" },
      { src: intimateImage3, name: 'Normal', link: "intimate/normal" },
      { src: intimateImage4, name: 'Oily', link: "intimate/oily" },
      { src: intimateImage5, name: 'Sensitive', link: "intimate/sensitive" },
    ],
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleProductClick = (productName) => {
    const productLink = `/${selectedCategory.toLowerCase()}/${productName.toLowerCase()}/`;
    window.location.href = productLink;
  };

  const selectedContent = initialContent[selectedCategory];

  return (
    <div className={`products-section ${loaded ? 'loaded' : ''}`}>
      <br />
      <br />
      <h1 className={`products-heading ${loaded ? 'loaded' : ''}`}>Discover Your Beauty</h1>
      <br />
      <br />
      <div className="products-container">
        {Object.keys(initialContent).map((category) => (
          <div
            key={category}
            className={`column ${selectedCategory === category ? 'selected' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            <div>{category}</div>
          </div>
        ))}
        <div className="row">
          {selectedContent.map((product, index) => (
            <div
              key={index}
              className={`product ${loaded ? 'loaded' : ''}`}
              onClick={() => handleProductClick(product.name)}
            >
              <img src={product.src} alt={product.name} className="product-img" />
              <div className="product-info">
              <br />
                <div className="product-name">{product.name}</div>
                <br />
                <a href={product.link} className="learn-more-button">
                  Shop products
                </a>
              </div>
              <br />
            </div>
            
          ))}
        </div>
      </div>

      <br />
      <br />
    </div>
  );
};

export default ShopByType;
