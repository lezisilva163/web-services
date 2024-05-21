import { app } from "@/app";
import userController from "@/controllers/user-controller";

export async function userRoutes() {
  app.get("/", userController.getAllUsers);
  app.post("/create", userController.createUser);
}
