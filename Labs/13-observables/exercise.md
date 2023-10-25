# Exercise

Here are a selection of ideas for you to have a go at. Take your pick!

1. **Dynamic Data Source**:
   - Instead of using static `testData`, use the [Star Wars API](https://swapi.dev/) or any other public API. Fetch data dynamically based on the query entered.

2. **Advanced Filtering**:
   - Enhance the `sendRequest` function to do more advanced filtering, such as matching anywhere in the string, not just the start.
   - Implement case-insensitive search.

3. **Additional Operators**:
   - Introduce `distinctUntilChanged()` to prevent duplicate requests for the same query.
   - Use `switchMap` to handle async operations like fetching data from an API and canceling the previous request if a new request comes in.

4. **UI Enhancements**:
   - Highlight the matched portion of the results.
   - Display a spinner or loading indication while the request is being processed.

5. **Error Handling**:
   - Introduce a mechanism to handle errors. Display an error message when an error occurs.
   - Use the `catchError` operator from RxJS for this purpose.

6. **Extend UI**:
   - Add checkboxes or buttons to filter results based on categories (e.g., 'people', 'planets', etc.).
   - Implement an autocomplete dropdown that shows suggestions as the user types.

7. **Extend Functionality**:
   - Allow users to click on a result item. When clicked, display more detailed information about the item. This would be especially useful if you use an API like the Star Wars API.

8. **Refactoring**:
   - Encapsulate the observable logic into a custom hook (if integrating with React) or a separate utility function. This will help in separating the UI from the logic and make the code more modular.

