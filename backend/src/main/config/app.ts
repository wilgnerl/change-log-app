import express from "express";
import { route } from "../routes/";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", route);

export { app };