import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const SecureRoute = ({ ProtectedComponent, setShowLogin }) => {
  const { token } = useContext(StoreContext);

  useEffect(() => {
    if (!token) {
      setShowLogin(true);
    }
  }, [token, setShowLogin]);

  if (!token) {
    return <Navigate to={`/`} replace />;
  }

  return ProtectedComponent; // If user is logged in, render the protected component
};

export default SecureRoute;

