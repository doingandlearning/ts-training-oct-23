interface Person {
  name: string;
  age: number;
  email: string;
}

let personVar: Person = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
};

function getPersonInfo(person: Person): string {
  return `${person.name} is ${person.age} years old.`;
}

console.log(getPersonInfo(personVar));
