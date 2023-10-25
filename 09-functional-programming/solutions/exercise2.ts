type Task = {
  id: number;
  description: string;
  done: boolean;
};

const markTaskAsDone = (tasks: Task[], taskId: number): Task[] => {
  return tasks.map((task) =>
    task.id === taskId ? { ...task, done: true } : task
  );
};

const tasks = [{ id: 1, description: "Learn TypeScript", done: false }];
console.log(markTaskAsDone(tasks, 1)); // [{ id: 1, description: 'Learn TypeScript', done: true }]
