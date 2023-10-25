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
