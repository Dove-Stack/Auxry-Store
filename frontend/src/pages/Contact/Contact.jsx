

import React, { useState } from "react";
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./Contact.css";
import { assets } from "../../assets/assets";

const Contact = () => {

  const [captchaToken, setCaptchaToken] = useState(null)

  return (
    <main>
      <div className="contact-banner"></div>
      <div className="banner-text">
        <h2>Contact Us</h2>
      </div>
      <div className="row">
        <div className="col-75">
          <div className="container">
            <form action="">
              <div className="row">
                <div className="col-50 col contact">
                  <h2>User Details</h2>
                  <label htmlFor="fname">
                    <i className="bx bxs-user-rectangle"></i>{" "}
                    <span>Full Name</span>
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="John M. Doe"
                    required
                  />
                  <label htmlFor="email">
                    <i className="bx bx-mail-send"></i> <span>Email</span>
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                  />
                  <label htmlFor="adr">
                    <i className="bx bx-user-pin"></i> <span>Address</span>
                  </label>
                  <input
                    type="text"
                    id="adr"
                    name="address"
                    placeholder="542 W. 15th Street"
                    required
                  />
                  <label htmlFor="city">
                    <i className="bx bxs-city"></i> <span>City</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="New York"
                    required
                  />
                  <div className="row bottom-row">
                    <div className="col-50 col-address">
                      <label htmlFor="state">
                        <i className="bx bxs-bank"></i>
                        State
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="NY"
                      />
                    </div>
                    <div className="col-50 col-address zip">
                      <label htmlFor="zip">
                        <i className="bx bxs-pin"></i>Zip
                      </label>
                      <input
                        type="text"
                        id="zip"
                        name="zip"
                        placeholder="10001"
                      />
                    </div>
                  </div>

                  <label htmlFor="message">
                    <i className="bx bx-chat"></i>
                    <span>Message</span>
                  </label>
                  <textarea name="message" id="message"></textarea>

                  <button type="submit" className="btn">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-50 col-img">
          {/* <img src={assets.contactImg} alt="" /> */}
          <iframe
            width="600"
            height="800"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Texas+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>{" "}
          <script
            type="text/javascript"
            src="https://embedmaps.com/google-maps-authorization/script.js?id=0ba9acdb19a10b9aad45c51fb578d14853e13cc2"
          ></script>
          {/* <ContactMap/> */}
        </div>
      </div>
    </main>
  );
};

export default Contact;
