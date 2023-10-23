interface IGreeter {
  location: string;
  times: number;
  accent: string;
}

interface ILogger<T> {
  greet(name: T): void;
}

interface IUser {
  name: string;
}

interface OtherUser {
  name: {
    firstName: string;
  };
}

class Greeter implements IGreeter, ILogger<string> {
  location = "Salford";
  accent = "RP";
  // times = 1;

  constructor(public times: number) {
    this.times = times;
  }

  greet<T>(name: T) {
    console.log(
      `Hello, ${name}! (in a ${this.accent} accent)`.repeat(this.times)
    );
  }
}

const greeter = new Greeter(3);
greeter.greet<string>("Manish");

abstract class School {
  readonly name: string = "";

  static locator() {
    console.log("I'm right here!");
  }
}

class Preschool extends School {}

const school1 = new Preschool();
