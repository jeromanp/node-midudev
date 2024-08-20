const path = require("node:path")

//muestra barra separadora de carpetas segung SO
console.log(path.sep);

//unir rutas con path join
const filePath = path.join("content", "subfolder", "test.txt");
console.log(filePath);

//obtener nombre de fichero
const base = path.basename(filePath);
console.log(base);

//solo nombre del fichero
const fileName = path.basename(filePath, ".txt");
console.log(fileName);

//extension del fichero
const extension = path.extname(filePath);
console.log(extension);


