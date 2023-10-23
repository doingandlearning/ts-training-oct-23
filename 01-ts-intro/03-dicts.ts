interface Translation {
  hello: string;
  [phrase: string]: string; // Dictionary type
}

const obj1: Translation = {
  hello: "Bonjour",
};

obj1.goodbye = "Au revoir";
obj1.howareyou = "Ca va?";
obj1.green = "Vert";
// obj1.one = 1
