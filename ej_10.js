function replanzarNull(object) {
  for (const key in object) {
    if (object[key] == "" || object[key] == " ") {
      object[key] = null;
    }
  }
  console.log(object);
}
const dieHardObj = { a: "a", b: "b", c: " " };

replanzarNull(dieHardObj);
