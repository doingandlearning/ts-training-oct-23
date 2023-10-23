{
  // Type inference
  let name: string | number = "Kevin";
  name = 89;

  // boolean, BigInt, null, undefined, symbol
  const result = typeof name;
  // In javascript - everything is an object -> Objects, Arrays, Functions

  // let largeNumber = 120n;
}

{
  // any, never, void
  let user: any = { name: "Catherine" };
  user.role = "Apprentice";

  function log() {
    console.log("i was logged");
  }

  // Conditional -> never
}

{
  // Spread ... Rest

  // function greeting(...params) {
  //   // params === ["Fiona", "Glasgow"]
  //   console.log(`Hello ${params[0]} from ${params[1]}`);
  // }

  // function greeting2(name, location) {
  //   console.log(`Hello ${name} from ${location}.`);
  // }

  greeting3("Fiona", "Glasgow");
  function greeting3(name: string, location: string): string {
    return `Hello ${name} from ${location}.`;
  }

  const multiply = (a: number, b: number): number => a * b;
  const result = multiply(2, 3);
}

{
  // String
  const a = "Hello";
  let b = "Hello";

  type Kingdom = "Bacteria" | "Protozoa" | "Chromista";
  let k: Kingdom;

  k = "Bacteria";
}

{
  enum BoxSize {
    Small = "sm012",
    Medium = "1080",
    Large = "1920",
  }

  console.log(BoxSize.Medium);
}

{
  // Array
  const names: (number | string)[] = ["Manish", "Robbie", "Iulia"]; //  as const

  names.push("Tom");
  names.push("Inken");
  names.push(121);

  // Tuple
  // [userid, username, isAdmin]
  // [number]  number[]
  let tupleArray: [number, string, boolean];
  tupleArray = [123, "one-two-three", Boolean()];

  tupleArray[1].toUpperCase();
}
