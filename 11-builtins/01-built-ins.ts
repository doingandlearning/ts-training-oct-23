// Exclude: Removes specific types from a type

type FormValue = number | string;
type ErrorMessage = Exclude<FormValue, number>;

type ItemStatus =
  | "available"
  | "out of stock"
  | "coming soon"
  | "discounted"
  | "low stock";

type AvailableItems = Exclude<ItemStatus, "coming soon" | "out of stock">;

// Extract: Picks types that are present in another type
type TaskState = "todo" | "in progress" | "done" | true;
type ReminderSet = Extract<TaskState, Boolean>;

// NonNullable
type UserAgeData = {
  age?: { yearOfBirth: number; monthOfBirth: number } | number | null;
};
type ValidAge = NonNullable<UserAgeData["age"]>;

type Movie = { title: string; releaseYear?: number | null };
type ReleasedMovieYear = NonNullable<Movie["releaseYear"]>;

// ReturnType

function getAuthorAndTitle(isbn: string) {
  // do some work
  const title = "And then she vanished";
  const author = "Nick Jones";
  return {
    title,
    author,
  };
}

let bookDetails: ReturnType<typeof getAuthorAndTitle>;

// InstanceType

type PlayerClass = { new (): PlayerInstance };
type PlayerInstance = {
  health: number;
  xp: number;
  level: number;
  attack: () => void;
};

type PlayerObject = InstanceType<PlayerClass>;

type UserClass = { new (): UserInstance };
type UserInstance = { id: number; name: string };

type UserObject = InstanceType<UserClass>; // Results in { id: number, name: string }

class C {
  x = 0;
  y = 0;
}

type T0 = InstanceType<typeof C>;

//

async function run() {
  return "I ran";
}

type RunReturn = Awaited<ReturnType<typeof run>>;
