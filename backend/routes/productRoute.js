import express from "express";
import {
  addProduct,
  listProduct,
  removeProduct,
} from "../controllers/productController.js";
import multer from "multer";

const productRouter = express.Router();

// IMAGE STORING ENGINE
const imageStorage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, callB) => {
    return callB(null, `${Date.now()} ${file.originalname}`);
  },
});

const upload = multer({ storage: imageStorage });

productRouter.post("/add", upload.single("image"), addProduct);
productRouter.get("/list", listProduct);
productRouter.post("/remove", removeProduct);

export default productRouter;
