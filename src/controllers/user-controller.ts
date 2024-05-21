import { User } from "@/models/user-model";
import createUserUseCase from "@/use-cases/user/create";

class userController {
  async createUser() {
    const createUser = new createUserUseCase();
    return createUser.execute("Leo", 22);
  }
  async getAllUsers() {
    return await User.find({});
  }
}

export default new userController();
