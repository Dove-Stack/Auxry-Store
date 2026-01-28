import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-main">
        <div className="content">
          <div className="content-left">
            <img src={assets.Logo1} alt="Auxry Store Logo" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
              consequuntur eius in rem cum nobis quibusdam illo expedita.
            </p>
            <span>(+234) 1234 5678 90 - info@auxrystore.com</span>
          </div>

          <div className="content-center">
            <h2>Info.</h2>
            <ul className="center-nav">
              <li>
                <Link to="/home">- Home</Link>
              </li>
              <li>
                <Link to="/about">- About Us</Link>
              </li>
              <li>
                <Link to="/contact">- Contact</Link>
              </li>
              <li>
                <Link to="/shop">- Shop</Link>
              </li>
            </ul>
          </div>

          <div className="content-center">
            <h2>Categories</h2>
            <ul className="center-nav">
              <li>
                <Link to="/shop">- Women</Link>
              </li>
              <li>
                <Link to="/shop">- Men</Link>
              </li>
              <li>
                <Link to="/shop">- Shoes</Link>
              </li>
              <li>
                <Link to="/shop">- Bags</Link>
              </li>
            </ul>
          </div>

          <div className="content-center">
            <h2>Account</h2>
            <ul className="center-nav">
              <li>
                <Link to="/shop">- Dashboard</Link>
              </li>
              <li>
                <Link to="/shop">- My Orders</Link>
              </li>
              <li>
                <Link to="/shop">- Account Details</Link>
              </li>
              <li>
                <Link to="/shop">- Track Details</Link>
              </li>
            </ul>
          </div>

          <div className="content-right">
            <h2>Support</h2>
            <ul className="center-nav">
              <li>
                <Link to="/shop">- FAQs</Link>
              </li>
              <li>
                <Link to="/shop">- Report Theft</Link>
              </li>
              <li>
                <Link to="/shop">- Support Center</Link>
              </li>
              <li>
                <Link to="/shop">- Feedback & Info.</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            Copyright <i className="bx bx-copyright"></i> Auxry Store 2024. All
            Rights Reserved
          </p>

          <p className="designer">
            Designed By{" "}
            <b>
              FE.LA <span>™</span>
            </b>
          </p>

          <div className="developer-icons">
            <Link to="/cart">
              <i className="bx bxl-github"></i>
            </Link>
            <i className="bx bxl-twitter"></i>
            <i className="bx bxl-whatsapp"></i>
            <i className="bx bxl-linkedin"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
