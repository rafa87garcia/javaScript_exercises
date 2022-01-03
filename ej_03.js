function convertirArray(num) {
  const string = String(num);
  const stringArray = [];

  string.forEach(function (element, index) {
    stringArray[index] = element;
  });
}

convertirArray("10");
