import { createContext, useEffect, useState } from "react";
import {
  FeatureList,
  itemsArray,
  ProductList,
  TopDealList,
  News,
  PList,
} from "../assets/assets";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const url = "http://localhost:4000";

  // const [token, setToken] = useState("");

  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const navigate = useNavigate();

  const getToken = localStorage.getItem("token");

  const signOut = () => {
    setToken("");
    localStorage.removeItem("token");
    navigate("/");
  };

  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    if (token) {
      await axios.post(
        url + "/api/cart/add",
        { itemId },
        {
          headers: {
            token,
          },
        }
      );
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      await axios.post(
        url + "/api/cart/remove",
        { itemId },
        {
          headers: {
            token,
          },
        }
      );
    }
  };

  const clearFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
    if (token) {
      await axios.post(
        url + "/api/cart/clear",
        { itemId },
        {
          headers: {
            token,
          },
        }
      );
    }
  };

  const loadCartData = async (token) => {
    const response = await axios.post(
      url + "/api/cart/get",
      {},
      {
        headers: {
          token,
        },
      }
    );
    setCartItems(response.data.cartData);
  };

  useEffect(() => {
    async function loadData() {
      if (getToken) {
        setToken(getToken);
        await loadCartData(getToken);
      }
    }
    loadData();
  }, []);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo =
          ProductList.find((product) => product.id === item) ||
          FeatureList.find((feature) => feature.id === item);
        totalAmount += Math.round(itemInfo.salePrice * cartItems[item]);
      }
    }
    return totalAmount;
  };

  const contextValue = {
    ProductList,
    FeatureList,
    itemsArray,
    itemList: PList,
    cartItems,
    selectedProduct,
    url,
    token,
    TopDealList,
    // itemList,
    addToCart,
    clearFromCart,
    getTotalCartAmount,
    removeFromCart,
    setCartItems,
    setSelectedProduct,
    setToken,
    signOut,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
