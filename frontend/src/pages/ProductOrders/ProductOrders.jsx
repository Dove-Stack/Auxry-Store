import React, { useContext, useEffect, useState } from "react";
import "./ProductOrders.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const ProductOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );
    setData(response.data.data);
    console.log(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="product-orders">
      <h1>Your Orders</h1>
      {data.length === 0 ? (
        <p>No order Found</p>
      ) : (
        <ul>
          {data.map((order) => (
            <li key={order._id}>
              <p>Order Number: {order.orderNumber}</p>
              <p>Amount: ${order.amount}</p>
              <p>Status: {order.payment ? "Paid ✅" : "Pending 🔃"}</p>
              {/* <p>Order ID: {order._id}</p>
            <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
            <p>Total Amount: ${order.totalAmount}</p>
            <p>Status: {order.status}</p>
            <hr /> */}
              {/* <p>Order ID: {}</p> */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductOrders;
