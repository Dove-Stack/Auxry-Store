// import React, { useContext, useEffect, useState } from "react";
// import "./ProductOrders.css";
// import { StoreContext } from "../../context/StoreContext";
// import axios from "axios";

// const ProductOrders = () => {
//   const { url, token } = useContext(StoreContext);
//   const [data, setData] = useState([]);

//   const fetchOrders = async () => {
//     const response = await axios.post(
//       url + "/api/order/userorders",
//       {},
//       { headers: { token } }
//     );
//     setData(response.data.data);
//     console.log(response.data.data);
//   };

//   useEffect(() => {
//     if (token) {
//       fetchOrders();
//     }
//   }, [token]);

//   return (
//     <div className="product-orders">
//       <h1>Your Orders</h1>
//       {data.length === 0 ? (
//         <p>No order Found</p>
//       ) : (
//         <ul>
//           {data.map((order) => (
//             <li key={order._id}>
//               <p>Order Number: {order.orderNumber}</p>
//               <p>Amount: ${order.amount}</p>
//               <p>Status: {order.payment ? "Paid ✅" : "Pending 🔃"}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default ProductOrders;

import React, { useContext, useEffect, useState } from "react";
import "./ProductOrders.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const ProductOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await axios.post(
        url + "/api/order/userorders",
        {},
        { headers: { token } }
      );
      console.log("Raw response:", response.data);
      console.log("Orders:", response.data.data);
      setData(Array.isArray(response.data.data) ? response.data.data : []);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
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
        <p>No orders found.</p>
      ) : (
        <ul>
          {data.map((order) => (
            <li key={order._id}>
              <p>Order Number: {order.orderNumber || "Not assigned"}</p>
              <p>Amount: ${order.amount}</p>
              <p>Status: {order.payment ? "Paid" : "Pending"}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductOrders;
