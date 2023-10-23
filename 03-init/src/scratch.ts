function firstElement<T>(a: Array<T>): T {
  return a[0];
}

const a_s = ["one", "two", "three", "four"];
const a_n = [1, 2, 3, 4];
const a_m = ["one", 2, "three", 4];

firstElement<string>(a_s);
firstElement<number>(a_n);
firstElement<number | string>(a_m);

interface Box<T> {
  inside: T;
}

interface HttpRequest<T> {
  body: {
    content: T;
  };
}

interface IplayerRequestContent {
  title: string;
  location: string;
  lastPlayed: string;
}

const newRequest: HttpRequest<IplayerRequestContent> = {
  body: {
    content: {
      title: "Doctor Who",
      location: "",
      lastPlayed: "",
    },
  },
};

let stringyBox: Box<string> = {
  inside: "I am a string",
};

let numberyBox: Box<number> = {
  inside: 123,
};

console.log(numberyBox);
