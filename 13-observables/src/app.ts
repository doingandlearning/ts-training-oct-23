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

// Promise version (without debounce)

// const sendRequestPromise = (arr: string[], query: string) => {
//   return new Promise<string[]>((resolve) => {
//     const result = arr.filter((item) => query.length > 0 && item.includes(query));
//     resolve(result);
//   });
// };

// searchBox.addEventListener('keyup', () => {
//   const query = searchBox.value;
//   sendRequestPromise(testData, query)
//     .then(resultsArray => {
//       if (query.length > 0) {
//         cleanUpUtil(results);
//         cleanUpUtil(errorDisplay);
//         appendResults(results, resultsArray);
//       } else {
//         cleanUpUtil(results);
//       }
//     })
//     .catch(error => {
//       errorDisplay.innerText = "Something went wrong!";
//     });
// });

// Async/Await without debounce

// const sendRequestAsync = async (arr: string[], query: string) => {
//   return new Promise<string[]>((resolve) => {
//     const result = arr.filter((item) => query.length > 0 && item.includes(query));
//     resolve(result);
//   });
// };

// searchBox.addEventListener('keyup', async () => {
//   try {
//     const query = searchBox.value;
//     if (query.length > 0) {
//       const resultsArray = await sendRequestAsync(testData, query);
//       cleanUpUtil(results);
//       cleanUpUtil(errorDisplay);
//       appendResults(results, resultsArray);
//     } else {
//       cleanUpUtil(results);
//     }
//   } catch (error) {
//     errorDisplay.innerText = "Something went wrong!";
//   }
// });

// Debounce with setTimeout/clearTimeout

// let debounceTimer: any = null;

// searchBox.addEventListener('keyup', () => {
//   clearTimeout(debounceTimer);

//   debounceTimer = setTimeout(async () => {
//     try {
//       const query = searchBox.value;
//       if (query.length > 0) {
//         const resultsArray = await sendRequestAsync(testData, query);
//         cleanUpUtil(results);
//         cleanUpUtil(errorDisplay);
//         appendResults(results, resultsArray);
//       } else {
//         cleanUpUtil(results);
//       }
//     } catch (error) {
//       errorDisplay.innerText = "Something went wrong!";
//     }
//   }, 500); // 500ms debounce time
// });

// Debounce with AbortController

// let debounceTimer: any = null;
// let controller: AbortController | null = null;

// const sendFetchRequest = async (arr: string[], query: string) => {
//   if (controller) {
//     controller.abort();
//   }

//   controller = new AbortController();
//   const signal = controller.signal;

//   // This is just an example. Your actual fetch URL and options will vary.
//   const response = await fetch(`yourSearchURL?q=${query}`, { signal });
//   const data = await response.json();

//   // Process the fetched data and return a filtered list.
//   return data.filter((item: string) => item.includes(query));
// };

// searchBox.addEventListener('keyup', () => {
//   clearTimeout(debounceTimer);

//   debounceTimer = setTimeout(async () => {
//     try {
//       const query = searchBox.value;
//       if (query.length > 0) {
//         const resultsArray = await sendFetchRequest(testData, query);
//         cleanUpUtil(results);
//         cleanUpUtil(errorDisplay);
//         appendResults(results, resultsArray);
//       } else {
//         cleanUpUtil(results);
//       }
//     } catch (error) {
//       if (error.name !== 'AbortError') {
//         errorDisplay.innerText = "Something went wrong!";
//       }
//     }
//   }, 500); // 500ms debounce time
// });
