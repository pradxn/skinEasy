import React from 'react';
import './ProductPage.css';

const ProductPage = () => {
  return (
    <div className="product-page">
      <div className="left-section">
        {/* High-Quality Images */}
        <img src="https://skineasy.s3.us-west-2.amazonaws.com/cetaphil.jpeg" alt="Cetaphil" />
      </div>
      <div className="right-section">
        <div className="upper-right">
          {/* Product Title */}
          <h1>Cetaphil</h1>
          {/* Pricing Info */}
          <p>Price: ₹339</p>
          {/* Product Description */}
          <p>Description of Cetaphil...</p>
          {/* Add to Cart Button */}
          <button>Add to Cart</button>
          {/* Select Quantity */}
          <select name="quantity">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            {/* Add as many options as needed */}
          </select>
          {/* Analyze Ingredients Button */}
          <button onClick={() => window.location.href='/analyze'}>Analyze Ingredients</button>
        </div>
        <div className="lower-right">
          <p>Following products also work similarly:</p>
          {/* Carousel of 4 images */}
          <div className="carousel">
            <img src="https://skineasy.s3.us-west-2.amazonaws.com/cetaphil.jpeg" alt="Product 1" />
            <img src="https://skineasy.s3.us-west-2.amazonaws.com/cetaphil.jpeg" alt="Product 2" />
            <img src="https://skineasy.s3.us-west-2.amazonaws.com/cetaphil.jpeg" alt="Product 3" />
            <img src="https://skineasy.s3.us-west-2.amazonaws.com/cetaphil.jpeg" alt="Product 4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
