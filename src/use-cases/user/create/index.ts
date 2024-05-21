import User from "@/models/user-model";

export default class createUserUseCase {
  async execute(name: string, age: number) {
    try {
      if (!name || !age) {
        throw new Error("Invalid parameters");
      }
      const newUser = new User({ name, age });
      return newUser.save();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
