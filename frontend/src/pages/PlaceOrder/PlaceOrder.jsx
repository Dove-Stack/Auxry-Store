import { useContext, useEffect, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
// import { FeatureList, ProductList } from "../../assets/assets";
import axios from "axios";

const PlaceOrder = () => {
  const {
    getTotalCartAmount,
    token,
    FeatureList,
    ProductList,
    itemList = [],
    PList,
    cartItems = {},
    url,
  } = useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  /*   const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];

        // ProductList.map((item) => {
    //   if (cartItems[item._id] > 0) {
    //     let itemInfo = item;
    //     itemInfo["quantity"] = cartItems[item._id];
    //     orderItems.push(itemInfo);
    //   }
    // });

    // console.log(itemList[0].productlist.map((item) => {
    //   return <div>
    //     {alert(<p>{item.id}</p>)}
    //   </div>
    // }))


    // itemList.forEach((item) => {
    //   if(cartItems[item.id] > 0) {
    //     let itemInfo = item;
    //     itemInfo["quantity"] = cartItems[item.id]
    //     orderItems.push(itemInfo)
    //   }
    // })
 

    // itemList[1].featurelist.map((item) => {
    //   if (cartItems[item.id] > 0) {
    //     let itemInfo = item;
    //     // itemInfo["quantity"] = cartItems[item.id];
    //     orderItems.push(itemInfo);
    //   }
    // });

    if (Array.isArray(itemList)) {
      itemList.forEach((item) => {
        if (item.productlist) {
          item.productlist.forEach((product) => {
            if (cartItems[product.id] > 0) {
              const itemInfo = { ...product, quantity: cartItems[product.id] };
              orderItems.push(itemInfo);
            }
          });

          if (item.featurelist) {
            item.featurelist.forEach((feature) => {
              if (cartItems[feature.id] > 0) {
                const itemInfo = {
                  ...feature,
                  quantity: cartItems[feature.id],
                };
                orderItems.push(itemInfo);
              }
            });
          }
        }
      });
    } else {
      console.error("itemList is not an array", itemList);
    }



    // itemList.forEach((item) => {
    //   if (item.productlist) {
    //     item.productlist.forEach((product) => {
    //       if (cartItems[product.id] > 0) {
    //         const itemInfo = { ...product, quantity: cartItems[product.id] };
    //         orderItems.push(itemInfo);
    //       }
    //     });

    //     if (item.featurelist) {
    //       item.featurelist.forEach((feature) => {
    //         if (cartItems[feature.id] > 0) {
    //           const itemInfo = {
    //             ...feature,
    //             quantity: cartItems[feature.id],
    //           };
    //           orderItems.push(itemInfo);
    //         }
    //       });
    //     }
    //   }
    // });

    // itemList.forEach((item) => {
    //   if ( m.productlist) {
    //     item.productlist.forEach((item) => {
    //       if (cartItems[item._id] > 0) {
    //         let itemInfo = { ...item, quantity: cartItems[item._id] };
    //         orderItems.push(itemInfo);
    //       }
    //     });
    //   }

    //   if (item.featurelist) {
    //     item.featurelist.forEach((item) => {
    //       if (cartItems[item._id] > 0) {
    //         let itemInfo = { ...item, quantity: cartItems[item._id] };
    //         orderItems.push(itemInfo);
    //       }
    //     });
    //   }
    // });

    // itemList.map((item) => {
    //   console.log(item);

    //   if (cartItems[item._id] > 0) {
    //     let itemInfo = item;
    //     itemInfo["quantity"] = cartItems[item._id];
    //     orderItems.push(itemInfo);
    //   }
    // });

    // PList.map((item) => {
    console.log(orderItems);
    //   if (cartItems[item._id] > 0) {
    //     let itemInfo = item;
    //     itemInfo["quantity"] = cartItems[item._id];
    //     orderItems.push(itemInfo);
    //   }
    // });

    // itemList.map((item) => {
    //   if (cartItems[item._id] > 0) {
    //     let itemInfo = { ...item };
    //     itemInfo["quantity"] = cartItems[item._id];
    //     orderItems.push(itemInfo);
    //   }
    // });

    // FeatureList.map((item) => {
    //   if (cartItems[item._id] > 0) {
    //     let itemInfo = item;
    //     itemInfo["quantity"] = cartItems[item._id];
    //     orderItems.push(itemInfo);
    //   }
    // });

    let orderData = {
      address: data.street,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };

    alert(JSON.stringify(orderData));
    // let response = await axios.post(url + "/api/order/place",  orderData, {headers: {token}})
    let response = await axios.post(url + "/api/order/place", orderData, {
      headers: { token },
    });

    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      alert("Error");
    }
    console.log("🚀 ~ itemList.map ~ orderItems:", orderItems);
  }; */

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];

    if (Array.isArray(itemList.productlist)) {
      itemList.productlist.forEach((product) => {
        if (cartItems[product.id] > 0) {
          const itemInfo = { ...product, quantity: cartItems[product.id] };
          orderItems.push(itemInfo);
          console.log("Added product to orderItems:", itemInfo);
        }
      });
    }

    if (Array.isArray(itemList.featurelist)) {
      itemList.featurelist.forEach((feature) => {
        if (cartItems[feature.id] > 0) {
          const itemInfo = { ...feature, quantity: cartItems[feature.id] };
          orderItems.push(itemInfo);
          console.log("Added feature to orderItems:", itemInfo);
        }
      });
    }
    // Optionally, check other arrays like topdeals if needed:
    // if (Array.isArray(itemList.topdeals)) {
    //   itemList.topdeals.forEach((deal) => {
    //     console.log("Top Deal:", deal, "Cart Quantity:", cartItems[deal.id]);
    //     if (cartItems[deal.id] > 0) {
    //       const itemInfo = { ...deal, quantity: cartItems[deal.id] };
    //       orderItems.push(itemInfo);
    //       console.log("Added deal to orderItems:", itemInfo);
    //     }
    //   });
    // }

    console.log("Final orderItems:", orderItems); // Check if orderItems are correctly populated
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };

    alert(JSON.stringify(orderData)); // Check order data before sending

    let response = await axios.post(url + "/api/order/place", orderData, {
      headers: { token },
    });

    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      alert("Error placing order");
    }
  };

  // alert(itemList.)
  // alert("🚀 ~ itemList.map ~ orderItems:", cartItems);
  // alert("🚀 ~ itemList.map ~ orderItems:", ProductList);

  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">
          Delivery Info. <i className="bx bx-info-square"></i>
        </p>
        <div className="multi-fields">
          <input
            name="firstName"
            onChange={onChangeHandler}
            value={data.firstName}
            type="text"
            placeholder="First Name"
          />
          <input
            name="lastName"
            onChange={onChangeHandler}
            value={data.lastName}
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          name="email"
          onChange={onChangeHandler}
          value={data.email}
          type="email"
          placeholder="Email address"
        />
        <input
          name="street"
          onChange={onChangeHandler}
          value={data.street}
          type="text"
          placeholder="Street"
        />
        <div className="multi-fields">
          <input
            name="city"
            onChange={onChangeHandler}
            value={data.city}
            type="text"
            placeholder="City"
          />
          <input
            name="state"
            onChange={onChangeHandler}
            value={data.state}
            type="text"
            placeholder="State"
          />
        </div>
        <div className="multi-fields">
          <input
            name="zipcode"
            onChange={onChangeHandler}
            value={data.zipcode}
            type="text"
            placeholder="Zip Code"
          />
          <input
            name="country"
            onChange={onChangeHandler}
            value={data.country}
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          name="phone"
          onChange={onChangeHandler}
          value={data.phone}
          type="text"
          placeholder="Phone"
        />
      </div>
      <div className="place-order-right">
        <div className="card-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Sub Total</p>
              <p>${getTotalCartAmount()}</p>
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
          <button type="submit">
            Proceed to Payment
            <i className="bx bx-wallet"></i>
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
