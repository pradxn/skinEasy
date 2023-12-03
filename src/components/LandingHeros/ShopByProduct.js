// ShopByProduct.js
import React from 'react';
import './ShopByProduct.css';

const Cleanser = "https://skineasy.s3.us-west-2.amazonaws.com/cleanser.jpg";

const productTypes = [
  { name: 'Cleanser', image: Cleanser, link: '/cleanser' },
  { name: 'Toner', image: Cleanser, link: '/toner' },
  { name: 'Moisturizer', image: Cleanser, link: '/moisturizer' },
  { name: 'Serum', image: Cleanser, link: '/serum' },
  { name: 'SPF', image: Cleanser, link: '/spf' },
  { name: 'Lip Balm', image: Cleanser, link: '/lip-balm' },
  { name: 'Body Wash', image: Cleanser, link: '/body-wash' },
  { name: 'Shampoo', image: Cleanser, link: '/shampoo' },
  { name: 'Conditioner', image: Cleanser, link: '/conditioner' },
];

const ShopByProduct = () => {
  return (
    <>
      <div className="footer-line"></div>

      <div className="shop-by-product">
        <div className="name-header">
          <h1>Shop by Product</h1>
        </div>

        <br />
        <br />

        <div className="product-tiles">
          {productTypes.map((tile, index) => (
            <div key={index} className="product-tile animate-on-scroll">
              <a href={tile.link} className="product-button">
                <img src={tile.image} alt={tile.name} />
                <br />
                <div className="product-name">
                  <b>
                  {tile.name}
                  </b>
                </div>
              </a>
              <br />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopByProduct;
