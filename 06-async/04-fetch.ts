// axios

async function run(url: string, signal: AbortSignal) {
  try {
    const response = await fetch(url, { signal });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch. Status: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      console.log("Request was aborted.");
    } else {
      console.log(error);
    }
  }
}

const ac = new AbortController();
const { signal } = ac;

run("https://api.github.com/useasdass/", signal);
setTimeout(() => ac.abort(), 1);
