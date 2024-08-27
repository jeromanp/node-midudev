const express = require("express");
const movies = require("./movies.json");

const app = express();
app.disable("x-powered-by"); //deshabilita el header X-Powered-By: Express

app.get("/", (req, res) => {
  res.json({ message: "Hola mundo" });
});

app.get('/movies', (req, res) => {
    const { genre } = req.query
    if (genre) {
      const filteredMovies = movies.filter(
        movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
      )
      return res.json(filteredMovies)
    }
    res.json(movies)
  })

app.get("/movies/:id", (req, res) => {
  const id = req.params.id;
  const movie = movies.find((movie) => movie.id === id);
  if (movie) return res.json(movie);
  res.status(404).json({ message: "Película no encontrada" });
});

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
  console.log(`Server escuchando en el puerto http://localhost:${PORT}`);
});
