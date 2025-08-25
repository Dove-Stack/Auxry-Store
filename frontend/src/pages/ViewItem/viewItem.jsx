// import assets from '../../assets/FlashSales/Cloth.jpg'
import { useContext } from "react";
import "./viewItem.css";
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";
import Featured from "../../components/Featured/Featured";
import { toast } from "react-hot-toast"

const viewItem = () => {
  const { selectedProduct, addToCart, FeatureList } = useContext(StoreContext);

  if (!selectedProduct) {
    return (
      <div>
        <p>No product selected!</p>
        <Link to="/">Go back to Home</Link>
      </div>
    );
  }

  return (
    <div className="main-div">
      <div className="title">
        <h2>Product Detail</h2>
      </div>
      <div className="detail">
        <div className="image">
          <img src={`${selectedProduct.image}`} alt="" />
        </div>
        <div className="content">
          <h3 className="name">{selectedProduct.name}</h3>
          <p className="price">${selectedProduct.salePrice}</p>
          <div className="buttons">
            <Link to={`/order`}>
              <button className="checkout-btn">Check Out</button>
            </Link>
            <button
              onClick={() => {
                addToCart(selectedProduct.id);
                toast.success("Item added to cart");
              }}
            >
              Add to Cart <i className="bx bx-cart" ></i>
            </button>
          </div>
          <div className="description">
            <span>{selectedProduct.description}.</span>
            <input type="checkbox" name="" id="" />
            <br />
            <span>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quas
              libero minima animi voluptates quae aspernatur
            </span>
          </div>
        </div>
      </div>
      <div className="similar">
        <h1>Similar Products</h1>
        {/* {FeatureList.map((item, index) => {
          return (
            <>
              <Featured
                key={index}
                id={item.id}
                image={item.image}
                name={item.name}
                description={item.description}
                salePrice={item.salePrice}
                listPrice={item.listPrice}
              />
              {console.log(FeatureList)}
            </>
          );
        })} */}
        <Featured displayTitle={false} excludeItem={selectedProduct} />
      </div>
      <div className="listProduct"></div>
    </div>
  );
};

export default viewItem;
