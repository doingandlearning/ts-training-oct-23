Let's walk through the solution step by step:

1. **Setting Up the Environment:**

   Firstly, make sure you have `typescript` and `ts-node` installed:

   ```
   npm init -y && npm install -g typescript ts-node
   ```

2. **Creating the TypeScript File:**

   In your new folder, create a file called `todoHandler.ts`.

3. **Defining the JSON Data and Interface:**

   Copy the relevant data from the provided gist link and create an interface to describe the data.

   ```typescript
   // todoHandler.ts

   interface Todo {
       userId: number;
       id: number;
       title: string;
       completed: boolean | 'archived' | 'pending' | 'deleted';  // Updated the type to cater for the extended state
   }

   const todos: Todo[] = [
       // ...copy your data from the gist here
   ];
   ```

4. **Create Type-safe Instances from the Array:**

   ```typescript
   let todo1: Todo = todos[0];
   let todo2: Todo = todos[1];
   // ... and so on, depending on how many instances you want to create
   ```

5. **Sorting and Filtering (Optional):**

   If you want to sort the todos based on a certain field, you can do so:

   ```typescript
   // Sorting by userId
   todos.sort((a, b) => a.userId - b.userId);
   ```

   To filter the todos for a specific user and then further filter for uncompleted tasks:

   ```typescript
   const userIdToFilter = 1; // or any other user ID
   const todosForUser = todos.filter(todo => todo.userId === userIdToFilter);
   const uncompletedTodosForUser = todosForUser.filter(todo => todo.completed === false);
   ```

6. **tsconfig.json (if needed):**

   In the same folder, create a `tsconfig.json`:

   ```json
   {
       "compilerOptions": {
           "target": "es6",
           "module": "commonjs"
       },
       "include": ["*.ts"]
   }
   ```

7. **Run the Program:**

   To run the program, you can use `ts-node`:

   ```
   ts-node todoHandler.ts
   ```

This solution adheres to the type-safety requirements of TypeScript and demonstrates data sorting and filtering. Remember, this is just one approach; there are various ways to achieve similar results with TypeScript!