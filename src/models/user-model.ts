import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);
export default User;
