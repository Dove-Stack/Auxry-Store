
// require("dotenv").config();
import mongoose from "mongoose";
import orderModel from "../../models/orderModel.js";

async function migrateOrders() {
  try {
    await mongoose.connect(
      "mongodb+srv://AUXRYSTORE:jRGbiSC0FYTflVji@cluster0.w3upi.mongodb.net/Auxry-Store",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("Connected to MongoDB Atlas successfully");

    const orders = await orderModel.find({ orderNumber: { $exists: false } });
    console.log(`Found ${orders.length} orders to migrate`);

    let nextOrderNumber = 10001;

    const lastOrder = await orderModel
      .findOne({ orderNumber: { $exists: true } })
      .sort({ orderNumber: -1 });
    if (lastOrder && lastOrder.orderNumber) {
      nextOrderNumber = parseInt(lastOrder.orderNumber.split("-")[1]) + 1;
      console.log(
        `Last order number: ${lastOrder.orderNumber}, next: ORD-${nextOrderNumber}`
      );
    } else {
      console.log("No existing orderNumber found, starting with ORD-10001");
    }

    for (const order of orders) {
      await orderModel.findByIdAndUpdate(order._id, {
        orderNumber: `ORD-${nextOrderNumber++}`,
      });
      console.log(
        `Updated order ${order._id} with orderNumber ORD-${nextOrderNumber - 1}`
      );
    }

    console.log("Migration completed");
    mongoose.disconnect();
  } catch (error) {
    console.error("Migration error:", error);
  }
}

migrateOrders();
