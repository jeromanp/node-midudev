const http = require("node:http");
const fs = require("node:fs");

const desiredPort = process.env.PORT ?? 1234;

const processRequest = (req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html;charset=utf-8");
    res.end("Bienvenido a la página de inicio");
  } else if (req.url === "/imagen-logo.png") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "image/png");
    fs.readFile("./me.png", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/plain;charset=utf-8");
        res.end("Error interno del servidor");
      } else {
        res.setHeader("Content-Type", "image/png");
        res.end(data);
      }
    });
  } else if (req.url === "/contacto") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html;charset=utf-8");
    res.end("Página de contacto");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain;charset=utf-8");
    res.end("Página no encontrada");
  }
};

const server = http.createServer(processRequest);

server.listen(desiredPort, () => {
  console.log(`Server running on port http://localhost:${desiredPort}`);
});