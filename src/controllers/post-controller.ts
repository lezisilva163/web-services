import { Post } from "@/models/post-model";
import { FastifyReply, FastifyRequest } from "fastify";
import createPostUseCase from "@/use-cases/post/create";
import { IPost, ICreatePostDTO } from "@/interfaces/post-interfaces";

class postController {
  async createPost(req: FastifyRequest, reply: FastifyReply) {
    const { title, content } = req.body as ICreatePostDTO;
    const createPost = new createPostUseCase();
    const post: IPost = await createPost.execute({ title, content });

    return reply.code(201).send({ post });
  }
  async getAllPosts() {
    return await Post.find({});
  }
}

export default new postController();
