import React, { useContext } from "react";
import "./Featured.css";
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

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
                  <i
                    onClick={() => {
                      addToCart(item.id);
                      toast.success("Item added to cart");
                    }}
                    
                    className="bx bx-cart-add"
                  ></i>
                ) : (
                  <div className="product-counter-container">
                    <i
                      onClick={() => {
                        addToCart(item.id);
                        toast.success("Item added to cart");
                      }}
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
                    {/* ✅ Only add if item not in cart */}
                    <i
                      onClick={() => {
                        if (!cartItems[item.id]) {
                          addToCart(item.id);
                          toast.success("Item added to cart");
                        }
                      }}
                      className="bx bx-cart"
                      title={
                        cartItems[item.id]
                          ? "Already in cart"
                          : "Add to cart"
                      }
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
                      <i className="bx bx-shopping-bag"></i>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Featured;
