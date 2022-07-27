import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  article: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  }
});

export default mongoose.model("Blog", BlogSchema);

