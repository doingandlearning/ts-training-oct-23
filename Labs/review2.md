### Review Exercise 2 - TypeScript and DOM Interaction
=================

#### Duration: 
One and a quarter hours (until tea break) - or until we're bored!!

#### Objective:
Build a TypeScript-driven web app to retrieve and display user data, showcasing the benefits of TypeScript in fetching, type safety, DOM manipulation, and error handling.

#### Tasks:

1. **Fetch User Data:**
    - Fetch user data from the API at https://jsonplaceholder.typicode.com/users.
    - Define a precise TypeScript interface for 'Users'. Ensure you have properties like `name` and `address`.
      ```typescript
      interface Address {
          street: string;
          city: string;
          // ... other fields
      }

      interface User {
          name: string;
          address: Address;
          // ... other fields
      }
      ```
    - Use `async/await` to handle the fetching process.
    - Remember to handle potential errors using `try/catch`.

2. **Display User Data on Web Page:**
    - Create a basic HTML structure to display user information.
    - Utilize TypeScript's type assertions or type guards when working with DOM elements. For instance, if you expect an element to be a button, ensure TypeScript knows it's of type `HTMLButtonElement`.

3. **User Interaction:**
    - Provide a dropdown list that showcases all users. Upon selection, fetch and display details specific to that user. (select, ul -> li)
    - Add event listeners to certain user elements. When clicked, a detailed view should pop up or be displayed.

4. **Advanced Interactions (Optional):**
    - Offer ways to filter the data, such as viewing photos by a particular user or viewing only completed todos.
    - Explore the API's other capabilities like fake delete, post, and real filter.

5. **Code Structure:**
    - Modularize your TypeScript code, separating concerns like data fetching, DOM manipulation, and event handling.
    - Use back-tick interpolation to build URLs, especially when fetching specific user details.

6. **Development Setup:**
    - Utilize Live Server for a dynamic development experience. Remember to [install it from the VS Code marketplace](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) if you haven't.
    - Start the TypeScript compiler in watch mode: `tsc --watch`. This ensures your TypeScript code is promptly compiled as you make changes.

7. **Share & Review:**
    - Once done, take turns showcasing your application. Emphasize areas where TypeScript provided benefits or made tasks easier.
    - Engage in constructive peer reviews, noting unique approaches or optimizations.

---

### Notes:

- While `console.log` can be used for debugging, aim to display all user information and interactions on the web page itself.
- If preferred, data can be fetched offline (i.e., downloading the JSON) or using Node's inbuilt fetch. Remember, as of Node 18, there's no need for third-party fetch libraries.
- Always prioritize type safety. When uncertain, refer back to your defined interfaces or utilize TypeScript's type checking features to ensure data consistency and safety.
