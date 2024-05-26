import { Post } from "@/models/post-model";

export default class ListPostsUseCase {
  async execute() {
    try {
      const posts = await Post.find({});
      const postsTitle = posts.map((post) => post.title);

      return postsTitle;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
