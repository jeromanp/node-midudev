const fs = require("node:fs");

console.log("Leyendo el primer archivo...");
fs.readFile("./archivo.txt", "utf-8", (err, text) => {
  if (err) {
    console.error("Error al leer el primer archivo:", err.message);
    return;
  }
  console.log("Contenido del primer archivo:", text);
});

console.log("hacer cosas mientras lee los archivos");

console.log("Leyendo el segundo archivo...");
fs.readFile("./archivo2.txt", "utf-8", (err, text) => {
  if (err) {
    console.error("Error al leer el segundo archivo:", err.message);
    return;
  }
  console.log("Contenido del segundo archivo:", text);

});

