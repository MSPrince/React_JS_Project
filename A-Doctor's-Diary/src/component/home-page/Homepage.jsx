import React, { useState, useEffect } from "react";
import "./Homepage.css";

const Homepage = () => {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex(
        (prevIndex) => (prevIndex + 1) % placeholderTexts.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const placeholderTexts = [
    "Search for products",
    "Search for services",
    "Search for information",
  ];

  return (
    <>
      <div className="upload-prescription">
        <div className="container-fluid upload">
          <div className="container">
            <div className="upload-precre">
              <div>
                <h4>What are you looking for?</h4>
              </div>
              <div className="mt-2">
                <p>
                  Order with prescription. <a href="">Upload Now ></a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row height d-flex justify-content-center align-items-center">
            <div className="col-md-10">
              <div className="form">
                <i className="fa fa-search"></i>
                <input
                  id="searchInput"
                  type="text"
                  className="form-control form-input"
                  placeholder={placeholderTexts[placeholderIndex]}
                />
                <span className="left-pan">
                  <i className="fa fa-microphone"></i>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="product">
            <div className="product-list">
              <img
                src="https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=720x0"
                alt=""
              />
              <h5>Medicine</h5>
              <p>Up To 25% Off</p>
            </div>
            <div className="product-list">
              <img
                src="https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=720x0"
                alt=""
              />
              <h5>Lab Tests</h5>
              <p>Up To 25% Off</p>
            </div>
            <div className="product-list">
              <img
                src="https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=720x0"
                alt=""
              />
              <h5>HealthCare</h5>
              <p>Up To 25% Off</p>
            </div>
            <div className="product-list">
              <img
                src="https://assets.pharmeasy.in/apothecary/images/health_blogs_ff.webp?dim=720x0"
                alt=""
              />
              <h5>Health Blogs</h5>
              <p>Up To 25% Off</p>
            </div>
            <div className="product-list">
              <img
                src="https://assets.pharmeasy.in/apothecary/images/plus_ff.webp?dim=720x0"
                alt=""
              />
              <h5>Plus</h5>
              <p>Up To 25% Off</p>
            </div>
            <div className="product-list">
              <img
                src="https://assets.pharmeasy.in/apothecary/images/offers_ff.webp?dim=720x0"
                alt=""
              />
              <h5>Offers</h5>
              <p>Up To 25% Off</p>
            </div>
            <div className="product-list">
              <img
                src="https://assets.pharmeasy.in/apothecary/images/value_store.png?dim=720x0"
                alt=""
              />
              <h5>Value Store</h5>
              <p>Up To 25% Off</p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Homepage;
