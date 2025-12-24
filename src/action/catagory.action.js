"use server";
import connectDB from "@/lib/config/db";
import categoryModel from "@/lib/models/categoryModel";
import { revalidatePath } from "next/cache";

export async function addCategory(formData) {
  try {
    await connectDB();
    const Catagory = await categoryModel.create({
      name: formData.get("categoryName"),
      categoryImage: formData.get("categoryImage"),
    });
    revalidatePath("/seller/addCatagory");
    return { success: true };
  } catch (error) {
    console.log(" Error AddCatagory", error);
    return { success: false };
  }
}

export async function getcatagory() {
  try {
    await connectDB();
    const catagory = await categoryModel.find().lean();
    return catagory;
  } catch (error) {
    console.log("Error fetehing catagory ..", error);
    return [];
  }
}

export async function getCategoryById(id) {
  try {
    await connectDB();
    const category = await categoryModel.findById(id);
    if (!category) {
      return { success: false, message: "Category not found!" };
    }

    return { success: false, data: category };
  } catch (error) {
    console.log("Error fetehing category ... ", error);
    return { success: false, message: error.message };
  }
}
