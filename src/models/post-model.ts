import mongoose from "mongoose";

export const postSchema = new mongoose.Schema({
  title: String,
  content: String,
});

export const Post = mongoose.model("Post", postSchema);
