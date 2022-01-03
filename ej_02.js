function concadenar(string1, string2) {
  if (string1.indexOf(string2) >= 0) {
    console.log(string2.concat(" ", string1));
  } else {
    console.log(string1.concat(", ", string2));
  }
}

concadenar("como", "¿como estás?");
