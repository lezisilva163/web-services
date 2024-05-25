import { env } from "@/env";
import mongoose from "mongoose";

export async function connectToDatabase() {
  try {
    if (!env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined");
    }
    const client = await mongoose.connect(env.MONGO_URI!);
    console.log("Connected to MongoDB!");
    return client;
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    throw error;
  }
}
