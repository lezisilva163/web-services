import mongoose, { Schema } from "mongoose";
import { randomUUID } from "crypto";
import { IPost } from "@/interfaces/post-interfaces";

const postSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
    default: randomUUID,
  },
});

export const Post = mongoose.model<IPost>("Post", postSchema);
