import express from "express";
import {
  addToCart,
  removeFromCart,
  getCart,
  clearFromCart,
} from "../controllers/cartController.js";
import authMiddleware from "../middleware/auth.js";

// create express router
const cartRouter = express.Router();

cartRouter.post("/add", authMiddleware, addToCart);
cartRouter.post("/remove", authMiddleware, removeFromCart);
cartRouter.post("/get", authMiddleware, getCart);
cartRouter.post("/clear", authMiddleware, clearFromCart);

export default cartRouter;
