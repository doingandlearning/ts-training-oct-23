// Haskell

// export default function CounterComponent(props) {}

// 1. Pure Functions

// - doesn't change anything beyond itself
// - same input => same output

// const add = (a: number, b: number) => a + b;

const isValidEmail = (email: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Easier to reason about
// Concurrency
// Caching
// Easier to test

// 2. Immutability

const arr = [1, 2, 3];
const newArr = [...arr];

newArr.push(4);

console.log(arr);
console.log(newArr);

// [].toSorted()
// [].map()
// [].filter()
// [].reduce()

// setState(newValue)
// setState(prevValue => [...prevValue, ])

// 3. Higher Order Functions

const numbers = [1, 2, 3, 4, 5];
const doubles = numbers.map((number) => number * 2);

// 4. Function Composition

const compose = (f, g) => (x) => f(g(x));

// Express middleware
const app = express();

// Request
app.use(logger);
app.use(requestTime);

response = logger(requestTime(handle(request)));
// Response

// 5. Currying

// const multiply = (a, b) => a * b;
const multiply = (a: number) => (b: number) => a * b;
const double = multiply(2); // double(4)
const result = double(5);

// CSS-in-JS
const buttonStyles = (theme) => (size) => ({});
const darkButtonStyles = buttonStyles("dark");

darkButtonStyles("large");

// Function Overloading
{
  function add(a: number, b: number): number;
  function add(a: number, b: number, c: number): number;
  function add(a: number, b: number, c: number, d: number): number;
  function add(a: number, b: number, c?: number, d?: number): number {
    return a + b + (c || 0) + (d || 0);
  }

  function addLots(...nums: number[]) {
    return nums.reduce((a, c) => a + c, 0);
  }

  function overload(name: string): string;
  function overload(age: number): string;
  function overload(isSingle: boolean): string;
  function overload(value: string | number | boolean): string {
    switch (typeof value) {
      case "string":
        return `Hello, my name is ${value}.`;
      case "number":
        return `Hello, my age is ${value}.`;
      case "boolean":
        return `Hello, I ${value ? "am" : "am not"} single.`;
      default:
        throw new Error("Invalid use of function.");
    }
  }

  // document.createElement()

  // document.createElement();
}
