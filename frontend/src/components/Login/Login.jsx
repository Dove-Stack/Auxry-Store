import React, { useContext, useState } from "react";
import "./Login.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import toast from "react-hot-toast";

const Login = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);

  const [loginState, setLoginState] = useState("Login");

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();

    let newUrl = url;
    if (loginState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    try {
      const response = await axios.post(newUrl, data);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);

        if (loginState === "Sign Up") {
          toast.success("Account created successfully! You can now log in.");
          setLoginState("Login");
        } else {
          toast.success("Login successful!");
          setShowLogin(false);
        }
      } else {
        toast.error(
          response.data.message || "Authentication failed. Please try again."
        );
      }
    } catch (error) {
      console.error("Error during authentication:", error);

      if (loginState === "Sign Up") {
        toast.error("Sign up failed . Please try again");
      } else {
        toast.error(
          "Login Failed. Please check your credentials and try again."
        );
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="header-login">
        <form onSubmit={onLogin} className="header-login-container">
          <div className="login-title">
            <h2>{loginState}</h2>
            <i onClick={() => setShowLogin(false)} className="bx bx-x"></i>
          </div>
          <div className="login-input">
            {loginState === "Login" ? (
              <></>
            ) : (
              <input
                name="name"
                onChange={onChangeHandler}
                value={data.name}
                type="text"
                placeholder="Name"
                required
              />
            )}
            <input
              name="email"
              onChange={onChangeHandler}
              value={data.email}
              type="email"
              placeholder="Email"
              required
            />
            <input
              name="password"
              onChange={onChangeHandler}
              value={data.password}
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <button type="submit">
            {loginState === "Sign Up" ? "Create Account" : "Login"}
          </button>
          <div className="login-popup-func">
            <input type="checkbox" required />
            <p className="terms">
              By continuing, I agree to the terms of use & privacy policy.
            </p>
          </div>
          {loginState === "Login" ? (
            <p>
              Create a new Account?{" "}
              <span onClick={() => setLoginState("Sign Up")}>Click here</span>
            </p>
          ) : (
            <p>
              Already have an Account?{" "}
              <span onClick={() => setLoginState("Login")}>Login Here</span>
            </p>
          )}
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
