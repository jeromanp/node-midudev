import express, { json } from "express";
import { moviesRouter } from "./routes/movies.js";
import { corsMiddleware } from "./middlewares/cors.js";

const app = express();
app.use(json());
app.use(corsMiddleware());
app.disable("x-powered-by"); //deshabilita el header X-Powered-By: Express

app.get("/", (req, res) => {
  res.json({ message: "Hola mundo" });
});

app.use("/movies", moviesRouter);

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
  console.log(`Server escuchando en el puerto http://localhost:${PORT}`);
});
