import { response } from "express";
import ProductModel from "../models/ProductModel.js";
import fs from "fs";

const addProduct = async (req, resp) => {
  let image_filename = `${req.file.filename}`;

  const product = new ProductModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });

  try {
    await product.save();
    resp.json({ success: true, message: "Product Added" });
  } catch (error) {
    console.log(error);
    resp.json({ success: false, message: "Error" });
  }
};

// all product list
const listProduct = async (req, resp) => {
  try {
    const products = await ProductModel.find({});
    resp.json({ success: true, data: products });
  } catch (error) {
    console.log(error);
    resp.json({ success: false, message: "Error" });
  }
};

// remove product item
const removeProduct = async (req, resp) => {
  try {
    const product = await ProductModel.findById(req.body.id);
    fs.unlink(`uploads/${product.image}`, () => {})

    await ProductModel.findByIdAndDelete(req.body.id);
    resp.json({success: true, message: "Product Removed"})
  } catch (error) {
    console.log(error);
    resp.json({success: false, message: "Error"})
  }
}


export { addProduct, listProduct, removeProduct};
