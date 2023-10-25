### 1. Pure Functions

**Scenario:** You're tasked with creating a function that calculates the total price of items in a cart, given tax and discount rates. 

**Starting Code:**

```typescript
type CartItem = {
  name: string;
  price: number;
};

const calculateTotalPrice = (items: CartItem[], taxRate: number, discountRate: number): number => {
  // Your implementation here
  return 0;
};
```

**Objective:** Implement `calculateTotalPrice` as a pure function. Given the same input, it should always produce the same output and have no side effects.

---

### 2. Immutability

**Scenario:** You have an array of user tasks. Implement a function that marks a task as done without mutating the original array.

**Starting Code:**

```typescript
type Task = {
  id: number;
  description: string;
  done: boolean;
};

const markTaskAsDone = (tasks: Task[], taskId: number): Task[] => {
  // Your implementation here
  return tasks;
};
```

**Objective:** Ensure that the original `tasks` array remains unchanged. Use immutability principles in your solution.

---

### 3. Higher Order Functions (HOF)

**Scenario:** You have a list of products. Create a function that filters out products below a certain price using higher-order functions.

**Starting Code:**

```typescript
type Product = {
  id: number;
  name: string;
  price: number;
};

const filterByPrice = (products: Product[], threshold: number): Product[] => {
  // Your implementation here
  return products;
};
```

**Objective:** Use higher-order functions to filter the products.

---

### 4. Function Composition

**Scenario:** You have two functions: one that capitalizes a string and one that appends an exclamation mark. Create a composed function that does both.

**Starting Code:**

```typescript
const capitalize = (str: string): string => str.toUpperCase();
const addExclamation = (str: string): string => str + '!';

const shout = (str: string): string => {
  // Your implementation here
  return str;
};
```

**Objective:** Use function composition to create the `shout` function, which should capitalize the string and then add an exclamation mark.

---

### 5. Currying

**Scenario:** Implement a curried function for multiplying two numbers. 

**Starting Code:**

```typescript
const multiply = (a: number) => (b: number): number => {
  // Your implementation here
  return 0;
};
```

**Objective:** Use currying to implement the `multiply` function. It should allow for partial application, e.g., `const double = multiply(2); double(4); // Should return 8`

---

For each of the above exercises, your objective is to fill in the missing pieces of the provided code. Remember to test your solutions to ensure they work as expected!