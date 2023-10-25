const multiply =
  (a: number) =>
  (b: number): number => {
    return a * b;
  };

const double = multiply(2);
console.log(double(4)); // 8
