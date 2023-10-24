function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max) + 1;
}

interface PersonApiResponse {
  name: string;
  homeworld: string;
}

async function fetchPersonAsync(): Promise<PersonApiResponse> {
  const randomId = getRandomInt(83);
  const response = await fetch(`https://swapi.dev/api/people/${randomId}/`);
  return response.json();
}

interface PlanetApiResponse {
  name: string;
}

export async function fetchPlanetAsync(
  url: string
): Promise<PlanetApiResponse> {
  const response = await fetch(url);
  return response.json();
}

async function run() {
  try {
    const person = await fetchPersonAsync();
    if (person.name) {
      console.log("Person:", person.name);
    }
    const planet = await fetchPlanetAsync(person.homeworld);
    console.log("Homeworld:", planet.name);
  } catch (error) {
    console.error("Error:", error);
  }
}

run();
