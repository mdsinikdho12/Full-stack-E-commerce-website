"use server";
import connectDB from "@/lib/config/db";
import usermodel from "@/lib/models/usermodel";

export async function getAllUsers() {
  try {
    await connectDB();
    const users = await usermodel.find.lean();
    if (!users) {
      return { success: true, message: "users not found!" };
    }

    return { success: true, data: users };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

export async function createUser(formData) {
  try {
    await connectDB();
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(name, email, password);

    if (!name || !email || !password) {
      return {
        success: false,
        message: "সব ফিল্ড পূরণ করুন",
      };
    }

    const newUser = await usermodel.create({
      name,
      email,
      password,
    });

    return {
      success: true,
      data: newUser,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
}
