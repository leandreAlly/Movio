import { Genre } from "../model/genre";

const getAllGenre = async (req, res) => {
  try {
    const genres = await Genre.find().sort("name");
    return res.status(200).json({ genres });
  } catch (err) {
    return res.status(500).json({ error: err, message: "Server error" });
  }
};

const addGenre = async (req, res) => {
  try {
    const { name } = req.body;
    let genre = new Genre({
      name,
    });
    await genre.save();

    return res.status(201).json({ message: "Genre created successful", genre });
  } catch (err) {
    return res.status(500).json({ error: err, message: "Server error" });
  }
};

export { getAllGenre, addGenre };
