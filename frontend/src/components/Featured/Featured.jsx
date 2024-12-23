import React, { useContext } from "react";
import "./Featured.css";
import { StoreContext } from "../../context/StoreContext";
// import { FeatureList } from "../../assets/assets";
import { Link } from "react-router-dom";

const Featured = ({ displayTitle = true, excludeItem }) => {
  const {
    addToCart,
    cartItems,
    removeFromCart,
    setSelectedProduct,
    itemList,
    itemsArray,
    FeatureList,
  } = useContext(StoreContext);

  const FeaturedItem = itemsArray[1].featurelist.filter(
    (item) => item.id !== excludeItem?.id
  );

  // const FeatureItem = itemList.

  return (
    <>
      {displayTitle && (
        <div className="feature-header">
          <h1>Featured</h1>
        </div>
      )}

      <div className="feature">
        <div className="feature-card">
          {FeaturedItem.map((item, index) => {
            return (
              <div className="feature-main-card" key={index}>
                <img
                  className={`${
                    item.radius === "true"
                      ? "feature-card-image-odd"
                      : "feature-card-image"
                  }`}
                  src={item.image}
                  alt=""
                />
                {!cartItems[item.id] ? (
                  // <i
                  //   onClick={() => setItemCount((prev) => prev + 1)}
                  //   className="bx bx-plus"
                  // ></i>
                  <i
                    onClick={() => addToCart(item.id)}
                    className="bx bx-cart-add"
                  ></i>
                ) : (
                  <div className="product-counter-container">
                    <i
                      onClick={() => addToCart(item.id)}
                      className="bx bx-plus"
                    ></i>
                    <p>{cartItems[item.id]}</p>
                    <i
                      onClick={() => removeFromCart(item.id)}
                      className="bx bx-minus"
                    ></i>
                  </div>
                )}
                <div className="text">
                  <h4>{item.name}</h4>
                  <pre>{item.description}</pre>
                  <div className="">
                    <span className="sale-price">${item.salePrice}</span>
                    <span className="list-price">${item.listPrice}</span>
                    <span className="percent">-{item.percent}%</span>
                  </div>
                  <div className="bottom">
                    <i
                      onClick={() => addToCart(item.id)}
                      className="bx bx-cart"
                    ></i>
                    <Link to={`/preview`}>
                      <i
                        onClick={() => {
                          setSelectedProduct(item);
                        }}
                        className={`bx bx-glasses`}
                      ></i>
                    </Link>
                    <Link to={`/cart`}>
                      {/* <button
                        onClick={() => {
                          // console.log(item)
                          setSelectedProduct(item);
                        }}
                      >
                        View Item
                      </button> */}
                      <i className="bx bx-shopping-bag"></i>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Link to={`/cart`} className="more-btn">
          View More
        </Link>
      </div>
    </>
  );
};

export default Featured;
