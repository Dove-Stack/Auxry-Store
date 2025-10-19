// import { response } from "express";
// import ProductModel from "../models/ProductModel.js";
// import fs from "fs";

// const addProduct = async (req, resp) => {
//   let image_filename = `${req.file.filename}`;

//   const product = new ProductModel({
//     name: req.body.name,
//     description: req.body.description,
//     price: req.body.price,
//     category: req.body.category,
//     image: image_filename,
//   });

//   try {
//     await product.save();
//     resp.json({ success: true, message: "Product Added" });
//   } catch (error) {
//     console.log(error);
//     resp.json({ success: false, message: "Error" });
//   }
// };

// // all product list
// const listProduct = async (req, resp) => {
//   try {
//     const products = await ProductModel.find({});
//     resp.json({ success: true, data: products });
//   } catch (error) {
//     console.log(error);
//     resp.json({ success: false, message: "Error" });
//   }
// };

// // remove product item
// const removeProduct = async (req, resp) => {
//   try {
//     const product = await ProductModel.findById(req.body.id);
//     fs.unlink(`uploads/${product.image}`, () => {})

//     await ProductModel.findByIdAndDelete(req.body.id);
//     resp.json({success: true, message: "Product Removed"})
//   } catch (error) {
//     console.log(error);
//     resp.json({success: false, message: "Error"})
//   }
// }


// export { addProduct, listProduct, removeProduct};


import ProductModel from "../models/ProductModel.js";
import fs from "fs";

// Add product
const addProduct = async (req, res) => {
  const image_filename = req.file.filename;

  const product = new ProductModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });

  try {
    await product.save();
    return res.status(201).json({ success: true, message: "Product Added" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Server Error while adding product" });
  }
};

// All product list
const listProduct = async (req, res) => {
  try {
    const products = await ProductModel.find({});
    return res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({
        success: false,
        message: "Server Error while fetching products",
      });
  }
};

// Remove product
const removeProduct = async (req, res) => {
  try {
    const product = await ProductModel.findById(req.body.id);

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    fs.unlink(`uploads/${product.image}`, (err) => {
      if (err) console.error("File delete error:", err);
    });

    await ProductModel.findByIdAndDelete(req.body.id);
    return res.status(200).json({ success: true, message: "Product Removed" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Server Error while removing product" });
  }
};

export { addProduct, listProduct, removeProduct };
