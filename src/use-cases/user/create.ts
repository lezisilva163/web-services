import { ICreateUserDTO, IUser } from "@/interfaces/user-interfaces";
import { User } from "@/models/user-model";

export default class createUserUseCase {
  async execute({ name, age }: ICreateUserDTO): Promise<IUser> {
    try {
      if (!name || !age) {
        throw new Error("Invalid parameters");
      }
      const user = new User({ name, age });
      await user.save();
      return user as IUser;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
