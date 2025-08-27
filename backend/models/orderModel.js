import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [{ name: String, salePrice: Number, quantity: Number }],
  amount: { type: Number, required: true },
  address: { type: Object, required: true },
  payment: { type: Boolean, default: false },
  status: { type: String, default: "Item Loading..." },
  orderNumber: { type: String, unique: true, required: true },
  date: { type: Date, default: Date.now },
});

const orderModel =
  mongoose.models.order || mongoose.model("order", orderSchema);
export default orderModel;
