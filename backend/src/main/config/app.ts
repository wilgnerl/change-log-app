import express from "express";
import { route } from "../routes/";
import cors from "cors";

const app = express();

app.use(cors());
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	next();
});
app.use(express.json());

app.use("/api", route);

export { app };