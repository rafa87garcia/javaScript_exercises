function palabraMasLarga(paramsArray) {
  let palabra = "";
  for (const item of paramsArray) {
    if (item.length > palabra.length) {
      palabra = item;
    }
  }
  console.log(palabra);
}

const strings = ["hola", "como estas", "adiós"];

palabraMasLarga(strings);
