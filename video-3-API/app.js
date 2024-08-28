const express = require("express");
const crypto = require("node:crypto");
const movies = require("./movies.json");
const validateMovie = require("./schemas/movie");

const app = express();
app.use(express.json());
app.disable("x-powered-by"); //deshabilita el header X-Powered-By: Express

app.get("/", (req, res) => {
  res.json({ message: "Hola mundo" });
});

app.get("/movies", (req, res) => {
  const { genre } = req.query;
  if (genre) {
    const filteredMovies = movies.filter((movie) =>
      movie.genre.some((g) => g.toLowerCase() === genre.toLowerCase())
    );
    return res.json(filteredMovies);
  }
  res.json(movies);
});

app.get("/movies/:id", (req, res) => {
  const id = req.params.id;
  const movie = movies.find((movie) => movie.id === id);
  if (movie) return res.json(movie);
  res.status(404).json({ message: "Película no encontrada" });
});

app.post("/movies", (req, res) => {
  const result = validateMovie(req.body);

  if (result.error) {
    res.status(400).json({ error: result.error.message });
  }

  const newMovie = {
    id: crypto.randomUUID(),
    ...result.data,
  };

  movies.push(newMovie);
  res.status(201).json(newMovie);
});

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
  console.log(`Server escuchando en el puerto http://localhost:${PORT}`);
});
