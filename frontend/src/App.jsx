/* import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";

import {
  About,
  Cart,
  Contact,
  Footer,
  Home,
  ItemView,
  Login,
  NullPage,
  Navbar,
  PlaceOrder,
  Shop,
  SecureRoute,
  VerifyPayment,
  ProductOrders,
} from "./pages/PageRoute/PageRoute.js";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? (
        <Login setShowLogin={setShowLogin} />
      ) : (
        <>
          <Navbar setShowLogin={setShowLogin} />

          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/cart"
              element={
                <SecureRoute
                  setShowLogin={setShowLogin}
                  ProtectedComponent={<Cart />}
                />
              }
            />
            <Route
              path="/order"
              element={
                <SecureRoute
                  setShowLogin={setShowLogin}
                  ProtectedComponent={<PlaceOrder />}
                />
              }
            />
            <Route path="/preview" element={<ItemView />} />
            <Route path="/verify-payment" element={<VerifyPayment />} />
            <Route path="/product-orders" element={<ProductOrders />} />
            <Route path="*" element={<NullPage />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
 */



import React, { useState, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import Navbar from "./components/Navbar/Navbar"; // Ensure this path is correct
import Footer from "./components/Footer/Footer"; // Ensure this path is correct

// --- LAZY LOAD IMPORTS (Splits the bundle) ---
// Note: It is safer to import directly from the file location rather than the barrel file './pages/PageRoute/PageRoute.js'
// If these paths are wrong, adjust them to where the files actually live (e.g., ./pages/Home/Home.jsx)

const Home = React.lazy(() => import("./pages/Home/Home"));
const Shop = React.lazy(() => import("./pages/Shop/Shop"));
const Contact = React.lazy(() => import("./pages/Contact/Contact"));
const About = React.lazy(() => import("./pages/About/About"));
const Cart = React.lazy(() => import("./pages/Cart/Cart"));
const PlaceOrder = React.lazy(() => import("./pages/PlaceOrder/PlaceOrder"));
const ItemView = React.lazy(() => import("./pages/ViewItem/viewItem.jsx"));
const Login = React.lazy(() => import("./components/Login/Login.jsx")); // Check this path
const VerifyPayment = React.lazy(() =>
  import("./auth/PaymentStatus/verifyPayment.jsx")
);
const ProductOrders = React.lazy(() =>
  import("./pages/ProductOrders/ProductOrders")
);
const NullPage = React.lazy(() => import("./pages/NullPage/NullPage"));
import SecureRoute from "./auth/SecureRoute/SecureRoute.jsx"; // Keep this standard import

// Simple Loading Component for route transitions
const PageLoader = () => (
  <div
    style={{
      height: "80vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    Loading...
  </div>
);

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? (
        <Suspense fallback={<PageLoader />}>
          <Login setShowLogin={setShowLogin} />
        </Suspense>
      ) : (
        <>
          <Navbar setShowLogin={setShowLogin} />
          <ScrollToTop />

          {/* WRAP ROUTES IN SUSPENSE */}
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route
                path="/cart"
                element={
                  <SecureRoute
                    setShowLogin={setShowLogin}
                    ProtectedComponent={<Cart />}
                  />
                }
              />
              <Route
                path="/order"
                element={
                  <SecureRoute
                    setShowLogin={setShowLogin}
                    ProtectedComponent={<PlaceOrder />}
                  />
                }
              />
              <Route path="/preview" element={<ItemView />} />
              <Route path="/verify-payment" element={<VerifyPayment />} />
              <Route path="/product-orders" element={<ProductOrders />} />
              <Route path="*" element={<NullPage />} />
            </Routes>
          </Suspense>

          <Footer />
        </>
      )}
    </>
  );
}

export default App;