type Photo = {
  name?: string;
  age?: number;
};

interface IPhoto {
  name?: string;
  age?: number;
}

const test: Photo = {};

test.age = 10;
test.name = "Ethan";

type BirdType = {
  wings: 2;
};

interface BirdInterface {
  wings: 2;
}

const bird1: BirdType = { wings: 2 };
const bird2: BirdInterface = { wings: 2 };

// Structural Type interface -> Duck (Bird) Typing
const bird3: BirdInterface = bird1;

// Extending

type Owl = { nocturnal: true } & BirdType;
type Robin = { nocturnal: false } & BirdInterface;

interface Peacock extends BirdType {
  colourful: true;
  flies: false;
}

interface Chicken extends BirdInterface {
  colourful: false;
  flies: false;
}

let owl: Owl = { wings: 2, nocturnal: true };
let chicken: Chicken = { wings: 2, colourful: false, flies: false };

// Better errors
owl = chicken;
chicken = owl;

interface Puppy {
  color: string;
}

interface Puppy {
  toys: number;
}

// Types vs Interface
