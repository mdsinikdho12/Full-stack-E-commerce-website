import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

// গ্লোবাল অবজেক্টে কানেকশন ক্যাশ করে রাখা হচ্ছে
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
  // যদি অলরেডি কানেকশন থাকে, সেটি রিটার্ন করবে
  if (cached.conn) {
    return cached.conn;
  }

  // যদি কোনো কানেকশন প্রসেসিংয়ে থাকে, সেটার জন্য অপেক্ষা করবে (Buffering Timeout আটকাবে)
  if (!cached.promise) {
    const opts = {
      bufferCommands: false, // ডাটাবেজ কানেক্ট না হওয়া পর্যন্ত কোয়েরি বাফার করা বন্ধ করবে
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log("DB connected 😎");
      return mongoose;
    }).catch((error) => {
      console.error("DB Connection Error ❌ :", error.message);
      cached.promise = null; // এরর হলে প্রমিস রিসেট করবে যাতে পরে আবার ট্রাই করতে পারে
      throw error;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.conn = null;
    throw e;
  }

  return cached.conn;
};

export default connectDB;