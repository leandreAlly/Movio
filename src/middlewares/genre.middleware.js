import { Genre } from "../model/genre";

const isGenreExist = async (req, res, next) => {
  const { name } = req.body;
  const genre = await Genre.findOne({ name });
  if (genre)
    return res.status(404).json({ message: "Genre is already exist." });

  next();
};

export { isGenreExist };
