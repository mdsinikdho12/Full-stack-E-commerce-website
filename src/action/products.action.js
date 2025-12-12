"use server";

import connectDB from "@/lib/config/db";
import ProductModel from "@/lib/models/ProductModel";

// get products logic
export async function getAllProducts() {
  try {
    await connectDB();
    const products = await ProductModel.find().lean();

    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

// get single product by id

export async function singleProduct(id) {
  try {
    await connectDB();
    const product = await ProductModel.findById(id);
    if (!product) {
      return { success: false, message: "Product not found !" };
    }

    return { success: true, data: JSON.parse(JSON.stringify(product)) };
  } catch (error) {}
}

// addproduct logic
export async function addProduct(formData) {
  try {
    await connectDB();
    const newProduct = await ProductModel.create({
      title: formData.title,
      description: formData.description,
      category: formData.category,
      price: Number(formData.price),
      stock: Number(formData.stock),
      images: formData.images,
    });

    return {
      success: true,
      message: "Product added successfuly !",
      data: JSON.parse(JSON.stringify(newProduct)),
    };
  } catch (error) {
    console.log("🚨 Add Product Error:", error);
    return {
      success: false,
      message: "Error adding product!",
    };
  }
}
