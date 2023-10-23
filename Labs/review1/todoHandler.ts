interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean | "archived" | "pending" | "deleted";
}

const todos: Todo[] = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
  {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
  {
    userId: 1,
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false,
  },
  {
    userId: 1,
    id: 8,
    title: "quo adipisci enim quam ut ab",
    completed: true,
  },
  {
    userId: 1,
    id: 9,
    title: "molestiae perspiciatis ipsa",
    completed: false,
  },
  {
    userId: 1,
    id: 10,
    title: "illo est ratione doloremque quia maiores aut",
    completed: true,
  },
];

let todo1: Todo = todos[0];
console.log(todo1);

// Optional Steps:

// 4. Sort todos by userId.
todos.sort((a, b) => a.userId - b.userId);
console.log("Sorted todos by userId:", todos);

// 5. Filter todos for a specific user and then get uncompleted tasks for that user.
const userIdToFilter = 1;
const todosForUser = todos.filter((todo) => todo.userId === userIdToFilter);
console.log(`Todos for user ${userIdToFilter}:`, todosForUser);

const uncompletedTodosForUser = todosForUser.filter(
  (todo) => todo.completed === false
);
console.log(
  `Uncompleted todos for user ${userIdToFilter}:`,
  uncompletedTodosForUser
);
