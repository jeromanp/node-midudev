//Esto solo en modulos nativos que no tiene promesas
// const {promisify} = require("node:util")
// const readFile = promisify(fs.readFile);

import { readFile } from "node:fs/promises";

Promise.all([
  readFile("archivo.txt", "utf-8"),
  readFile("archivo2.txt", "utf-8"),
]).then(([text, text2]) => {
  console.log("Primer texto: ", text);
  console.log("Segundo texto: ", text2);
});
