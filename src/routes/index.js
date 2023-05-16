import { Router } from "express";
import genre from "../routes/api/genre.routes";

const routes = Router();

routes.use("/genre", genre);

export default routes;
