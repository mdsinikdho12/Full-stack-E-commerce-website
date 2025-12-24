"use server";

import connectDB from "@/lib/config/db";
import ProductModel from "@/lib/models/ProductModel";
import { revalidatePath } from "next/cache";
import categoryModel from "@/lib/models/categoryModel";

// get all products logic
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
    revalidatePath("/");
    return {
      success: true,
      message: "Product added successfuly !",
      data: JSON.parse(JSON.stringify(newProduct)),
    };
  } catch (error) {
    console.log(" Add Product Error:", error);
    return {
      success: false,
      message: "Error adding product!",
    };
  }
}

// get products by category id

export async function getProductsByCategory(categoryid) {
  try {
    await connectDB();

    const category = await categoryModel.findById(categoryid);

    if (!category) {
      return { success: false, message: "Category canot found" };
    }
    const Products = await ProductModel.find({
      category: category.name,
    }).lean();
    return { success: true, data: JSON.parse(JSON.stringify(Products)) };
  } catch (error) {
    console.log("Error fetching products by category ... ", error);
    return { success: false, message: error.message };
  }
}
