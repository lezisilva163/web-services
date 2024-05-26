import { app } from "@/app";
import userController from "@/http/controllers/user-controller";
import postController from "@/http/controllers/post-controller";

export async function routes() {
  // USER ROUTES
  app.get("/getAllUsers", userController.getAllUsers);
  app.post("/createUser", userController.createUser);

  // POST ROUTES
  app.get("/getTitlePosts", postController.getTitlePosts);
  app.post("/createPost", postController.createPost);
}
