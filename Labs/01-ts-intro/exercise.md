# Practice Lab - Basic Types and Beyond

In this module, we dove deep into foundational TypeScript types and gradually ventured into more advanced constructs like interfaces, dictionaries, maps, and guarded types. Each exercise aims to enhance your understanding of TypeScript's type system, ensuring you become adept at crafting robust, type-safe applications. As you work through the tasks, please use the student folder for your implementations. And remember, if you ever find yourself in a quandary, detailed solutions are readily accessible in the solutions folder. Happy coding!


# Exercise 1. Types

In this section, you'll practice using different types in TypeScript.

- Define a variable of type number and assign it a value.
- Define a variable of type string and assign it a value.
- Define a variable of type boolean and assign it a value.
- Define a variable of type any and assign it a value.
- Define a variable of type unknown and assign it a value.
- Define a variable of type void and assign it a value.

- Log these values out
- Run the code with ts-node
- Compile the code and run the JS file

## Exercise 2 -  Interfaces
In this section, you'll practice using interfaces to define the shape of objects.

- Define an interface `Person` with the following properties: name (string), age (number), and email (string).
- Define a variable of type Person and assign it an object that conforms to the Person interface.
- Define a function that takes a Person object as a parameter and returns a string that includes the person's name and age.
- Use your function
- Run the code with ts-node
- Compile the code and run the JS file


## Exercise 3 - Dictionaries
In this section, you'll practice using dictionaries (also known as index signatures) to define objects with dynamic keys.

- Define a variable of type { [key: string]: number } and assign it an object with at least two key-value pairs.
- Define a function that takes a dictionary of numbers as a parameter and returns the sum of all the values
- Run the code with ts-node
- Compile the code and run the JS file

## Exercise 4 - Maps
In this section, you'll practice using the built-in Map class to store key-value pairs.

- Create a new instance of the Map class and add at least two key-value pairs.
- Define a function that takes a Map object as a parameter and returns the sum of all the values.
- Run the code with ts-node
- Compile the code and run the JS file

## Exercise 5 - Guarded Types
In this section, you'll practice using guarded types to refine the type of a variable.

- Define a variable of type unknown and assign it a value.
- Use a type guard to check if the variable is a string. If it is, log the string to the console.
- Use another type guard to check if the variable is a number. If it is, log the number to the console.
- Run the code with ts-node
- Compile the code and run the JS file


# Conclusion
Congratulations, you've completed the TypeScript lab! This lab covered some basic concepts in TypeScript, including types, interfaces, dictionaries, maps, and guarded types. These concepts are essential for writing type-safe and maintainable code in TypeScript.