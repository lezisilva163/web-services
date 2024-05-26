import { ICreatePostDTO, IPost } from "@/interfaces/post-interfaces";
import { Post } from "@/models/post-model";

export default class createPostUseCase {
  async execute({ title, content }: ICreatePostDTO): Promise<IPost> {
    try {
      if (!title || !content) {
        throw new Error("Invalid parameters");
      }
      const post = new Post({ title, content });
      await post.save();
      return post as IPost;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
