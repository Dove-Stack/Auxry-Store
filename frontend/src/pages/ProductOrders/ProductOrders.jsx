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
    console.log(response.data.data)
  };

  useEffect(() => {
    if(token) {
        fetchOrders();
    }
  }, [token])

  return <div>
    <h1>
        {data.map((order, index ) => {
            
        })}
    </h1>
  </div>;
};

export default ProductOrders;
