function* generatorFunction() {
  yield "🍑";
  yield "🍉";
  yield "🍋";
  yield "🥭";
}
const fruitGenerator = generatorFunction();
console.log(fruitGenerator[Symbol.iterator]);

console.log(fruitGenerator.next());
console.log(fruitGenerator.next());
console.log(fruitGenerator.next());
console.log(fruitGenerator.next());

console.log("About to go into for loop");
for (let fruit of fruitGenerator) {
  console.log(fruit);
}

function* fibon(): Generator<string> {
  let first = 1;
  let second = 1;
  // 1, 1, 2, 3, 5, 8, 13, 21 , ....
  while (true) {
    let sum = second + first;
    yield `The next value is ${sum}`;
    first = second;
    second = sum;
  }
}

const sequence = fibon();
// console.time();
// console.log(sequence.next());
// console.log(sequence.next());
// console.log(sequence.next());
// console.log(sequence.next());
// console.log(sequence.next());
// console.log(sequence.next());
// console.log(sequence.next());
// console.log(sequence.next());
// console.log(sequence.next());
// console.log(sequence.next());
// console.log(sequence.next());
// console.log(sequence.next());
// console.log(sequence.next());
// console.log(sequence.next());
// console.log(sequence.next());
// console.log(sequence.next());
// console.log(sequence.next());
// console.log(sequence.next());
// console.log(sequence.next());
// console.log(sequence.next());
// console.log(sequence.next());
// console.log(sequence.next());
// console.log(sequence.next());
// console.log(sequence.next());
// console.timeLog();

for (let value of sequence) {
  console.log(value);
}
