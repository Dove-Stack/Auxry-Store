import React, { useContext, useState } from "react";
import "./Product.css";
import { StoreContext } from "../../context/StoreContext";
import ProductItem from "../ProductItem/ProductItem";
import { ProductNav } from "../../assets/assets";
// import { assets, ProductList } from "../../assets/assets";

const Product = ({ category, setCategory }) => {
  const { ProductList, itemList, itemsArray } = useContext(StoreContext);

  return (
    <div className="product">
      <div className="product-main">
        <h1>Products</h1>
        <ul className="products-nav">
          {ProductNav.map((item, index) => {
            return (
              <div
                className="left"
                onClick={() =>
                  setCategory((prev) =>
                    prev === item.nav_name ? "All" : item.nav_name
                  )
                }
                key={index}
              >
                <li className={category === item.nav_name ? "active" : ""}>
                  {item.nav_name}
                </li>
              </div>
            );
          })}
          {/* <div className="right">
            <button>
              {" "}
              <i className="bx bx-filter"></i> Filter
            </button>
            <button>
              {" "}
              <i className="bx bx-search"></i> Search
            </button>
          </div> */}
        </ul>
      </div>

      <div className="product-main-card">
        {itemsArray[0].productlist.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <ProductItem
                key={index}
                id={item.id}
                image={item.image}
                name={item.name}
                description={item.description}
                salePrice={item.salePrice}
                listPrice={item.listPrice}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Product;
