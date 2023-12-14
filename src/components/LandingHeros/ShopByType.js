import React, { useState, useEffect } from 'react';
import './ShopByType.css';

const balancedscalp = "https://skineasy.s3.us-west-2.amazonaws.com/balanced.png";
const dryscalp = "https://skineasy.s3.us-west-2.amazonaws.com/dry.png";
const combinationscalp = "https://skineasy.s3.us-west-2.amazonaws.com/combination.png";
const oilyscalp = "https://skineasy.s3.us-west-2.amazonaws.com/oily.png";


const coilyhair = "https://skineasy.s3.us-west-2.amazonaws.com/coily.png";
const curlyhair = "https://skineasy.s3.us-west-2.amazonaws.com/curly.png";
const straighthair = "https://skineasy.s3.us-west-2.amazonaws.com/straight.png";
const waveyhair = "https://skineasy.s3.us-west-2.amazonaws.com/wavey.png";

// Face Images
const combinationface = "https://skineasy.s3.us-west-2.amazonaws.com/combination.png";
const dryface = "https://skineasy.s3.us-west-2.amazonaws.com/dry.png";
const normalface = "https://skineasy.s3.us-west-2.amazonaws.com/normal.png";
const oilyface = "https://skineasy.s3.us-west-2.amazonaws.com/oily.png";
const sensitiveface = "https://skineasy.s3.us-west-2.amazonaws.com/sensitive.png";

// Intimate Images
const armpits = "https://skineasy.s3.us-west-2.amazonaws.com/armpits.png";
const genitals = "https://skineasy.s3.us-west-2.amazonaws.com/genitals.png";
const glutes = "https://skineasy.s3.us-west-2.amazonaws.com/glutes.png";
const innerglutes = "https://skineasy.s3.us-west-2.amazonaws.com/innerglutes.png";
const innerthighs = "https://skineasy.s3.us-west-2.amazonaws.com/innerthighs.png";

// Body Images
const combinationbody = "https://skineasy.s3.us-west-2.amazonaws.com/combination.png";
const drybody = "https://skineasy.s3.us-west-2.amazonaws.com/dry.png";
const elbowsandknees = "https://skineasy.s3.us-west-2.amazonaws.com/elbowsandknees.png";
const normalbody = "https://skineasy.s3.us-west-2.amazonaws.com/normal.png";
const oilybody = "https://skineasy.s3.us-west-2.amazonaws.com/oily.png";
const sensitivebody = "https://skineasy.s3.us-west-2.amazonaws.com/sensitive.png";


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
      { src: balancedscalp, name: 'Balanced', link: "scalp/balanced" },
      { src: combinationscalp, name: 'Combination', link: "scalp/mixed" },
      { src: dryscalp, name: 'Dry', link: "scalp/dry" },
      { src: oilyscalp, name: 'Oily', link: "scalp/oily" },
    ],
    Hair: [
      { src: coilyhair, name: 'Coily', link: "hair/coily" },
      { src: curlyhair, name: 'Curly', link: "hair/curly" },
      { src: straighthair, name: 'Straight', link: "hair/straight" },
      { src: waveyhair, name: 'Wavey', link: "hair/wavey" },
    ],
    Face: [
      { src: combinationface, name: 'Combination', link: "face/combination" },
      { src: dryface, name: 'Dry', link: "face/dry" },
      { src: normalface, name: 'Normal', link: "face/normal" },
      { src: oilyface, name: 'Oily', link: "face/oily" },
      { src: sensitiveface, name: 'Sensitive', link: "face/sensitive" },
    ],
    Body: [
      { src: combinationbody, name: 'Combination', link: "body/combination" },
      { src: drybody, name: 'Dry', link: "body/dry" },
      { src: elbowsandknees, name: 'Elbows & Knees', link: "body/joints" },
      { src: normalbody, name: 'Normal', link: "body/normal" },
      { src: oilybody, name: 'Oily', link: "body/oily" },
      { src: sensitivebody, name: 'Sensitive', link: "body/sensitive" },
    ],
    Intimate: [
      { src: armpits, name: 'Arm pits', link: "intimate/armpits" },
      { src: genitals, name: 'Genitals', link: "intimate/genitals" },
      { src: glutes, name: 'Glutes', link: "intimate/glutes" },
      { src: innerglutes, name: 'Inner Glutes', link: "intimate/innerglutes" },
      { src: innerthighs, name: 'Inner Thighs', link: "intimate/innerthighs" },
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
    <>
    <div className='section-container'>
    <div className={`products-section ${loaded ? 'loaded' : ''}`}>
      <br />
      <h1 className={`products-heading ${loaded ? 'loaded' : ''}`}>Discover Your Beauty</h1>
      <h3><i>Buy products based on ingredients 📃 rather than lables 🏷️</i></h3>
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
    </div>
    </>
  );
};

export default ShopByType;
