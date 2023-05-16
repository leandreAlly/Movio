import { Genre } from "../model/genre";
import { validateGenre } from "../validations/genre.validation";

const getAllGenre = async (req, res) => {
  try {
    const genres = await Genre.find().sort("name");
    return res.status(200).json({ genres });
  } catch (err) {
    return res.status(500).json({ error: err, message: "Server error" });
  }
};

export { getAllGenre };
