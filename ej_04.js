
function arrayContenidoIgual(param) {
  let actual = strings[0];

  for (let i = 1; i < strings.length; i++) {
    if (strings[i] !== actual) {
      return false;
    }
    strings[i] = actual;
  }
  return true;
}

const strings = ["10", 10, 10];

console.log(arrayContenidoIgual(strings));
