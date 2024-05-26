import { FastifyReply, FastifyRequest } from "fastify";
import CreatePostUseCase from "@/use-cases/post/create";
import ListPostsUseCase from "@/use-cases/post/list";
import { IPost } from "@/interfaces/post-interfaces";
import { z } from "zod";

const postSchema = z.object({
  title: z.string(),
  content: z.string(),
  userId: z.string(),
});

class postController {
  async createPost(req: FastifyRequest, reply: FastifyReply) {
    const { title, content, userId } = postSchema.parse(req.body);
    try {
      const createPost = new CreatePostUseCase();
      const post: IPost = await createPost.execute({ title, content, userId });

      return reply.code(201).send({ post });
    } catch (error) {
      console.error(error);
      return reply.code(500).send({ error: "An error occurred" });
    }
  }

  async getTitlePosts(req: FastifyRequest, reply: FastifyReply) {
    try {
      const listPosts = new ListPostsUseCase();
      const posts = await listPosts.execute();

      return reply.code(200).send({ posts });
    } catch (error) {
      console.error(error);
      return reply.code(500).send({ error: "An error occurred" });
    }
  }
}

export default new postController();
