import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRouter from "./routes/productRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import emailRouter from "./routes/emailRoute.js";
import { handleStripeWebhook } from "./controllers/orderController.js";

dotenv.config();

// app config
const app = express();
const port = process.env.PORT || 4000;

app.post(
  "/api/order/webhook",
  express.raw({ type: "application/json" }),
  handleStripeWebhook
);

//middleware
const allowedOrigins = [
  "http://localhost:5173",
  "https://auxry-store.vercel.app",
];
app.use(
  cors({
    origin: allowedOrigins,
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(express.json());

// DB connection
connectDB();

// API ENDPOINT
app.use("/api/product", productRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.use("/api/email", emailRouter);

app.get("/", (req, resp) => {
  resp.send("Auxry Store API is running ✅");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Server Error ❌", error: err.message });
});

// Start Server
app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
