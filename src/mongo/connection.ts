import { MongoClient } from "mongodb";
import { env } from "@/env";

export const mongoClient = new MongoClient(env.MONGO_URI!, {
  serverApi: {
    version: "1",
    strict: true,
    deprecationErrors: true,
  },
  serverSelectionTimeoutMS: 30000,
});

export async function connectToDatabase() {
  try {
    if (!env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined");
    }
    const client = await mongoClient.connect();
    console.log("Connected to MongoDB!");
    return client;
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    throw error;
  }
}
