import { app } from "@/app";
import { env } from "@/env";
import { connectToDatabase } from "@/mongo/connection";
import { postRoutes } from "@/routes/post-routes";
import { userRoutes } from "@/routes/user-routes";

app.register(userRoutes);
app.register(postRoutes);
async function startServer() {
  try {
    await connectToDatabase();
    app.listen(
      {
        host: "0.0.0.0",
        port: env.PORT,
      },
      () => {
        console.log(`HTTP Server running on http://localhost:${env.PORT}`);
      }
    );
  } catch (error) {
    console.log("Failed to connect to MongoDB", error);
  }
}
startServer();
