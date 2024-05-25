import { ICreateUserDTO, IUser } from "@/interfaces/user-interfaces";
import { User } from "@/models/user-model";
import createUserUseCase from "@/use-cases/user/create";
import { FastifyReply, FastifyRequest } from "fastify";

class userController {
  async createUser(req: FastifyRequest, reply: FastifyReply) {
    const { name, age } = req.body as ICreateUserDTO;
    const createUser = new createUserUseCase();
    const user: IUser = await createUser.execute({ name, age });

    return reply.code(201).send({ user });
  }
  async getAllUsers() {
    return await User.find({});
  }
}

export default new userController();
