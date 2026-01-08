import { lazy, Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import SecureRoute from "./pages/SecureRoute/SecureRoute.jsx";

const Home = lazy(() => import("./pages/Home/Home.jsx"));
const Shop = lazy(() => import("./pages/Shop/Shop.jsx"));
const Contact = lazy(() => import("./pages/Contact/Contact.jsx"));
const About = lazy(() => import("./pages/About/About.jsx"));
const Cart = lazy(() => import("./pages/Cart/Cart.jsx"));
const PlaceOrder = lazy(() => import("./pages/PlaceOrder/PlaceOrder.jsx"));
const ItemView = lazy(() => import("./pages/ItemView/ItemView.jsx"));
const VerifyPayment = lazy(() =>
  import("./pages/VerifyPayment/VerifyPayment.jsx")
);
const ProductOrders = lazy(() =>
  import("./pages/ProductOrders/ProductOrders.jsx")
);
const NullPage = lazy(() => import("./pages/NullPage/NullPage.jsx"));
const Login = lazy(() => import("./pages/Login/Login.jsx"));

// import {
//   About,
//   Cart,
//   Contact,
//   Footer,
//   Home,
//   ItemView,
//   Login,
//   NullPage,
//   Navbar,
//   PlaceOrder,
//   Shop,
//   SecureRoute,
//   VerifyPayment,
//   ProductOrders,
// } from "./pages/PageRoute/PageRoute.js";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <Suspense fallback={<div style={{ padding: 40 }}>Loading....</div>}>
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
    </Suspense>
  );
}

export default App;
