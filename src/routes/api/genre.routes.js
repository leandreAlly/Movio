import { Router } from "express";
import genreValidation from "../../validations/genre.validation";
import { isGenreExist } from "../../middlewares/genre.middleware";
import { getAllGenre, addGenre } from "../../controlllers/genre.controller";

const route = Router();

route.get("/", getAllGenre);
route.post("/", genreValidation, isGenreExist, addGenre);

export default route;
