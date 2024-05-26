import { FastifyReply, FastifyRequest } from "fastify";
import createUserUseCase from "@/use-cases/user/create";
import { IUser } from "@/interfaces/user-interfaces";
import { z } from "zod";
import ListUsersUseCase from "@/use-cases/user/list";

const userSchema = z.object({
  name: z.string(),
  age: z.number(),
});
class userController {
  async createUser(req: FastifyRequest, reply: FastifyReply) {
    const { name, age } = userSchema.parse(req.body);
    const createUser = new createUserUseCase();
    const user: IUser = await createUser.execute({ name, age });

    return reply.code(201).send({ user });
  }
  async getAllUsers(req: FastifyRequest, reply: FastifyReply) {
    const listUsers = new ListUsersUseCase();
    const response = await listUsers.execute();
    return reply.code(200).send({ response });
  }
}

export default new userController();
