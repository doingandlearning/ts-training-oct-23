const baseURL: string = "https://swapi.dev/api/";

interface SWAPIResponse {
  [key: string]: any; // Generic key-value pair as the response structure varies based on the category
}

function fetchData(): void {
  const categoryElement = <HTMLSelectElement>(
    document.getElementById("category")
  );
  const category: string =
    categoryElement.options[categoryElement.selectedIndex].value;

  const idElement = <HTMLInputElement>document.getElementById("id");
  const id: number = parseInt(idElement.value);

  if (!id) {
    displayError("Please provide an ID.");
    return;
  }

  const url: string = `${baseURL}${category}/${id}/`;

  fetch(url)
    .then((response: Response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data: SWAPIResponse) => displayData(data))
    .catch((error: Error) =>
      displayError("Failed to fetch data: " + error.message)
    );
}

document.getElementById("fetch")!.addEventListener("click", fetchData);

function displayData(data: SWAPIResponse): void {
  const outputElement = document.getElementById("output");
  outputElement!.innerHTML = JSON.stringify(data, null, 4); // Pretty print JSON
}

function displayError(errorMessage: string): void {
  const outputElement = document.getElementById("output");
  outputElement!.innerHTML = `<span style="color:red;">${errorMessage}</span>`;
}

// Function to fetch data based on search query
function fetchDataBySearch() {
  const input = document.getElementById("searchInput") as HTMLInputElement;
  const searchTerm = input.value;

  // Check if the input is not empty
  if (!searchTerm.trim()) {
    alert("Please enter a search term!");
    return;
  }

  // Fetch data from SWAPI based on the search term
  fetch(`${baseURL}people/?search=${searchTerm}`)
    .then((response) => response.json())
    .then((data) => displaySearchResults(data.results))
    .catch((error) => console.error("Error fetching data:", error));
}

document
  .getElementById("searchButton")!
  .addEventListener("click", fetchDataBySearch);

// Function to display results (simplified for the sake of this example)
function displaySearchResults(results: any[]) {
  const resultsDiv = document.getElementById("results");
  resultsDiv!.innerHTML = ""; // Clear any existing results

  results.forEach((result) => {
    const div = document.createElement("div");
    div.innerText = result.name;
    resultsDiv!.appendChild(div);
  });
}

// Attach event listener to the search button
document
  .getElementById("searchButton")!
  .addEventListener("click", fetchDataBySearch);
