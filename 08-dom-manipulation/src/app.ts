const app = document.getElementById("app");

const p = document.createElement("p");

p.textContent = "Hello, world!";

app?.appendChild(p);

const btn = document.getElementById("button") as HTMLButtonElement;

btn?.click();

function isInputElement(
  element: EventTarget | null
): element is HTMLInputElement {
  // !!element
  return Boolean(element) && element instanceof HTMLInputElement;
}

btn.addEventListener("click", (event) => {
  console.log("I was clicked");
  if (isInputElement(event.target)) {
    console.log("Input value: ", event.target.value);
  }
});

const inputEl = document.getElementById("input");

inputEl?.addEventListener("click", (event) => {
  console.log("I was clicked");
  if (isInputElement(event.target)) {
    console.log("Input value: ", event.target.value);
  }
});

function getElement<T extends HTMLElement>(id: string): T | null {
  const el = document.getElementById(id);
  return el as T;
}

const myButton = getElement<HTMLButtonElement>("button");

myButton?.click();
myButton?.click();
myButton?.click();
