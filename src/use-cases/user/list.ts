import { User } from "@/models/user-model";

export default class ListUsersUseCase {
  async execute() {
    try {
      return await User.find({});
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
