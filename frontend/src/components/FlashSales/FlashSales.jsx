import React from "react";
import { assets } from "../../assets/assets";
import "./FlashSales.css";

const FlashSales = () => {
  return (
    <>
      <main className="flash-sale">
        <section>
          <img className="sale-image" src={assets.Sale2} alt="" />
          <div className="text-content">
            <div>
              <span className="product-category">Perfume</span>
              <h1>La Vout Sweater</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                assumenda temporibus dolorem.
              </p>
              <div className="prices">
                <span className="sale-price">$51.75</span>
                
              </div>
              <button>
                BUY NOW <i className="bx bx-cart"></i>{" "}
              </button>
            </div>
          </div>
        </section>
        <section>
          <img className="sale-image" src={assets.Sale1} alt="" />
          <div className="text-content">
            <span className="product-category">Perfume</span>
            <h1>La Vout Sweater</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              assumenda temporibus dolorem.
            </p>

            <div className="prices">
              <span className="sale-price">$51.75</span>

              {/* <span className="list-price">$75.25</span>
              <span className="percent">-32%</span> */}
            </div>
            <button>
              BUY NOW <i className="bx bx-cart"></i>{" "}
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default FlashSales;
