import { User, UserDatabase, database } from "./userModel";

export function addUser(username: string, age: number, email: string): User {
  const user: User = {
    id: database.length + 1,
    username,
    age,
    email,
    created: new Date(),
  };
  database.push(user);
  return user;
}

export function findUser(username: string): User | null {
  return database.find((user) => user.username === username) || null;
}

export function deleteUser(id: number): User | null {
  const index = database.findIndex((user) => user.id === id);
  if (index > -1) {
    const [deletedUser] = database.splice(index, 1);
    return deletedUser;
  }
  return null;
}

export function listUsers(): UserDatabase {
  return database;
}
