import React from "react";
import "./Footer.css";
import gpay from "../../assets/images/payment-img/gpay.png";
import paytm from "../../assets/images/payment-img/paytm.png";
import mobikwik from "../../assets/images/payment-img/mobikwik.png";
import ponepay from "../../assets/images/payment-img/phonepe.png";
import visa from "../../assets/images/payment-img/visa.png";
import rupay from "../../assets/images/payment-img/rupay.png";

function Footer() {
  return (
    <>
      <div className="footer-gray">
        <div className="footer-custom">
          <div className="footer-lists">
            <div className="footer-list-wrap">
              <h6 className="ftr-hdr">Order Toll Free</h6>
              <ul className="ftr-links-sub">
                <li>
                  <a href="tel:+919598149103">9588149103</a>
                </li>
              </ul>
              <h6 className="ftr-hdr">Our Services </h6>
              <ul className="ftr-links-sub">
                <li>
                  <a href="" rel="nofollow">
                    Order Medicine
                  </a>
                </li>
                <li>
                  <a href="http" rel="nofollow">
                    {" "}
                    Healthcare Products
                  </a>
                </li>
                <li>
                  <a href="http" rel="nofollow">
                    {" "}
                    Lab Tests
                  </a>
                </li>
                <li>
                  <a href="http" rel="nofollow">
                    {" "}
                    Find Nearest Centre
                  </a>
                </li>
              </ul>
            </div>
            {/*/.footer-list-wrap*/}
            <div className="footer-list-wrap">
              <h6 className="ftr-hdr">Featured Categories </h6>
              <ul className="ftr-links-sub">
                <li>
                  <a href="/help/t" rel="nofollow">
                    {" "}
                    Top Products
                  </a>
                </li>
                <li>
                  <a href="/help/placin" rel="nofollow">
                    {" "}
                    Elderly Care
                  </a>
                </li>
                <li>
                  <a href="/help/s" rel="nofollow">
                    {" "}
                    Personal Care
                  </a>
                </li>
                <li>
                  <a href="/help/shipping" rel="nofollow">
                    {" "}
                    Healthcare Devices
                  </a>
                </li>
                <li>
                  <a href="/help/international-s" rel="nofollow">
                    {" "}
                    Health Food and Drinks
                  </a>
                </li>
                <li>
                  <a href="/~/" rel="nofollow">
                    {" "}
                    Skin Care
                  </a>
                </li>
                <li>
                  <a href="/h" rel="nofollow">
                    {" "}
                    Mother and Baby Care
                  </a>
                </li>
                <li>
                  <a href="/l" rel="nofollow">
                    {" "}
                    Sexual Wellness
                  </a>
                </li>
                <li>
                  <a href="/l" rel="nofollow">
                    {" "}
                    Ayurvedic Care
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-list-wrap">
              <h6 className="ftr-hdr">Need Help</h6>
              <ul className="ftr-links-sub">
                <li>
                  <a href="/asp/aboutus/dault-asp/_/posters.htm" rel="nofollow">
                    {" "}
                    Browse All Medicines
                  </a>
                </li>
                <li>
                  <a href="http://corporate.MS17.com/careers" rel="nofollow">
                    Browse All Molecules
                  </a>
                </li>
                <li>
                  <a href="/asp/landing/aistrising" rel="nofollow">
                    {" "}
                    Browse All Cities
                  </a>
                </li>
                <li>
                  <a href="/~/art-for-biness" rel="nofollow">
                    {" "}
                    Browse All Areas
                  </a>
                </li>
                <li>
                  <a
                    href="http://affiliates.MS17.com/index.aspx"
                    rel="nofollow"
                  >
                    {" "}
                    Browse All Stores
                  </a>
                </li>
                <li>
                  <a href="http://affiates.MS17.com/index.aspx" rel="nofollow">
                    {" "}
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="/catog" rel="nofollow">
                    <strong>Shop Our Catalog</strong>
                  </a>
                </li>
                <li>
                  <a href="http://g.MS17.com" rel="nofollow">
                    doctors.com BLOG
                  </a>
                </li>
              </ul>
            </div>
            {/*/.footer-list-wrap*/}
            <div className="footer-list-wrap">
              <h6 className="ftr-hdr">Policy Info</h6>
              <ul className="ftr-links-sub">
                <li>
                  <a href="/asp/aboutus/deft-asp/_/posters.htm" rel="nofollow">
                    {" "}
                    Editorial Policy
                  </a>
                </li>
                <li>
                  <a href="http://corporate.MS17.com/careers" rel="nofollow">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/asp/landinrtistrising" rel="nofollow">
                    {" "}
                    Vulnerability Policy
                  </a>
                </li>
                <li>
                  <a href="/~/art-foriness" rel="nofollow">
                    {" "}
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a href="http://affites.MS17.com/index.aspx" rel="nofollow">
                    {" "}
                    Customer Support Policy
                  </a>
                </li>
                <li>
                  <a href="http://afates.MS17.com/index.aspx" rel="nofollow">
                    {" "}
                    Return Policy
                  </a>
                </li>
              </ul>
            </div>
            {/*/.footer-list-wrap*/}
          </div>
          {/*/.footer-lists*/}
          <div className="footer-email">
            <h6 className="ftr-hdr">
              Sign up for exclusive offers and inspiration
            </h6>
            <div id="ftr-email" className="ftr-email-form mt-3">
              <form
                id="ftrEmailForm"
                method="post"
                action="http://em.MS17.com/pub/rf"
              >
                <div className="error">Please enter a valid email address</div>
                <input
                  type="text"
                  name="email_address_"
                  id="ftrEmailInput"
                  className="input"
                  placeholder="Enter email address"
                />
                {/*
                 */}
                <input type="submit" className="button" defaultValue="SUBMIT" />
              </form>
            </div>
            {/*/.ftr-email-form*/}
            <div className="ftr-email-privacy-policy" />
          </div>
          {/*/.footer-email*/}
          <div className="footer-social">
            <h6 className="ftr-hdr">Follow Us</h6>
            <ul className="mt-3">
              <li>
                <a href="https://www.faccom/MS17.com" title="Facebook">
                  <img
                    width={24}
                    height={24}
                    alt="Like us on Facebook"
                    src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/fb.png"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://plus.google.08089796661280870153"
                  title="Google+"
                >
                  <img
                    width={24}
                    height={24}
                    alt="Follow us on Google+"
                    src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/gplus.png"
                  />
                </a>
              </li>
              <li>
                <a href="https://pinterest.ctdotcom/" target="_blank">
                  <img
                    width={24}
                    height={24}
                    alt="Follow us on Pinterest"
                    src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/pin-badge.png"
                  />
                </a>
              </li>
              <li>
                <a target="_blank" href="http://igram.com/artdotcom/">
                  <img
                    width={24}
                    height={24}
                    alt="Follow us on Instagram"
                    src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/instagram-badge.png"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.twcom/artdotcom" title="Twitter">
                  <img
                    width={67}
                    alt="Follow us on Twitter"
                    src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/twitter.png"
                  />
                </a>
              </li>
            </ul>
          </div>
          {/*/.footer-social*/}
          <div className="footer-legal">
            <p>
              © MS17.com Inc. All Rights Reserved. |{" "}
              <a href="/help/privacy-policy.html" rel="nofollow">
                Privacy Policy
              </a>{" "}
              |{" "}
              <a href="/help/terms-of-use.html" rel="nofollow">
                Terms of Use
              </a>{" "}
              |{" "}
              <a href="/help/terms-of-sale.html" rel="nofollow">
                Terms of Sale
              </a>
            </p>
            <p>
              MS17.com, You+Art, and Photos [to] Art are trademarks or
              registered trademarks of MS17.com Inc.
            </p>
            <p>
              Various aspects of this website are covered by issued US patent
              No. 7,973,796 and other pending patent applications.
            </p>
          </div>
          {/*/.footer-legal*/}
          <div className="footer-payment">
            <ul>
              <li>
                <a href="">
                  <img src={gpay} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={mobikwik} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={paytm} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={rupay} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={ponepay} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={visa} alt="" />
                </a>
              </li>
            </ul>
          </div>
          {/*/.footer-payment*/}
        </div>
        {/*/.footer-custom*/}
      </div>
    </>
  );
}

export default Footer;
