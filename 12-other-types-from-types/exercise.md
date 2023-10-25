### **Exercise: Web Routes and Permissions**

#### **Objective**:
Develop a basic permission system for web routes utilizing TypeScript's advanced features.


#### **Tasks**:

1. Complete the `AllowedRoutes` type to define allowed routes as `"home" | "profile" | "settings"`.

2. Transform any route in `AllowedRoutes` into its full URL format. E.g., `"/home" | "/profile" | "/settings"`.

3. Develop the `Permission` type. It should represent an object where each key is an item from `AllowedRoutes`, and its value is a boolean indicating if a route is accessible.

4. Implement the `checkAccess` function to return true if a route is accessible based on the provided permissions.

5. Adjust the `UserRoles` record to have keys of `"admin" | "user" | "guest"` and use the `Permission` type for its values.

6. Fill the `roles` constant with some predefined permissions for each role.

#### **Hints**:

- Remember to utilize string literal types and template literals for defining routes.
- Use the `keyof` and `in` keywords to help in constructing the `Permission` type.
- The `Record` utility type is useful for defining objects with keys that match a specific type and values of a specific type.

---

Note: The starting code and the tasks are intertwined for clarity and step-by-step progression through the exercise.