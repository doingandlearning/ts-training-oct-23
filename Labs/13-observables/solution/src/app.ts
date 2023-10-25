import { error } from "console";
import { fromEvent, of, from } from "rxjs";
import {
  debounceTime,
  map,
  tap,
  catchError,
  distinctUntilChanged,
  switchMap,
} from "rxjs/operators";

const searchBox = document.querySelector("#search") as HTMLInputElement;
const results = document.querySelector("#results") as HTMLElement;
const errorDisplay = document.querySelector("#error") as HTMLElement;

// Fetch data from Star Wars API
const fetchData = (query: string) => {
  return from(
    fetch(`https://swapi.dev/api/${query}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => data.results.map((item: any) => item.name))
  ).pipe(
    catchError((error) => {
      throw error;
    })
  );
};

const appendResults = (container: HTMLElement, results: string[]) => {
  for (const result of results) {
    const li = document.createElement("li");
    const text = document.createTextNode(result);
    li.appendChild(text);
    container.appendChild(li);
  }
};

const cleanUpUtil = (container: HTMLElement) => {
  while (container.childElementCount > 0) {
    container.removeChild(container.firstChild as HTMLElement);
  }
};

const keyStream$ = fromEvent(searchBox, "keyup");

keyStream$
  .pipe(
    debounceTime(500),
    map((event) => {
      const input = event.target as HTMLInputElement;
      return input.value;
    }),
    distinctUntilChanged(),
    tap((item) => console.log(`Querying for ${item}`)),
    switchMap((query) => {
      if (query && query.trim().length > 0) {
        errorDisplay.innerText = "";
        return fetchData(query).pipe(
          catchError((error) => {
            errorDisplay.innerText = "An error occurred!";
            return of([]);
          })
        );
      } else {
        return of([]); // Return empty if query is blank
      }
    })
  )
  .subscribe((result: string[]) => {
    cleanUpUtil(results);
    // errorDisplay.innerText = "";
    appendResults(results, result);
  });
