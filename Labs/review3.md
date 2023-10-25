### Review Exercise 3: Star Wars API App

**Objective:** Build an app where the user can fetch and display data from the Star Wars API.

**URL:** [https://swapi.dev/api/](https://swapi.dev/api/)

### Core Features:

1. **Fetching Data:** Allow users to choose a category (people, planets, species, starships, etc.) and an ID to fetch data. Example endpoint: `https://swapi.dev/api/people/1`. Use backticks for template string syntax.
2. **Displaying Data:** Show fetched data in a structured and visually appealing manner.
3. **Category Selection:** Use either an `enum` or a union type for the category field.
4. **Error Handling:** Handle out-of-bounds parameters (e.g., invalid category or ID) and server issues. Provide user feedback for each type of error.

### Choose Your Framework:

- **Vanilla JavaScript**: Use pure JS for DOM manipulations.
- **React**: Set up a basic React app using `npm create vite@latest`. Use state and props to handle data and pass them between components.

### If Time Allows (Extension Activities - pick n mix):

1. **Search Functionality:** Introduce a search bar. SWAPI supports search queries, like `https://swapi.dev/api/people/?search=luke`.
2. **Pagination:** Implement a pagination system to navigate through the data, as SWAPI returns paginated data.
3. **Type Safety:** Create interfaces or types for the data you expect to receive from the API.
4. **Refined UI/UX:** Enhance the display using CSS frameworks of your choice or raw CSS. 
5. **Caching:** Implement caching. If data for a particular ID or category has already been fetched, store it temporarily to avoid redundant requests.
6. **Fetching Film URLs:** Each category item might return a list of film URLs. Fetch and display relevant data from these URLs.
7. **Error Handling (Advanced):** Handle network failures, timeouts, and other potential errors.
8. **Testing:** Write tests for your functions or components using a framework like Jest.
9. **Modularization:** Further organize your code. Separate logic related to API requests, data processing, and UI rendering.
10. **Deep Linking:** Implement deep linking to allow users to share links to specific searches or results.

### Tips:

- Start with the core features and ensure they work seamlessly before moving on to extension activities.
- Regularly test your application to ensure a smooth user experience.
- Document your decisions, especially if you choose between options like `enum` vs. union types.