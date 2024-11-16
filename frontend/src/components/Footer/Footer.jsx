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
            <img src={assets.Logo1} alt="" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
              consequuntur eius in rem cum nobis quibusdam illo expedita.
            </p>
            <span>(+234) 1234 5678 90 - info@auxrystore.com</span>
            {/* <div className="social-icon">
              <i className="bx bxl-facebook"></i>
              <i className="bx bxl-twitter"></i>
              <i className="bx bxl-instagram"></i>
            </div> */}
          </div>
          <div className="content-center">
            <h2 className="">Info.</h2>
            <div className="center-nav">
              <Link to={`/shop`}>
                <li>
                  <a href="">- Home</a>
                </li>
              </Link>
              <Link to={`/shop`}>
                <li>
                  <a href="">- About Us</a>
                </li>
              </Link>
              <Link to={`/shop`}>
                <li>
                  <a href="">- Contact</a>
                </li>
              </Link>
              <Link to={`/shop`}>
                <li>
                  <a href="">- Shop</a>
                </li>
              </Link>
            </div>
          </div>
          <div className="content-center">
            <h2 className="">Categories</h2>
            <div className="center-nav">
              <Link to={`/shop`}>
                <li>
                  <a href="">- Women</a>
                </li>
              </Link>
              <Link to={`/shop`}>
                <li>
                  <a href="">- Men</a>
                </li>
              </Link>
              <Link to={`/shop`}>
                <li>
                  <a href="">- Shoes</a>
                </li>
              </Link>
              <Link to={`/shop`}>
                <li>
                  <a href="">- Bags</a>
                </li>
              </Link>
            </div>
          </div>
          <div className="content-center">
            <h2 className="">Account</h2>
            <div className="center-nav">
              <Link to={`/shop`}>
                <li>
                  <a href="">- Dashboard</a>
                </li>
              </Link>
              <Link to={`/shop`}>
                <li>
                  <a href="">- My Orders</a>
                </li>
              </Link>
              <Link to={`/shop`}>
                <li>
                  <a href="">- Account Details</a>
                </li>
              </Link>
              <Link to={`/shop`}>
                <li>
                  <a href="">- Track Details</a>
                </li>
              </Link>
            </div>
          </div>
          <div className="content-right">
            <h2>Support </h2>
            <Link to={`/shop`}>
              <a href="">- FAQs</a>
            </Link>
            <Link to={`/shop`}>
              <a href="">- Report Theft </a>
            </Link>
            <Link to={`/shop`}>
              <a href="">- Support Center</a>
            </Link>
            <Link to={`/shop`}>
              <a href="">- Feedback & Info.</a>
            </Link>
          </div>
        </div>
        {/* <div className="form">
          <h2 htmlFor="">Subscribe Our Newsletter</h2>
          <p>Subscribe to our newsletter and get a special 30% discount.</p>
          <form action="">
            <input type="email" required />
            <button>Submit</button>
          </form>
        </div> */}

        <div className="footer-bottom">
          <p className="copyright">
            Copyright <i className="bx bx-copyright"></i> Auxry Store 2024. All
            Rights Reserved
          </p>
          <p className="designer">
            Designed By{" "}
            <b>
              FE.LA <pre style={{ display: "inline" }}>™</pre>{" "}
            </b>{" "}
          </p>
          <div className="developer-icons">
            <Link to={`/cart`}>
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
