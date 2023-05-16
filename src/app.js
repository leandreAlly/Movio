import express, { application } from "express";
import morgan from "morgan";
import allRoutes from "./routes/index";

const app = express();

app.use(morgan("combined"));
app.use(express.json());

app.use("/api/v1", allRoutes);
app.get("/api/v1", (req, res) => {
  return res.status(200).json({ message: "Welcome to my Movio App" });
});

export default app;
