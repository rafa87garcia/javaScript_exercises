function aniadirContinente(objects, string) {
  for (const iterator of objects) {
    iterator.continent = string;
  }
  return objects;
}

const asia = [
  { city: "Tokyo", country: "Japan" },
  { city: "Bangkok", country: "Thailand" },
];
console.log(aniadirContinente(asia, "Asia"));

const europa = [
  { city: "Stockholm", country: "Sweden" },
  { city: "Paris", country: "France" },
];
console.log(aniadirContinente(europa, "Europe"));