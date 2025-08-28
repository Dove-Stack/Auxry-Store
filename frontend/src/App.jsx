import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

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
