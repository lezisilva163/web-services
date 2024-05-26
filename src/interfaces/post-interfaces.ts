export interface IPost extends Document {
  title: string;
  content: string;
  userId: string;
}

export interface ICreatePostDTO {
  title: string;
  content: string;
  userId: string;
}
