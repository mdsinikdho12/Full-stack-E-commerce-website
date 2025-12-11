"use server";
import connectDB from "@/lib/config/db";
import categoryModel from "@/lib/models/categoryModel";

export async function addCategory(formData) {
  try {
    await connectDB();
    const Catagory = await categoryModel.create({
      name: formData.name,
      catagoryImage: formData.img,
    });
    return Catagory;
  } catch (error) {
    console.log(" Error AddCatagory", error);
    return [];
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
