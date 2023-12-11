// ShopByProduct.js
import React from 'react';
import './ShopByProduct.css';

const Cleanser = "https://skineasy.s3.us-west-2.amazonaws.com/cetaphil.jpeg";
const Toner = "https://skineasy.s3.us-west-2.amazonaws.com/aroma_magic.jpeg";
const Moisturizer = "https://skineasy.s3.us-west-2.amazonaws.com/dotkey.jpeg";
const Serum = "https://skineasy.s3.us-west-2.amazonaws.com/niacinamide.jpeg";
const SPF = "https://skineasy.s3.us-west-2.amazonaws.com/moody.jpeg";
const LipBalm = "https://skineasy.s3.us-west-2.amazonaws.com/nmfe.jpeg";
const Bodywash = "https://skineasy.s3.us-west-2.amazonaws.com/pearsbodywash.jpeg";
const Shampoo = "https://skineasy.s3.us-west-2.amazonaws.com/loreal.jpeg";
const Conditioner = "https://skineasy.s3.us-west-2.amazonaws.com/justhuman.jpeg";

const productTypes = [
  { name: 'Cleanser', image: Cleanser, link: '/cleanser' },
  { name: 'Toner', image: Toner, link: '/toner' },
  { name: 'Moisturizer', image: Moisturizer, link: '/moisturizer' },
  { name: 'Serum', image: Serum, link: '/serum' },
  { name: 'SPF', image: SPF, link: '/spf' },
  { name: 'Lip Balm', image: LipBalm, link: '/lip-balm' },
  { name: 'Body Wash', image: Bodywash, link: '/body-wash' },
  { name: 'Shampoo', image: Shampoo, link: '/shampoo' },
  { name: 'Conditioner', image: Conditioner, link: '/conditioner' },
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
