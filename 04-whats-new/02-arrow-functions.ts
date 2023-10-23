add(1, 2);
function add(a: number, b: number) {
  return a + b;
}
const add2 = (a: number, b: number) => a + b; // implicit return

function upperCase(element: string) {
  return element.toUpperCase();
}

const result = ["aba", "kevin", "catherine"].map((element: string) => {
  // other work
  return element.toUpperCase();
});

console.log(result);
