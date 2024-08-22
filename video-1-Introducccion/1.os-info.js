const os = require("node:os");

console.log("Informacion del sistema operativo:");
console.log("----------------------");

console.log("Nombre del sistema operativo", os.platform());
console.log("Version del sistema operativo", os.release());
console.log("Arquitectura del sistema operativo", os.arch());
console.log("CPUs", os.cpus()); //escalar procesos en Node
console.log("Memoria disponible", os.freemem() / 1024 / 1024, "MB");
console.log("Memoria total", os.totalmem() / 1024 / 1024);
console.log("Directorio de trabajo actual", process.cwd());
console.log("Id del proceso", process.pid);
console.log("uptime", os.uptime() / 60 / 60);
