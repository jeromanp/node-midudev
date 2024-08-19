//Esto solo en modulos nativos que no tiene promesas 
// const {promisify} = require("node:util")
// const readFile = promisify(fs.readFile);

const fs = require("node:fs/promises");


console.log("Leyendo el primer archivo...");
fs.readFile("./archivo.txt", "utf-8")
  .then((data) => {
    console.log("Contenido del primer archivo:");
    console.log(data);
  })
  .catch((err) => {
    console.error("Error al leer el primer archivo:", err.message);
  });

console.log("hacer cosas mientras lee los archivos");

console.log("Leyendo el segundo archivo...");
fs.readFile("./archivo2.txt", "utf-8")
  .then((data) => {
    console.log("Contenido del segundo archivo:");
    console.log(data);
  })
  .catch((err) => {
    console.error("Error al leer el segundo archivo:", err.message);
  });
