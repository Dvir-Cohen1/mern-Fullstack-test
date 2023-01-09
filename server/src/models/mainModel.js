import { Schema, model } from "mongoose";

const mainSchema = new Schema({
  title: {
    type: String,
    required: [true, "Please provide a title"],
  },
  imageUrl: {
    type: String,
    required: [true, "Please provide a image URL"],
  },
});

export default model("MainSchema", mainSchema);
