export interface Person {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  species: string[];
}

export interface Planet {
  [key: string]: string;
}
export interface Film {
  [key: string]: string;
}
export interface Species {
  [key: string]: string;
}
export interface Vehicle {
  [key: string]: string;
}
export interface Starship {
  [key: string]: string;
}

export interface SearchResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export type SWAPICategory =
  | "people"
  | "planets"
  | "films"
  | "species"
  | "vehicles"
  | "starships";

export type SWAPIResponseType = {
  people: Person;
  planets: Planet;
  films: Film;
  species: Species;
  vehicles: Vehicle;
  starships: Starship;
};

export type SWAPICategoryTypes = SWAPIResponseType[keyof SWAPIResponseType];
