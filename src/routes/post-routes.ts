import { app } from "@/app";
import userController from "@/controllers/user-controller";

export async function postRoutes() {
  app.get("/", userController.getAllUsers);
  app.post("/", userController.createUser);
}
