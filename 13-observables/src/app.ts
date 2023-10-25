//
import { catchError, debounceTime, fromEvent, map, of, tap } from "rxjs";

const testData: string[] = [
  "people",
  "planets",
  "species",
  "starships",
  "vehicles",
  "films",
];
const searchBox = document.querySelector("#search") as HTMLInputElement;
const results = document.querySelector("#results") as HTMLElement;
const errorDisplay = document.querySelector("#error") as HTMLElement;

const keyStream$ = fromEvent(searchBox, "keyup");

const sendRequest = (arr: string[], query: string) => {
  return arr.filter((item) => query.length > 0 && item.includes(query));
};

const cleanUpUtil = (container: HTMLElement) => {
  while (container.childElementCount > 0) {
    container.removeChild(container.firstChild as HTMLElement);
  }
};

const appendResults = (container: HTMLElement, results: string[]) => {
  for (const result of results) {
    const li = document.createElement("li");
    const text = document.createTextNode(result);
    li.appendChild(text);
    container.appendChild(li);
  }
};

keyStream$
  .pipe(
    debounceTime(500),
    map((event) => {
      const input = event.target as HTMLInputElement;
      return input.value;
    }),
    map((query) => sendRequest(testData, query)),
    catchError((error, caught) => {
      errorDisplay.innerText = "Something went wrong!";
      return of([]);
    })
  )
  .subscribe((result) => {
    cleanUpUtil(results);
    cleanUpUtil(errorDisplay);
    appendResults(results, result);
  });

// TODO: Write the async and promise versions of the above!
// .then().then().then()
