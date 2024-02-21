import React from "react";
import "./Navbar.css";
import navlogo from "../../assets/images/logo.jpg";

function Navbar() {
  return (
    <>
      <div className="superNav border-bottom py-2 bg-light">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 centerOnMobile">
              <select className="me-3 border-0 bg-light">
                <option key="en-us" value="en-us">
                  EN-US
                </option>
                <option key="hi-in" value="hi-in">
                  HI-IN
                </option>
              </select>
              <span className="d-none d-lg-inline-block d-md-inline-block d-sm-inline-block d-xs-none me-3">
                <i className="fa-solid fa-envelope me-1 topbar"></i>
                <strong>
                  <a href="mailto:maurya.prince06@gmail.com" className="mail">
                    maurya.prince06@gmail.com
                  </a>
                </strong>
              </span>
              <span className="me-3">
                <i className="fa-solid fa-phone me-1 topbar"></i>
                <strong>
                  <a href="tel:+91-789-717-3138" className="mobNo">
                    +91-789-717-3138
                  </a>
                </strong>
              </span>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 d-none d-lg-block d-md-block d-sm-block d-xs-none text-end">
              <span className="me-3">
                <i className="fa-solid fa-truck topbar me-1"></i>
                <a className="text-muted shipping" href="#">
                  Shipping
                </a>
              </span>
              <span className="me-3">
                <i className="fa-solid fa-file topbar me-2"></i>
                <a className="text-muted shipping" href="#">
                  Policy
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-white sticky-top navbar-light p-1 shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={navlogo} alt="" className="logo img-fluid" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link mx-2 text-uppercase active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" href="#">
                  Order Medicine
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link mx-2 text-uppercase"
                  href="shopping-cart.html"
                >
                  Lab Test
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" href="#">
                  Online Consult
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" href="#">
                  Health Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" href="#">
                  Plus Benefit
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" href="#">
                  <i className="fa-solid fa-cart-shopping me-1"></i>Cart
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" href="#">
                  <i className="fa-solid fa-circle-user me-1"></i>Account
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
