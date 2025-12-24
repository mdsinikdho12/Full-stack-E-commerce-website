import mongoose from "mongoose";

const useSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
      maxlength: 100,
    },
    email: {
      type: String,
      require: true,
      trim: true,
      lowercase: true,
      unique: true,
      match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    },
    password: {
      type: String,
      require: true,
      minlength: 8,
    },
    profileImage: {
      type: String,
    },
    role: {
      type: String,
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.user || mongoose.model("User", userSchema);
