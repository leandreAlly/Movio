import { Genre } from "../model/genre";
import { validateGenre } from "../validations/genre.validation";

const getAllGenre = async (req, res) => {
  const genres = await Genre.find().sort("name");

  if (!genres)
    return res.status(401).json({ message: "Genre collection is empty" });

  return res.status(200).json({ genres });
};

export { getAllGenre };
