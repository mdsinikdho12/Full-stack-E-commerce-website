"use server";
import connectDB from "@/lib/config/db";
import categoryModel from "@/lib/models/categoryModel";

export async function addCategory(formData) {
  try {
    await connectDB();
    const Catagory = await categoryModel.create({
      name: formData.get("categoryName"),
      categoryImage: formData.get("categoryImage"),
    });
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
