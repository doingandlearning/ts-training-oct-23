export interface User {
  id: number;
  username: string;
  age: number;
  email: string;
  created: Date;
}

export type UserDatabase = User[];

export const database: UserDatabase = [];
