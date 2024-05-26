import { randomUUID } from "node:crypto";
import mongoose, { Schema } from "mongoose";
import { IUser } from "@/interfaces/user-interfaces";

export const userSchema: Schema = new Schema({
  id: {
    type: String,
    required: true,
    default: randomUUID,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

export const User = mongoose.model<IUser>("User", userSchema);
