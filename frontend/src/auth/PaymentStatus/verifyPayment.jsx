// import React, { useCallback, useContext, useEffect, useState } from "react";
// import "./verifyPayment.css";
// import { useLocation, useNavigate } from "react-router-dom";
// import { StoreContext } from "../../context/StoreContext";
// import axios from "axios";
// import ClipLoader from "react-spinners/ClipLoader";

// const VerifyPayment = () => {
//   const location = useLocation();
//   const [loading, setLoading] = useState(true);
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState(null);
//   const { url } = useContext(StoreContext);
//   const navigate = useNavigate();

//   const getQueryParams = useCallback(() => {
//     const searchParams = new URLSearchParams(location.search);
//     return {
//       orderId: searchParams.get("orderId"),
//       success: searchParams.get("success"),
//     };
//   }, [location.search]);

//   const verifyOrder = useCallback(async () => {
//     const { orderId, success } = getQueryParams();
//     console.log("Verifying order:", orderId, success);

//     if (!orderId || !success) {
//       setError("Invalid verification request.");
//       setMessage("Invalid request. Please try again or contact support.");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.post(
//         `${url}/api/order/verify`,
//         {
//           orderId,
//           success,
//         },
//         {
//           timeout: 15000,
//         }
//       );

//       if (response.data.success) {
//         setMessage(response.data.message || "Payment successfully verified");
//         setTimeout(() => {
//           navigate("/product-orders");
//         }, 4000);
//       } else {
//         setMessage("Payment verification failed. Please contact support.");
//       }
//     } catch (error) {
//       if (error.code === "ECONNABORTED") {
//         setMessage(
//           "The request timed out. Please check your internet connection and try again."
//         );
//       } else {
//         setMessage("Error verifying order. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   }, [getQueryParams, navigate, url]);

//   useEffect(() => {
//     verifyOrder();
//   }, [verifyOrder]);

//   return (
//     <div className="payment-container">
//       {loading ? (
//         <div className="spinner-container success-message">
//           <ClipLoader
//             color="#121731"
//             speedMultiplier={1}
//             loading={loading}
//             size={50}
//           />
//           <p>Verifying your order, please wait...</p>
//         </div>
//       ) : (
//         <div className="message-container">
//           <i className="bx bx-check-circle"></i>
//           <h2>{message}</h2>
//         </div>
//       )}
//     </div>
//   );
// };

// export default VerifyPayment;

import React, { useCallback, useContext, useEffect, useState } from "react";
import "./verifyPayment.css";
import { useLocation, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

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
    console.log("Verifying order:", orderId, success);

    if (!orderId || !success) {
      setError("Invalid verification request.");
      setMessage("Invalid request. Please try again or contact support.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `${url}/api/order/verify`,
        {
          orderId,
          success,
        },
        {
          timeout: 15000,
        }
      );

      if (response.data.success) {
        setMessage(response.data.message || "Payment successfully verified");
        setTimeout(() => {
          navigate("/product-orders");
        }, 4000);
      } else {
        setMessage("Payment verification failed. Please contact support.");
      }
    } catch (error) {
      if (error.code === "ECONNABORTED") {
        setMessage(
          "The request timed out. Please check your internet connection and try again."
        );
      } else {
        setMessage("Error verifying order. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }, [getQueryParams, navigate, url]);

  useEffect(() => {
    verifyOrder();
  }, [verifyOrder]);

  return (
    <div className="payment-container">
      {loading ? (
        <div className="spinner-container">
          <div className="custom-loader">
            <div className="loader-ring"></div>
            <div className="loader-core"></div>
          </div>
          <p>Verifying your order, please wait...</p>
        </div>
      ) : (
        <div className="message-container">
          <i className="bx bx-check-circle"></i>
          <h2>{message}</h2>
        </div>
      )}
    </div>
  );
};

export default VerifyPayment;
