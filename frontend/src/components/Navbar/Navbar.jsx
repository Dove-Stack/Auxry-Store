import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import "boxicons/css/boxicons.min.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [isActive, setIsActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { getTotalCartAmount, token, setToken, signOut } =
    useContext(StoreContext);

  // const logOut

  return (
    <header className={`header ${scrolled ? "scroll-active" : ""}`} id="header">
      <nav className={`navbar ${isActive ? "active" : ""}`}>
        <Link to={`/`}>
          <img src={assets.Logo1} className="logo" alt="" />
        </Link>
        <li>Home</li>
        <Link to={`/shop`}>
          <li>Shop</li>
        </Link>
        <Link to={`/contact`}>
          <li>Contact</li>
        </Link>
        <Link to={`/about`}>
          <li>About Us</li>
        </Link>
      </nav>

      <div className="header-icon">
        <Link to="/cart">
          <i className="bx bx-cart"></i>{" "}
        </Link>
        <i className="bx bx-search"></i>
        <i className="bx bx-menu" id="menu-btn"></i>
        {/* <div className={getTotalCartAmount() === 0 ? "" : "dot"}>{}</div> */}
        <i
          className={`bx bx-x ${isActive ? "active" : ""}`}
          onClick={toggleNavbar}
          id="close-menu-btn"
        ></i>
        {/* <i className="bx bx-user" onClick={() => setShowLogin(true)}></i> */}
        {/* {!token ? (
          // <i
          //   className={`bx bx-menu ${isActive ? "active" : ""}`}
          //   onClick={toggleNavbar}
          //   id="menu-btn"
          // ></i>
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        ) : (
          <div className="nav-profile">
            <i className="bx bx-user-circle"></i>
            <ul className="nav-profile-dropdown">
              <li>
                <i></i>
              </li>
              <hr />
              <li></li>
            </ul>
          </div>
        )} */}

        {!token ? (
          <i className="bx bx-user" onClick={() => setShowLogin(true)}></i>
        ) : (
          // <button onClick={() => setShowLogin(true)}>Sign In</button>
          <div className="nav-profile">
            <i className="bx bxs-user-circle"></i>
            <ul className="nav-profile-dropdown">
              <Link to={"/order"}>
                <li>
                  <i className="bx bx-basket"></i>
                  <span>Orders</span>
                </li>
              </Link>
              <hr />
              <li onClick={signOut}>
                <i onClick={signOut} className="bx bx-log-out-circle"></i>
                <span>Log Out</span>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="form-div">
        <form action="" className="header-form">
          <input type="text" />
          <i className="bx bx-search"></i>
        </form>
      </div>
    </header>
  );
};

export default Navbar;
