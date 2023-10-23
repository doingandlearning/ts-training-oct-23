// Exercise 1
function greetUser(name = "Guest") {
  return `Hello, ${name}!`;
}

// Exercise 2
const brand = "Toyota";
const model = "Camry";
const year = 2021;
const color = "Blue";

const car = { brand, model, year, color };

// Exercise 3
const add = (a, b) => a + b;
const square = (x) => x * x;

// Exercise 4
const number = 5;
const multiplier = 10;
const product = number * multiplier;

// Exercise 5
function* generatePrimes(n: number) {
  function isPrime(num: number) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return num !== 1;
  }

  let count = 0;
  let num = 2;

  while (count < n) {
    if (isPrime(num)) {
      yield num;
      count++;
    }
    num++;
  }
}

// Exercise 6
const studentGrades = {
  John: 85,
  Jane: 92,
  Jim: 78,
  Jill: 95,
};

for (const [student, grade] of Object.entries(studentGrades)) {
  if (grade > 90) {
    console.log(student);
  }
}

// Exercise 7
function analyzeNumbers(numbers: number[]) {
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  const average = sum / numbers.length;

  return { max, min, sum, average };
}

const nums = [10, 20, 30, 40, 50];
const analysis = analyzeNumbers(nums);
console.log(analysis);

export {};
