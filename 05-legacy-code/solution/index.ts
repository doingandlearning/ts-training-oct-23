import { addUser, listUsers, deleteUser, findUser } from "./userOperations";

console.log(addUser("john_doe", 30, "john.doe@example.com"));
console.log(addUser("jane_smith", 25, "jane.smith@example.com"));
console.log(listUsers());
console.log(deleteUser(1));
console.log(listUsers());
console.log(findUser("jane_smith"));
