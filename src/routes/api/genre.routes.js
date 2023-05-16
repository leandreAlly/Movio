import { Router } from "express";
import { getAllGenre } from "../../controlllers/genre.controller";

const route = Router();

route.get("/", getAllGenre);

export default route;
