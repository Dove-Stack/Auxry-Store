/* import React, { useEffect } from "react";
import "./About.css";
import "boxicons/css/boxicons.min.css";
import { assets } from "../../assets/assets.js";

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <div className="hero-content">
          <div className="hero-badge">
            <i className="bx bxs-store-alt"></i>
            EST. 2024
          </div>
          <h1 className="hero-title">
            Redefining the way <br />
            <span className="highlight">you shop.</span>
          </h1>
          <p className="hero-subtitle">
            Welcome to Auxry Store. We bridge the gap between exceptional
            quality and everyday lifestyle, providing a curated experinece just
            for you
          </p>
        </div>
        <div className="hero-image-wrapper">
          <img src={assets.pic_about} alt="About Auxry" className="hero-img" />
        </div>
      </section>

      <section className="about-mission">
        <div className="mission-grid">
          <div className="mission-text">
            <h4>Our Mission</h4>
            <h2> Empowering your lifestyle through quality and innovation</h2>
            <p>
              At Auxry Store, we believe shopping should be simple, enjoyable,
              and rewarding. Our team works tirelessly to source high-quality
              products from trusted suppliers, ensuring that every item you
              receive meets our strict standards.
            </p>
            <div className="quote-box">
              <i className="bx bxs-quote-alt-left quote-icon"></i>
              <p className="quote-text">
                "Shop Smart, Live Better." We believe in making life easier
                through thoughtful products.
              </p>
            </div>
          </div>

          <div className="mission-stats">
            <div className="stat-card primary">
              <h3>10k+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat-card secondary">
              <h3>100%</h3>
              <p>Quality Guarantee</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-features">
        <div className="section-header">
          <h2>Why Choose Auxry?</h2>
          <p>The standard we promise to every customer.</p>
        </div>
        <div className="bento-grid animate-on-scroll">
          <div className="bento-card large">
            <i className="bx bxs-truck feature-icon"></i>
            <h3>Fast Delivery</h3>
            <p>
              Get your orders quickly with our reliable delivery network
              designed for speed and safety.
            </p>
          </div>

          <div className="bento-card medium">
            <i className="bx bxs-star feature-icon"></i>
            <h3>Trusted Brand</h3>
            <p>Thousands of happy customers trust Auxry Store for quality.</p>
          </div>

          <div className="bento-card medium">
            <i className="bx bxs-lock-alt feature-icon"></i>
            <h3>Secure Payment</h3>
            <p>Your transactions are protected with top-tier SSL encryption.</p>
          </div>

          <div className="bento-card wide">
            <i className="bx bx-support feature-icon"></i>
            <div className="text-group">
              <h3>24/7 Support</h3>
              <p>Our dedicated team is here to help you around the clock.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="about-cta animate-on-scroll">
        <h3>Join the Community</h3>
        <p>Experience the Auxry difference today.</p>
        <button className="btn-primary">Start Shopping</button>
      </div>
    </div>
  );
};

export default About;
 */


import React, { useEffect } from "react";
import "./About.css";
import "boxicons/css/boxicons.min.css";
import { assets } from "../../assets/assets.js";

const About = () => {
  // Simple intersection observer effect for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".animate-on-scroll");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="about-container">
      {/* --- HERO SECTION --- */}
      <section className="about-hero">
        <div className="hero-content animate-on-scroll">
          <div className="hero-badge">
            <i className="bx bxs-store-alt"></i> EST. 2024
          </div>
          <h1 className="hero-title">
            Redefining the way <br />
            <span className="highlight">you shop.</span>
          </h1>
          <p className="hero-subtitle">
            Welcome to Auxry Store. We bridge the gap between exceptional
            quality and everyday lifestyle, providing a curated experience just
            for you.
          </p>
        </div>
        <div className="hero-image-wrapper animate-on-scroll">
          <img src={assets.pic_about} alt="About Auxry" className="hero-img" />
        </div>
      </section>

      {/* --- MISSION SECTION --- */}
      <section className="about-mission">
        <div className="mission-grid">
          <div className="mission-text animate-on-scroll">
            <h4>Our Mission</h4>
            <h2>Empowering your lifestyle through quality and innovation.</h2>
            <p>
              At Auxry Store, we believe shopping should be simple, enjoyable,
              and rewarding. Our team works tirelessly to source high-quality
              products from trusted suppliers, ensuring that every item you
              receive meets our strict standards.
            </p>
            <div className="quote-box">
              <i className="bx bxs-quote-alt-left quote-icon"></i>
              <p className="quote-text">
                "Shop Smart, Live Better." We believe in making life easier
                through thoughtful products.
              </p>
            </div>
          </div>
          <div className="mission-stats animate-on-scroll">
            {/* Decorative layout element */}
            <div className="stat-card primary">
              <h3>10k+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat-card secondary">
              <h3>100%</h3>
              <p>Quality Guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURES BENTO GRID --- */}
      <section className="about-features">
        <div className="section-header animate-on-scroll">
          <h2>Why Choose Auxry?</h2>
          <p>The standard we promise to every customer.</p>
        </div>

        <div className="bento-grid animate-on-scroll">
          <div className="bento-card large">
            <i className="bx bxs-truck feature-icon"></i>
            <h3>Fast Delivery</h3>
            <p>
              Get your orders quickly with our reliable delivery network
              designed for speed and safety.
            </p>
          </div>

          <div className="bento-card medium">
            <i className="bx bxs-star feature-icon"></i>
            <h3>Trusted Brand</h3>
            <p>Thousands of happy customers trust Auxry Store for quality.</p>
          </div>

          <div className="bento-card medium">
            <i className="bx bxs-lock-alt feature-icon"></i>
            <h3>Secure Payment</h3>
            <p>Your transactions are protected with top-tier SSL encryption.</p>
          </div>

          <div className="bento-card wide">
            <i className="bx bx-support feature-icon"></i>
            <div className="text-group">
              <h3>24/7 Support</h3>
              <p>Our dedicated team is here to help you around the clock.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <div className="about-cta animate-on-scroll">
        <h3>Join the Community</h3>
        <p>Experience the Auxry difference today.</p>
        {/* You can link this to your shop page */}
        <button className="btn-primary">Start Shopping</button>
      </div>
    </div>
  );
};

export default About;



