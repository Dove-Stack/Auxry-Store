import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Place Order from frontend
const placeOrder = async (req, res) => {
  const frontend_url = "http://localhost:5173";

  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });

    await newOrder.save();

    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

    // Stripe Payment Link

    const line_items = req.body.items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
        },
        unit_amount: item.salePrice * 100,
      },
      quantity: item.quantity,
    }));

    // Delivery Charges
    // line_items.push({
    //   price_data: {
    //     currency: "inr",
    //     product_data: {
    //       name: "Delivery Charges",
    //     },
    //     unit_amount: 2 * 100 * 80,
    //   },
    //   quantity: 1,
    // });

    line_items.push({
      price_data: {
        currency: "usd",
        product_data: {
          name: "Delivery Charges",
        },
        unit_amount: 200,
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      mode: "payment",
      metadata: {
        orderId: newOrder._id.toString(),
      },
      success_url: `${frontend_url}/verify-payment?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontend_url}/verify-payment?success=false&orderId=${newOrder._id}`,
    });

    res.json({ success: true, session_url: session.url });
  } catch (error) {
    console.log("🚀 ~ placeOrder ~ error:", error);
    res.json({ success: false, message: "Error" });
  }
};

const verifyOrder = async (req, res) => {
  console.log("Received data:", req.body);
  const { orderId, success } = req.body;
  try {
    if (success == "true") {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      return res
        .status(200)
        .json({ success: true, message: "Payment successfully verified." });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      return res
        .status(200)
        .json({ success: false, message: "Payment verification failed." });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Error verifying payment." });
  }
};

const handleStripeWebhook = async (req, res) => {
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
    console.error("Webhook signature verification failed: ", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    const orderId = session.metadata.orderId;

    try {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      console.log(`Order ${orderId} payment confirmed.`);
      res.json({ success: true, message: "Payment Confirmed" });
    } catch (err) {
      console.error("Error updating order: ", err.message);
      res.json({ success: false, message: "Payment Confirmed" });
    }
  }

  res.status(200).json({ recieved: true });
};

const userOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({ userId: req.body.userId });
    res.json({ success: true, data: orders });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Error" });
  }
};

export { placeOrder, verifyOrder, handleStripeWebhook, userOrders };
