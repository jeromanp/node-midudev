const http = require("node:http")

const server = http.createServer((req, res) => {
  console.log("request received");
  res.end("Hola mundo!");
})

server.listen(0, () => {
  console.log(`Server running on port http://localhost:${server.address().port}`)
})
