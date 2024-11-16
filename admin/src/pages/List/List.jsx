import React from "react";
import "./List.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";

const List = ({url}) => {

  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/product/list`);
    console.log(response.data);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const removeFood = async (productId) => {
    const response = await axios.post(`${url}/api/product/remove`, {
      id: productId,
    });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    /*     <div className="list add flex-col">
      <p>All Products List </p>
      <div className="list-table">
        <div className="list-table-format title">
    <b>Image</b>
    <b>Name</b>
    <b>Category</b>
    <b>Price</b>
    <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              <img src={`${url}/images/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    // style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"
                  >
                    <path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path>
                    <path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
                  </svg>
                </p>
            </div>
          );
        })}
      </div>
    </div> */

    <div className="list add flex-col">
      <p>All Products List</p>
      <div className="list-table">
        {/* Table header with column titles */}
        <div className="list-table-format title">
          <p>No.</p>
          <p>Product</p>
          <p>Name</p>
          <p>Category</p>
          <p>Price</p>
          <p>Action</p>
        </div>

        {/* Mapping through list items to display each product */}
        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format list">
              {/* Order ID (can be replaced with item ID) */}
              {/* <div className=""> */}
              <span className="item-no">{item.id || index + 1}.</span>
              {/* <div> */}
              <img src={`${url}/images/` + item.image} alt="Product Image" />
              <p>{item.name}</p>
              {/* </div> */}
              <p>{item.category}</p>
              <p>${item.price}</p>
              {/* </div> */}
              <div>
                <svg
                  onClick={() => removeFood(item._id)}
                  className="svg-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path>
                  <path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
