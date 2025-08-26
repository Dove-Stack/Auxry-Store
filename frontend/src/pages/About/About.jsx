import "./About.css";
import "boxicons/css/boxicons.min.css";
import { assets } from "../../assets/assets.js";

const About = () => {
  return (
    <div className="main-about">
      <div className="about-banner">
        <img src={`${assets.pic_about}`} alt="" className="about-img" />
        {/* Removed overlay for a clear background image */}
        <div className="text-right card">
          <p className="title">
            <i className="bx bxs-store-alt about-title-icon"></i> About Auxry
            Store
          </p>
          <span>
            Welcome to Auxry Store! Your one-stop shop for quality and style.
          </span>
          <p className="body">
            Discover a curated selection of products designed to elevate your
            lifestyle. Our mission is to provide exceptional value and a
            seamless shopping experience for every customer.
          </p>
          <p className="body">
            Join our community and enjoy exclusive deals, fast delivery, and
            top-notch customer support. Thank you for choosing Auxry Store!
          </p>
        </div>
      </div>

      <div className="content-about">
        <h4>
          <i className="bx bxs-bullseye about-section-icon"></i> Mission
        </h4>
        <p>
          To deliver the best products at unbeatable prices, while ensuring a
          delightful and secure shopping journey for all our customers. We are
          committed to innovation, quality, and customer satisfaction.
        </p>
        <p>
          At Auxry Store, we believe shopping should be simple, enjoyable, and
          rewarding. Our team works tirelessly to source high-quality products
          from trusted suppliers, ensuring that every item you receive meets our
          strict standards. We are passionate about providing a diverse range of
          products to suit every taste and need, from the latest trends in
          fashion to must-have gadgets and home essentials.
        </p>
        <p>
          We value transparency, integrity, and building lasting relationships
          with our customers. Our support team is always ready to assist you,
          whether you have a question about a product, need help with your
          order, or want to share feedback. Your satisfaction is our top
          priority, and we strive to exceed your expectations at every step.
        </p>
        <div className="sub-content-about">
          <h4>
            <i className="bx bxs-quote-alt-left about-section-icon"></i> Our
            Motto
          </h4>
          <p>
            "Shop Smart, Live Better." We believe in making life easier and more
            enjoyable through thoughtful products and outstanding service.
          </p>
          <p>
            Your happiness is our priority. Experience the Auxry difference
            today!
          </p>
          <p>
            We invite you to join our growing community of satisfied customers.
            Stay connected with us on social media for the latest updates,
            exclusive offers, and inspiration. Thank you for choosing Auxry
            Store as your trusted shopping destination!
          </p>
        </div>
      </div>

      <div className="about-features-row">
        <div className="about-feature-card">
          <i className="bx bxs-truck about-feature-icon"></i>
          <h5>Fast Delivery</h5>
          <p>Get your orders quickly with our reliable delivery service.</p>
        </div>
        {/* <div className="about-feature-card">
          <i className="bx bxs-shield-alt-2 about-feature-icon"></i>
          <h5>30-Day Guarantee</h5>
          <p>Enjoy peace of mind with our 30-day money-back guarantee.</p>
        </div> */}
        <div className="about-feature-card">
          <i className="bx bxs-star about-feature-icon"></i>
          <h5>Trusted Brand</h5>
          <p>Thousands of happy customers trust Auxry Store for quality.</p>
        </div>
        <div className="about-feature-card">
          <i className="bx bxs-lock-alt about-feature-icon"></i>
          <h5>Secure Payment</h5>
          <p>Your transactions are protected with top-tier security.</p>
        </div>
        <div className="about-feature-card">
          <i className="bx bx-support about-feature-icon"></i>
          <h5>Customer Support</h5>
          <p>Our team is here to help you 24/7 with any questions.</p>
        </div>
      </div>

{/*       <div className="icon-about">
        <a href="tel:+1234567890" className="about-icon-link" title="Call us">
          <i className="bx bx-phone"></i>
        </a>
        <a
          href="mailto:info@auxrystore.com"
          className="about-icon-link"
          title="Email us"
        >
          <i className="bx bx-envelope"></i>
        </a>
        <a
          href="https://instagram.com/auxrystore"
          target="_blank"
          rel="noopener noreferrer"
          className="about-icon-link"
          title="Instagram"
        >
          <i className="bx bxl-instagram"></i>
        </a>
      </div> */}
    </div>
  );
};

export default About;
