import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // basic info
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      trim: true,
      index: true,
    },
    password: {
      type: String,

      minlength: 8,
      select: false,
    },
    profileImage: {
      type: String,
      default: null,
    },
    phone: {
      type: String,
      trim: true,
      unique: true,
      sparse: true,
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    isPhoneVerified: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: ["user", "admin", "seller"],
      default: "user",
    },

    addresses: [
      {
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          auto: true,
        },
        type: {
          type: String,
          enum: ["home", "office", "other"],
          default: "home",
        },
        fullAddress: {
          type: String,
          required: true,
        },
        city: String,
        state: String,
        postCode: {
          type: String,
        },
        country: String,
        isDefault: {
          type: Boolean,
          default: false,
        },
      },
    ],

    googleId: {
      type: String,
      unique: true,
      sparse: true,
    },

    facebookId: {
      type: String,
      unique: true,
      sparse: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
    lastLogin: {
      type: Date,
      default: Date.now,
    },

    // notification

    preferences: {
      emailNotifications: {
        type: Boolean,
        default: true,
      },
      promotionalEmails: {
        type: Boolean,
        default: true,
      },
    },

    // order info

    totalOrders: {
      type: Number,
      default: 0,
      min: 0,
    },
    totalSpent: {
      type: Number,
      default: 0,
      min: 0,
    },

    // Reating
    averageRating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    totalReviews: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.index({ email: 1 });
userSchema.index({ phone: 1 });
userSchema.index({ googleId: 1 });

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
