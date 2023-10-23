// import http from "http";
// console.log(http);

import { photos } from "./photos.json";

console.log(photos[0]);

// destructuring

// Array
const array1 = [
  ["Zac", "Tom", "Robbie"],
  ["Fiona", "Manish", "Inken"],
];

const [[, teamLeader1], [teamLeader2]] = array1;
// const [count, setCount] = React.useState(0)
console.log(teamLeader1, teamLeader2);

// Object
const user = {
  name: "Nicholas",
  background: "AI",
  previousLanguages: ["Python"],
};

// Looks confusing!
const { name: firstName, background } = user;

console.log(firstName, background);

console.log(photos[0].id);

const { id, title } = photos[0];

console.log(id, title);

// console.log([] === []);

const array123 = [];

let updateableName = "";

// var interesting;
// console.log(interesting);

// interesting = "Maths";

function log(message: string) {
  console.log(message);
}

export { log };
export default log;
