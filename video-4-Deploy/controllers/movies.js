//en type : module
// no olvidad agregar la extension del archivo de donde se importan los elementos

import { MovieModel } from "../models/movie.js";
import { validateMovie, validatePartialMovie } from "../schemas/movie.js";

export class MovieController {
  static async getAll(req, res) {
    const { genre } = req.query;
    const movies = await MovieModel.getAll({ genre });
    res.json(movies);
  }

  static async getById(req, res) {
    const { id } = req.params;
    const movie = await MovieModel.getById({ id });
    if (movie) return res.json(movie);
    res.status(404).json({ message: "Película no encontrada" });
  }

  static async create(req, res) {
    const result = validateMovie(req.body);

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) });
    }

    const newMovie = await MovieModel.create({ input: result.data });
    res.status(201).json(newMovie);
  }

  static async update(req, res) {
    const result = validatePartialMovie(req.body);

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) });
    }

    const { id } = req.params;
    const updateMovie = await MovieModel.update({ id, input: result.data });

    return res.json(updateMovie);
  }

  static async delete(req, res) {
    const { id } = req.params;

    const result = await MovieModel.delete({ id });

    if (result === false) {
      return res.status(404).json({ message: "Película no encontrada" });
    }

    return res.json({ message: "Película eliminada con exito" });
  }
}
