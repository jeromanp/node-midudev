//en type : module
// no olvidad agregar la extension del archivo de donde se importan los elementos

//importar el modelo local
// import { MovieModel } from "../models/local-file-system/movie.js";

//importar modelo de mysql
// import { MovieModel } from "../models/mysql/movie.js";

import { validateMovie, validatePartialMovie } from "../schemas/movie.js";

export class MovieController {
  constructor({ movieModel }) {
    this.movieModel = movieModel;
  }

  getAll = async (req, res) => {
    const { genre } = req.query;
    const movies = await this.movieModel.getAll({ genre });
    res.json(movies);
  };

  getById = async (req, res) => {
    const { id } = req.params;
    const movie = await this.movieModel.getById({ id });
    if (movie) return res.json(movie);
    res.status(404).json({ message: "Película no encontrada" });
  };

  create = async (req, res) => {
    const result = validateMovie(req.body);

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) });
    }

    const newMovie = await this.movieModel.create({ input: result.data });
    res.status(201).json(newMovie);
  };

  update = async (req, res) => {
    const result = validatePartialMovie(req.body);

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) });
    }

    const { id } = req.params;
    const updateMovie = await this.movieModel.update({ id, input: result.data });

    return res.json(updateMovie);
  };

  delete = async (req, res) => {
    const { id } = req.params;

    const result = await this.movieModel.delete({ id });

    if (result === false) {
      return res.status(404).json({ message: "Película no encontrada" });
    }

    return res.json({ message: "Película eliminada con exito" });
  };
}

