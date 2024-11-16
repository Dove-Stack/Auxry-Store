import React, { useContext } from "react";
import "./ProductItem.css";
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";

const ProductItem = ({
  id,
  image,
  name,
  description,
  salePrice,
  listPrice,
}) => {
  // const [itemCount, setItemCount] = useState(0);

  const { addToCart, cartItems, removeFromCart, loading } =
    useContext(StoreContext);

  if (loading) {
    return <div>Loading......</div>;
  }

  return (
    <div className="product-card" key={id}>
      <div className="product-card-image-container">
        <img className="product-card-image" src={image} alt="" />
        {!cartItems[id] ? (
          // <i
          //   onClick={() => setItemCount((prev) => prev + 1)}
          //   className="bx bx-plus"
          // ></i>
          <i onClick={() => addToCart(id)} className="bx bx-cart-add"></i>
        ) : (
          <div className="product-counter">
            <i onClick={() => addToCart(id)} className="bx bx-plus"></i>
            <p>{cartItems[id]}</p>
            <i onClick={() => removeFromCart(id)} className="bx bx-minus"></i>
          </div>
        )}
      </div>
      <div className="text">
        <h4>{name}</h4>
        <pre>{description}</pre>
        <div className="prices">
          <span className="sale-price">${salePrice}</span>
          <span className="list-price">${listPrice}</span>
          <br />
        </div>
        <div className="icons">
          <i onClick={() => addToCart(id)} className="bx bx-cart"></i>
          <Link to={`/cart`}>
            {" "}
            {/* <button>View Cart</button>{" "} */}
            <i className="bx bx-shopping-bag view-cart"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
