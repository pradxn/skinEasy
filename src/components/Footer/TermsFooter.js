import React from "react";
import "./TermsFooter.css";

function TermsFooter() {
  return (
    <div className="terms-footer-container">
      <div className="footer-line"></div> {/* Line above */}
      <div className="terms-footer">
        <div className="tagline">
          <div style={{ whiteSpace: "nowrap" }}>
            {/*Check your products for purity. Throw those faulty & fake
            products. Find out the reality of those "organic" products.*/}
            Seba: Elevating Skincare Choices Through In-Depth Ingredient Analysis for Lasting Skin Wellness
          </div>
          <br />
        </div>

        <br />

        <div className="links-row">
          <div className="column">
            <span className="column-title">Get to know us</span>
            <a href="/about" rel="noreferrer">
              About</a>
            <br />
            <a href="/grading-method" rel="noreferrer">
              How we grade products</a>
            <br />
            <a href="mailto:consult@toxicfree.com" rel="noreferrer">
              Email Us
            </a>
            <br />
            <a href="mailto:influence.marketing@toxicfree.com" rel="noreferrer">
              PR Marketing
            </a>
            <br />
          </div>

          <div className="column">
            <span className="column-title">Services</span>
            <a href="/consult" rel="noreferrer">
              Consult a dermatologist</a>
            <br />
            <a href="/home-consult" rel="noreferrer">
              Home consultation</a>
            <br />
            <a href="/shop" rel="noreferrer">
              Shop</a>
            <br />
          </div>
          <div className="column">
            <span className="column-title">Links</span>
            <a href="/api-ref" rel="noreferrer">
              API</a>
            <br />
            <a href="/business" rel="noreferrer">
              Business</a>
            <br />
            <a href="/sitemap" rel="noreferrer">
              Sitemap</a>
            <br />
            <a href="/blog" rel="noreferrer">
              Blog</a>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsFooter;