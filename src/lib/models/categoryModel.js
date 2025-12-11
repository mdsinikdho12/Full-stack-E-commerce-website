import mongoose from "mongoose";

const catagorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  catagoryImage: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Catagory ||
  mongoose.model("Catagorys", catagorySchema);
