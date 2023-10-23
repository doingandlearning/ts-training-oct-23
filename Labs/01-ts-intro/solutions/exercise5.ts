let unknownValue: unknown = "This is a string... or is it?";

if (typeof unknownValue === "string") {
  console.log(`String value: ${unknownValue}`);
}

if (typeof unknownValue === "number") {
  console.log(`Number value: ${unknownValue}`);
}
