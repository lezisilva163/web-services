export interface IUser extends Document {
  id: string;
  name: string;
  age: number;
}

export interface ICreateUserDTO {
  name: string;
  age: number;
}
