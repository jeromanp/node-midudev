const fs = require("node:fs");

console.log("Leyendo el primer archivo...");
const firstText = fs.readFile("./archivo.txt", "utf-8");
console.log("Primer texto:", firstText);

console.log("hacer cosas mientras lee los archivos");

console.log("Leyendo el segundo archivo...");
const secondText = fs.readFile("./archivo2.txt", "utf-8");
console.log("Segundo texto:", secondText);
