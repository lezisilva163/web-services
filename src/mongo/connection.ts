import { MongoClient } from "mongodb";
import { env } from "@/env";

export const mongoClient = new MongoClient(env.MONGO_URL!);

export async function connectToDatabase() {
  try {
    const client = await mongoClient.connect();
    console.log("Connected to MongoDB!");
    return client;
  } catch (error) {
    console.log("Failed to connect to MongoDB", error);
    throw error;
  }
}
