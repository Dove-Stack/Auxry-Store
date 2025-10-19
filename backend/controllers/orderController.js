// import orderModel from "../models/orderModel.js";
// import userModel from "../models/userModel.js";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// const placeOrder = async (req, res) => {
//   const frontend_url = process.env.FRONTEND_URL || "http://localhost:5173";

//   try {
//     const lastOrder = await orderModel
//       .findOne()
//       .sort({ orderNumber: -1 })
//       .select("orderNumber");
//     let nextOrderNumber;
//     if (lastOrder && lastOrder.orderNumber) {
//       const currentMax = parseInt(lastOrder.orderNumber.split("-")[1]);
//       nextOrderNumber = `ORD-${currentMax + 1}`;
//     } else {
//       nextOrderNumber = "ORD-10001";
//     }

//     console.log("Generated orderNumber:", nextOrderNumber);

//     const existingOrder = await orderModel.findOne({
//       orderNumber: nextOrderNumber,
//     });
//     if (existingOrder) {
//       throw new Error(`Duplicate orderNumber detected: ${nextOrderNumber}`);
//     }

//     const newOrder = new orderModel({
//       userId: req.body.userId,
//       items: req.body.items,
//       amount: req.body.amount,
//       address: req.body.address,
//       payment: false,
//       orderNumber: nextOrderNumber,
//     });

//     await newOrder.save();
//     console.log("Saved order:", newOrder);

//     await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

//     const line_items = req.body.items.map((item) => ({
//       price_data: {
//         currency: "usd",
//         product_data: { name: item.name || "Unnamed Item" }, // Fallback name
//         unit_amount: Math.round((item.salePrice || 0) * 100), // Convert to cents
//       },
//       quantity: item.quantity || 1,
//     }));

//     // Add delivery charge
//     line_items.push({
//       price_data: {
//         currency: "usd",
//         product_data: { name: "Delivery Charges" },
//         unit_amount: 200, // $2.00 in cents
//       },
//       quantity: 1,
//     });

//     console.log("Generated line_items:", line_items);

//     const session = await stripe.checkout.sessions.create({
//       line_items,
//       mode: "payment",
//       metadata: { orderId: newOrder._id.toString() },
//       success_url: `${frontend_url}/verify-payment?success=true&orderId=${newOrder._id}`,
//       cancel_url: `${frontend_url}/verify-payment?success=false&orderId=${newOrder._id}`,
//     });

//     res.json({ success: true, session_url: session.url });
//   } catch (error) {
//     console.log("🚀 ~ placeOrder ~ error:", error);
//     res.status(500).json({
//       success: false,
//       message: error.message || "Error placing order",
//     });
//   }
// };

// const verifyOrder = async (req, res) => {
//   console.log("Received data:", req.body);
//   const { orderId, success } = req.body;
//   try {
//     if (success == "true") {
//       await orderModel.findByIdAndUpdate(orderId, { payment: true });
//       return res
//         .status(200)
//         .json({ success: true, message: "Payment successfully verified." });
//     } else {
//       await orderModel.findByIdAndDelete(orderId);
//       return res
//         .status(200)
//         .json({ success: false, message: "Payment verification failed." });
//     }
//   } catch (error) {
//     console.log(error);
//     res
//       .status(500)
//       .json({ success: false, message: "Error verifying payment." });
//   }
// };

// // const handleStripeWebhook = async (req, res) => {
// //   const stripeSignature = req.headers["stripe-signature"];
// //   const stripeWebHookKey = process.env.STRIPE_WEBHOOK_SECRET;

// //   let event;
// //   try {
// //     event = stripe.webhooks.constructEvent(
// //       req.body,
// //       stripeSignature,
// //       stripeWebHookKey
// //     );
// //   } catch (err) {
// //     console.error("Webhook signature verification failed: ", err.message);
// //     return res.status(400).send(`Webhook Error: ${err.message}`);
// //   }

// //   if (event.type === "checkout.session.completed") {
// //     const session = event.data.object;

// //     const orderId = session.metadata.orderId;

// //     try {
// //       await orderModel.findByIdAndUpdate(orderId, { payment: true });
// //       console.log(`Order ${orderId} payment confirmed.`);
// //       res.json({ success: true, message: "Payment Confirmed" });
// //     } catch (err) {
// //       console.error("Error updating order: ", err.message);
// //       res.json({ success: false, message: "Payment Confirmed" });
// //     }
// //   }

// //   res.status(200).json({ recieved: true });
// // };

// const handleStripeWebhook = async (req, res) => {
//   const stripeSignature = req.headers["stripe-signature"];
//   const stripeWebHookKey = process.env.STRIPE_WEBHOOK_SECRET;

//   let event;

//   try {
//     event = stripe.webhooks.constructEvent(
//       req.body,
//       stripeSignature,
//       stripeWebHookKey
//     );
//   } catch (err) {
//     console.error("❌ Webhook signature verification failed:", err.message);
//     return res.status(400).send(`Webhook Error: ${err.message}`);
//   }

//   try {
//     if (event.type === "checkout.session.completed") {
//       const session = event.data.object;
//       const orderId = session.metadata.orderId;

//       await orderModel.findByIdAndUpdate(orderId, { payment: true });
//       console.log(
//         `✅ Stripe webhook confirmed: Order ${orderId} marked as paid.`
//       );
//     }

//     return res.sendStatus(200);
//   } catch (error) {
//     console.error("❌ Webhook handling error:", error.message);
//     return res.status(500).send("Internal Server Error");
//   }
// };

// const userOrders = async (req, res) => {
//   try {
//     const orders = await orderModel.find({ userId: req.body.userId });
//     console.log("Orders Fetched", orders);
//     res.json({ success: true, data: orders });
//   } catch (error) {
//     console.error(error);
//     res.json({ success: false, message: "Error" });
//   }
// };

// export { placeOrder, verifyOrder, handleStripeWebhook, userOrders };

import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// PLACE ORDER
export const placeOrder = async (req, res) => {
  const frontend_url = process.env.FRONTEND_URL || "http://localhost:5173";

  try {
    // Generate incremental order number
    const lastOrder = await orderModel
      .findOne()
      .sort({ orderNumber: -1 })
      .select("orderNumber");

    const nextOrderNumber = lastOrder?.orderNumber
      ? `ORD-${parseInt(lastOrder.orderNumber.split("-")[1]) + 1}`
      : "ORD-10001";

    console.log("Generated orderNumber:", nextOrderNumber);

    const existingOrder = await orderModel.findOne({
      orderNumber: nextOrderNumber,
    });
    if (existingOrder) {
      return res
        .status(409)
        .json({ success: false, message: "Duplicate order number detected" });
    }

    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
      payment: false,
      orderNumber: nextOrderNumber,
    });

    await newOrder.save();

    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

    // Stripe session setup
    const line_items = [
      ...req.body.items.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: { name: item.name || "Unnamed Item" },
          unit_amount: Math.round((item.salePrice || 0) * 100),
        },
        quantity: item.quantity || 1,
      })),
      {
        price_data: {
          currency: "usd",
          product_data: { name: "Delivery Charges" },
          unit_amount: 200, // $2 delivery
        },
        quantity: 1,
      },
    ];

    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: "payment",
      metadata: { orderId: newOrder._id.toString() },
      success_url: `${frontend_url}/verify-payment?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontend_url}/verify-payment?success=false&orderId=${newOrder._id}`,
    });

    return res.status(201).json({
      success: true,
      session_url: session.url,
      message: "Order created and checkout session started",
    });
  } catch (error) {
    console.error("🚀 ~ placeOrder ~ error:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Server Error while placing order",
    });
  }
};

// VERIFY ORDER
export const verifyOrder = async (req, res) => {
  const { orderId, success } = req.body;

  try {
    if (success === "true") {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      return res
        .status(200)
        .json({ success: true, message: "Payment successfully verified" });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      return res
        .status(400)
        .json({ success: false, message: "Payment failed or canceled" });
    }
  } catch (error) {
    console.error("🚀 ~ verifyOrder ~ error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Server error verifying payment" });
  }
};

// STRIPE WEBHOOK HANDLER
export const handleStripeWebhook = async (req, res) => {
  const stripeSignature = req.headers["stripe-signature"];
  const stripeWebHookKey = process.env.STRIPE_WEBHOOK_SECRET;

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      stripeSignature,
      stripeWebHookKey
    );
  } catch (err) {
    console.error("⚠️ Webhook verification failed:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const orderId = session.metadata.orderId;

    try {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      console.log(`✅ Order ${orderId} payment confirmed.`);
      return res
        .status(200)
        .json({ success: true, message: "Payment confirmed" });
    } catch (err) {
      console.error("❌ Error updating order:", err.message);
      return res
        .status(500)
        .json({ success: false, message: "Error confirming payment" });
    }
  }

  return res.status(200).json({ received: true });
};

// USER ORDERS
export const userOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({ userId: req.body.userId });
    return res.status(200).json({ success: true, data: orders });
  } catch (error) {
    console.error("🚀 ~ userOrders ~ error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Error fetching user orders" });
  }
};
