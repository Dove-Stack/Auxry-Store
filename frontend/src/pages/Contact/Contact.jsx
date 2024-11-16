// import React from 'react'

// const Contact = () => {
//   return (
//     <div>Contact</div>
//   )
// }

// export default Contact

import React from "react";
import "./Contact.css";
import { assets } from "../../assets/assets";
import ContactMap from "../../components/ContactMap/ContactMap";

const Contact = () => {
  // const { show}

  return (
    <main>
      <div className="contact-banner"></div>
      <h1 className="contact-h1">Contact Us</h1>
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

                  {/* <label>
                    <input type="checkbox" checked="checked" name="sameadr" />{" "}
                    Shipping address same as billing
                  </label> */}
                  <button type="submit" className="btn">
                    Submit
                  </button>
                </div>
                {/* <div className="col-50">
                  <h3>Payment</h3>
                  <label htmlFor="fname">Accepted Cards</label>
                  <div className="icon-container">
                    <i className="bx bxl-visa" style={{ color: "navy" }}></i>
                    <i className="bx bxl-amex" style={{ color: "blue" }}></i>
                    <i
                      className="bx bxl-mastercard"
                      style={{ color: "red" }}
                    ></i>
                    <i
                      className="bx bxl-discover"
                      style={{ color: "orange" }}
                    ></i>
                  </div>
                  <label htmlFor="cname">Name on Card</label>
                  <input
                    type="text"
                    id="cname"
                    name="cardname"
                    placeholder="John More Doe"
                  />
                  <label htmlFor="ccnum">Credit card number</label>
                  <input
                    type="text"
                    id="ccnum"
                    name="cardnumber"
                    placeholder="1111-2222-3333-4444"
                  />
                  <label htmlFor="expmonth">Exp Month</label>
                  <input
                    type="text"
                    id="expmonth"
                    name="expmonth"
                    placeholder="September"
                  />

                  <div className="row">
                    <div className="col-50">
                      <label htmlFor="expyear">Exp Year</label>
                      <input
                        type="text"
                        id="expyear"
                        name="expyear"
                        placeholder="2018"
                      />
                    </div>
                    <div className="col-50">
                      <label htmlFor="cvv">CVV</label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        placeholder="352"
                      />
                    </div>
                  </div>
                  </div> */}
              </div>
            </form>
          </div>
        </div>
        <div className="col-25 col-img">
          {/* <img src={assets.contactImg} alt="" /> */}
          <ContactMap/>
        </div>

        {/* <div className="col-25">
          <div className="container">
            <h4>
              Cart{" "}
              <span className="price" style={{ color: "black" }}>
                <i className="bx bx-cart"></i> 
                <b>4</b>
              </span>
            </h4>
            <p>
              <a href="#">Product 1</a> <span className="price">$15</span>
            </p>
            <hr />
            <p>
              <a href="#">Product 2</a> <span className="price">$5</span>
            </p>
            <hr />
            <p>
              <a href="#">Product 3</a> <span className="price">$8</span>
            </p>
            <hr />
            <p>
              <a href="#">Product 4</a> <span className="price">$2</span>
            </p>
            <hr />
            <p>
              Total{" "}
              <span className="price" style={{ color: "black" }}>
                <b>$30</b>
              </span>
            </p>
          </div>
        </div> */}
      </div>
    </main>
  );
};

export default Contact;
