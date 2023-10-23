// guards
function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }

  return padding + input;
}

console.log(padLeft(4, "1.134"));
