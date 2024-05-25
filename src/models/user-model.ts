import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

export const User = mongoose.model("User", userSchema);
