const judokas = [
  "Driulis Gonzalez Morales",
  "Ilias Iliadis",
  "Tadahiro Nomura",
  "Anton Geesink",
  "Teddy Riner",
  "Ryoko Tani",
];

console.log("forEach: ");
judokas.forEach((element) => console.log(element));

console.log("Old school for loop");
for (let i = 0; i < judokas.length; i++) {
  console.log(judokas[i]);
}

for (let judo of judokas) {
  console.log(judo);
}

console.log(judokas.map((element) => console.log(element)));

// while and unshift
while (judokas.length > 0) {
  console.log(judokas.shift());
}

const medallists = {
  "Teddy Riner": 33,
  "Driulis Gonzalez Morales": 16,
  "Ryoko Tani": 16,
  "Ilias Iliadis": 15,
};

for (const [judoka, medals] of Object.entries(medallists)) {
  console.log(`${judoka} has won ${medals} medals`);
}

console.log(Object.values(medallists));
