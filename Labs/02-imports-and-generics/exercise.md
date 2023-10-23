# Imports and Generics Exercises

Welcome to the "Imports and Generics" exercises. In this module, you'll explore advanced TypeScript concepts pertaining to module imports, exports, and the use of generics. Each exercise is designed to incrementally challenge your understanding and application of these concepts. You should write your solutions in the `student` folder, and if you ever find yourself stuck, reference implementations are available in the `solutions` folder. Let's get started!

## Exercise 1. Default Exports and Imports with Generics
In this section, you'll practice exporting and importing a default value from a module with generics.

1. Create a new file named data.ts in the root of your project.
2. In data.ts, define a generic class named DataStore that has a private property named data of type T[].
3. Add a constructor to DataStore that initializes the data property to an empty array.
4. Add a public method named add to DataStore that takes an item of type T as a parameter and adds it to the data array.
5. Add another public method that logs the contents of `this.data`.
6. Export DataStore as the default export of the module.
7. In exercise1.ts, import the DataStore class from data.ts using a default import.
8. Create a new instance of DataStore with a generic type of string.
9. Call the add method on the instance with a string parameter. Confirm that you get an error if you try to use a different type. 
10. Invoke the log method.
11. Create a new instance of DataStore with a generic type of number.
12. Call the add method on the instance with a number parameter.
13. Invoke the log method.

You can test your code by compiling (run tsc) or by using ts-node.

## Exercise 2 - Named Exports and Imports with Generics
In this section, you'll practice exporting and importing named values from a module with generics.

1. Modify data.ts to export a named interface IDataStore that defines the shape of the DataStore class.
2. Modify DataStore to implement the IDataStore interface.
3. Export another named interface IDataItem that defines the shape of the items that can be added to the DataStore.
4. In exercise2.ts, import the IDataStore and IDataItem interfaces using named imports.
5. Create a new instance of DataStore with a generic type of IDataItem.
6. Call the add method on the instance with an object that conforms to the IDataItem interface.
7. Invoke the log method.

You can test your code by compiling (run tsc) or by using ts-node.

## Exercise 3 - Renaming Exports and Imports with Generics
In this section, you'll practice renaming exports and imports with generics using the as keyword.

1. Modify data.ts to export the DataStore class as a named export with the name Store.
2. In index.ts, import the Store class using a renamed import that changes its name to DataStore.
3. Create a new instance of DataStore with a generic type of number.
4. Call the add method on the instance with a number parameter.


## Exercise 4 - Re-Exporting with Specialized Generics

In this section, you will practice re-exporting values from one module to another, while constraining generics.

1. Create a new file named `data2.ts` in the root of your project.
2. Within `data2.ts`, import the `DataStore` class from `data.ts`.
3. Create a new class, `StringDataStore`, that extends `DataStore<string>`.
4. Export the `StringDataStore` class.
5. In `index.ts`, import the `StringDataStore` class from `data2.ts`.
6. Instantiate `StringDataStore` and assign it to a variable, `store`.
7. Call the `add` method on `store` with a string parameter, for example: "String test".
8. Call a method, `log`, on `store` to display the added data.


## Exercise 5 - Generics with Constraints

In this section, you'll practice using generics with constraints to enforce a specific shape for the generic type.

1. Modify data.ts to export a new interface ICountable that has a count property of type number.
2. Add a constraint to the DataStore class that restricts the generic type parameter to types that implement the ICountable interface.
3. Add a public method named getCount to the DataStore class that returns the total count of items in the data array.
4. In index.ts, create a new object that implements the ICountable interface and pass it as a parameter to the add method of the DataStore instance.
5. Call the getCount method on the DataStore instance and log the result to the console.
