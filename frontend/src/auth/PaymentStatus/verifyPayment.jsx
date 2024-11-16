import React, { useCallback, useContext, useEffect, useState } from "react";
import "./verifyPayment.css";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

const VerifyPayment = () => {
  const location = useLocation();

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  const { url } = useContext(StoreContext);
  const navigate = useNavigate();

  const getQueryParams = useCallback(() => {
    const searchParams = new URLSearchParams(location.search);
    return {
      orderId: searchParams.get("orderId"),
      success: searchParams.get("success"),
    };
  }, [location.search]);

  const verifyOrder = useCallback(async () => {
    const { orderId, success } = getQueryParams();

    if (!orderId || !success) {
      setError("Invalid verification request.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(`${url}/api/order/verify`, {
        orderId,
        success,
      });

      if (response.data.success) {
        setMessage(response.data.message || `Payment successfully verified `);
        navigate("/myorders");
      } else {
        setMessage("Payment verification failed. Please contact support.");
      }
    } catch (error) {
      setMessage("Error verifying order . Please try again.");
    } finally {
      setLoading(false);
    }
  }, [getQueryParams]);

  useEffect(() => {
    verifyOrder();
  }, [verifyOrder]);

  return (
    <div className="payment-container">
      {loading ? (
        <div className="spinner-container success-message">
          <ClipLoader
            color="#121731"
            speedMultiplier={1}
            loading={loading}
            size={50}
          />
          <p>Verifying your order, please wait.....</p>
        </div>
      ) : (
        <div className="message-container">
          <i class="bx bx-check-circle "></i>
          <h2>{message}</h2>
        </div>
      )}
    </div>
  );
};

export default VerifyPayment;
