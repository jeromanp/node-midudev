const fs = require("node:fs");

fs.readdir(".", (err, files) => {
  if (err) {
    console.log("Error en el fichero: ", err);

    return;
  }
  files.forEach((file) => {
    console.log(file);
  });
});
