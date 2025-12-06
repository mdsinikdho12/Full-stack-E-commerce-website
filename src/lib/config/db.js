import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log("DB Alredy connected !");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB connected 😎");
  } catch (error) {
    console.log("BD Conection Error :", error.message);
  }
};
export default connectDB;
