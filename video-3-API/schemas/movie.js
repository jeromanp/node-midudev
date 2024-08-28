const z = require("zod");

const movieSchema = z.object({
  title: z.string({
    invalid_type_error: "El título debe ser una cadena de texto",
    required_error: "El título es obligatorio",
  }),
  genre: z.array(
    z.enum([
      "Action",
      "Adventure",
      "Comedy",
      "Drama",
      "Fantasy",
      "Horror",
      "Thriller",
      "Sci-Fi",
    ]),
    {
      required_error: "El género es obligatorio",
      invalid_type_error: "El género debe ser una opción válida",
    }
  ),
  year: z.number().int().min(1900).max(2024),
  director: z.string(),
  duration: z.number().int().positive(),
  rate: z.number().min(0).max(10).optional(),
  poster: z.string().url({
    message: "El poster debe ser una URL válida",
  }),
});

function validateMovie(object) {
  return movieSchema.safeParse(object);
}

module.exports = {
  validateMovie,
};
