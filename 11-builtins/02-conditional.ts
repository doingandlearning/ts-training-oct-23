type IsString<T> = T extends string ? true : false;

type A = IsString<"I am a string">;
type B = IsString<1234>;

type ApiResponse<T> = T extends "user"
  ? { id: number; name: string }
  : T extends "product"
  ? { sku: string; price: number }
  : unknown;

type User1 = ApiResponse<"user">;
type Product1 = ApiResponse<"product">;
type Unknown = ApiResponse<"something else">;

type ThemeProperties<T> = T extends "dark"
  ? { backgroundColor: "black" }
  : { backgroundColor: "white" };

type DarkTheme = ThemeProperties<"dark">;

// infer

type Func = () => string;

// (parameterType) => ReturnType
type ReturnResult<T> = T extends (...args: any[]) => infer R ? R : any;

type Result = ReturnType<Func>;
type Result2 = ReturnResult<() => 123>;

type ElementOf<T> = T extends Array<infer ElementType> ? ElementType : never;

const arr1 = ["ab", "cd", "ef"];

type ArrayType = number[];
type StringArray = ElementOf<string>;

type PropType<T, Prop extends string> = T extends { [key in Prop]: infer P }
  ? P
  : never;

type Person = { name: string; age: number };
type AgeType = PropType<Person, "location">;

abstract class ApplicationError {
  abstract status: number;
  abstract message: string;
}

class ServerError extends ApplicationError {
  status = 500;
  constructor(public message: string) {
    super();
  }
}

class BBCServerError extends Error {}

// URIError()
// SyntaxError()
// EvalError()
// RangeError()

type ErrorType<T extends { error: ApplicationError | Error }> =
  T["error"] extends ApplicationError ? ApplicationError : Error;

type error = ErrorType<{ error: ApplicationError }>;
type error1 = ErrorType<{ error: BBCServerError }>;
type error2 = ErrorType<"I am not an error">;
