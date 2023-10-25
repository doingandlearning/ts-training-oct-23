### TypeScript Advanced Types: Exercise

#### Background:

Imagine you're building a task management system. In this system, a task can have different statuses such as `pending`, `completed`, `archived`, etc. Additionally, tasks can have associated users and due dates. Users of the system can be of different roles: `admin`, `manager`, `regular user`.

#### Task:

Given the above, you'll define types using TypeScript's conditionals and built-ins.

### Starting Code:

```typescript
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

```

#### Requirements:

1. **Conditional Type**: Create a type `IsAdmin<T>` which checks if the user role is `admin`. It should return `true` for admin users and `false` otherwise.

2. **Built-in Type (Exclude)**: Define a type `NonAdminRoles` that excludes the `admin` role from `UserRole`.

3. **Built-in Type (NonNullable)**: Sometimes, tasks might be saved without due dates or assigned users. Create a type `RequiredTaskFields` that ensures that a task has both `dueDate` and `assignedTo` fields without null or undefined.

4. **Built-in Type (ReturnType)**: Imagine there's a function `fetchTaskDetails` that returns details of a task. Use the `ReturnType` utility to infer the type of the returned task.

5. **Built-in Type (InstanceType)**: If there's a `TaskClass` that serves as a constructor for creating tasks, use the `InstanceType` utility to infer the type of a task instance.

#### Tips:

- Use the provided types (TaskStatus, UserRole, Task, User) as base types.
- Ensure you test your types with dummy data to confirm their correctness.
