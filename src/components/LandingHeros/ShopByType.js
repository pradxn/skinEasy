import React, { useState, useEffect } from 'react';
import './ShopByType.css';

const scalpImage1 = "https://skineasy.s3.us-west-2.amazonaws.com/scalp1.jpg";
const scalpImage2 = "https://skineasy.s3.us-west-2.amazonaws.com/scalp1.jpg";
const scalpImage3 = "https://skineasy.s3.us-west-2.amazonaws.com/scalp1.jpg";
const scalpImage4 = "https://skineasy.s3.us-west-2.amazonaws.com/scalp1.jpg";
const scalpImage5 = "https://skineasy.s3.us-west-2.amazonaws.com/scalp1.jpg";

const hairImage1 = "https://skineasy.s3.us-west-2.amazonaws.com/hair1.jpg";
const hairImage2 = "https://skineasy.s3.us-west-2.amazonaws.com/hair1.jpg";
const hairImage3 = "https://skineasy.s3.us-west-2.amazonaws.com/hair1.jpg";
const hairImage4 = "https://skineasy.s3.us-west-2.amazonaws.com/hair1.jpg";
const hairImage5 = "https://skineasy.s3.us-west-2.amazonaws.com/hair1.jpg";

// Face Images
const faceImage1 = "https://skineasy.s3.us-west-2.amazonaws.com/face1.jpg";
const faceImage2 = "https://skineasy.s3.us-west-2.amazonaws.com/face1.jpg";
const faceImage3 = "https://skineasy.s3.us-west-2.amazonaws.com/face1.jpg";
const faceImage4 = "https://skineasy.s3.us-west-2.amazonaws.com/face1.jpg";
const faceImage5 = "https://skineasy.s3.us-west-2.amazonaws.com/face1.jpg";

// Intimate Images
const intimateImage1 = "https://skineasy.s3.us-west-2.amazonaws.com/intimate1.jpg";
const intimateImage2 = "https://skineasy.s3.us-west-2.amazonaws.com/intimate1.jpg";
const intimateImage3 = "https://skineasy.s3.us-west-2.amazonaws.com/intimate1.jpg";
const intimateImage4 = "https://skineasy.s3.us-west-2.amazonaws.com/intimate1.jpg";
const intimateImage5 = "https://skineasy.s3.us-west-2.amazonaws.com/intimate1.jpg";

const bodyImage1 = "https://skineasy.s3.us-west-2.amazonaws.com/body1.jpg";
const bodyImage2 = "https://skineasy.s3.us-west-2.amazonaws.com/body1.jpg";
const bodyImage3 = "https://skineasy.s3.us-west-2.amazonaws.com/body1.jpg";
const bodyImage4 = "https://skineasy.s3.us-west-2.amazonaws.com/body1.jpg";
const bodyImage5 = "https://skineasy.s3.us-west-2.amazonaws.com/body1.jpg";


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
