type UserRole = "admin" | "manager" | "regular user";

type User<TRole extends UserRole = "regular user"> = {
  name: string;
  role: TRole;
};

type TaskStatus = "pending" | "completed" | "archived";
type Task = {
  title: string;
  description: string;
  dueDate?: Date;
  assignedTo?: User;
};

// 1. Conditional Type for checking if a user is an admin
type IsAdmin<T> = T extends User<"admin"> ? true : false;

// Test:
const user1: User<"admin"> = { name: "John", role: "admin" };
const test1: IsAdmin<typeof user1> = true; // This should compile without errors

// 2. Using Exclude to define NonAdminRoles
type NonAdminRoles = Exclude<UserRole, "admin">;

// Test:
const role1: NonAdminRoles = "manager"; // This should compile

// 3. Using NonNullable to ensure dueDate and assignedTo are required
type RequiredTaskFields = {
  title: string;
  description: string;
  dueDate: NonNullable<Date>;
  assignedTo: NonNullable<User>;
};

// Test:
const task1: RequiredTaskFields = {
  title: "Test Task",
  description: "This is a test",
  dueDate: new Date(),
  assignedTo: { name: "John", role: "regular user" }, // This should compile without errors
};

// 4. Using ReturnType to infer the type of the returned task
function fetchTaskDetails(taskId: number): Task {
  return {
    title: "Sample Task",
    description: "This is a sample task",
    dueDate: new Date(),
    assignedTo: { name: "Jane", role: "manager" },
  };
}
type FetchedTask = ReturnType<typeof fetchTaskDetails>;

// 5. Using InstanceType to infer the type of a task instance
class TaskClass {
  title: string;
  description: string;
  dueDate?: Date;
  assignedTo?: User;

  constructor(task: Task) {
    this.title = task.title;
    this.description = task.description;
    this.dueDate = task.dueDate;
    this.assignedTo = task.assignedTo;
  }
}
type TaskInstance = InstanceType<typeof TaskClass>;

// Test:
const taskInstance: TaskInstance = new TaskClass({
  title: "Test",
  description: "Test description",
});

export {};
