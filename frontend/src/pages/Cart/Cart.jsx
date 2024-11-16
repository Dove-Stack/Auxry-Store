import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const cart = () => {
  const {
    ProductList = [],
    cartItems = {},
    itemList,
    itemsArray,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    FeatureList = [],
  } = useContext(StoreContext);

  const navigate = useNavigate();

  const handleShowItem = () => {
    console.log(cartItems);
  };

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p className="nav">Items</p>
          <p className="nav">Title</p>
          <p className="nav price-item">Price</p>
          <p className="nav">Quantity</p>
          <p className="nav">Total</p>
          <p className="nav">Removed</p>
        </div>
        <br />
        <hr />

        {/*         {ProductList.map((item, index) => {
          if (cartItems[item.id] > 0) {
            return (
              <div key={index}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.salePrice}</p>
                  <p>{cartItems[item.id]}</p>
                  <p>${Math.floor(item.salePrice * cartItems[item.id])}</p>
                  <div className="icon-cart">
                    <i
                      onClick={() => addToCart(item.id)}
                      className="bx bx-plus"
                    ></i>
                    <i
                      onClick={() => removeFromCart(item.id)}
                      className="bx bx-trash-alt"
                    ></i>
                    <i
                      onClick={() => removeFromCart(item.id)}
                      className="bx bx-minus"
                    ></i>
                  </div>
                </div>
                <hr />
              </div>
            );
          }
        })}
 */}

        {itemsArray[0].productlist.map((item, index) => {
          if (cartItems[item.id] > 0) {
            return (
              <div key={index}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.salePrice}</p>
                  <p>{cartItems[item.id]}</p>
                  <p>${item.salePrice * cartItems[item.id]}</p>
                  <div className="icon-cart">
                    <i
                      className="bx bx-plus"
                      onClick={() => addToCart(item.id)}
                    ></i>
                    <i
                      className="bx bx-trash-alt"
                      onClick={() => removeFromCart(item.id)}
                    ></i>
                    <i
                      className="bx bx-minus"
                      onClick={() => removeFromCart(item.id)}
                    ></i>
                  </div>
                </div>
              </div>
            );
          }
        })}
        {itemsArray[1].featurelist.map((item, index) => {
          if (cartItems[item.id] > 0) {
            return (
              <div key={index}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.salePrice}</p>
                  <p>{cartItems[item.id]}</p>
                  <p>${item.salePrice * cartItems[item.id]}</p>
                  <div className="icon-cart">
                    <i
                      className="bx bx-plus"
                      onClick={() => addToCart(item.id)}
                    ></i>
                    <i
                      className="bx bx-trash-alt"
                      onClick={() => removeFromCart(item.id)}
                    ></i>
                    <i
                      className="bx bx-minus"
                      onClick={() => removeFromCart(item.id)}
                    ></i>
                  </div>
                </div>
              </div>
            );
          }
        })}

        {/*         {FeatureList.map((item, index) => {
          if (cartItems[item.id] > 0) {
            return (
              <div key={index}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.salePrice}</p>
                  <p>{cartItems[item.id]}</p>
                  <p>${Math.floor(item.salePrice * cartItems[item.id])}</p>

                  <div className="icon-cart">
                    <i
                      onClick={() => addToCart(item.id)}
                      className="bx bx-plus"
                    ></i>
                    <i
                      onClick={() => removeFromCart(item.id)}
                      className="bx bx-trash-alt"
                    ></i>
                    <i
                      onClick={() => removeFromCart(item.id)}
                      className="bx bx-minus"
                    ></i>
                  </div>
                </div>
                <hr />
              </div>
            );
          }
        })} */}
      </div>
      <div className="card-bottom">
        <div className="card-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Sub Total</p>
              <p>${getTotalCartAmount(cartItems)}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>
          <button
            onClick={() => {
              handleShowItem();
              navigate("/order");
            }}
          >
            Proceed to CheckOut
            <i className="bx bx-cart-alt"></i>
          </button>
        </div>
        <div className="cart-couponcode">
          <div>
            <p>Enter Coupon Code here.....</p>
            <div className="cart-couponcode-input">
              <input type="text" placeholder="" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cart;
