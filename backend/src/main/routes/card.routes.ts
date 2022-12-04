import { Router } from "express";
import { RouteAdapter } from "../adapters";
import { MakeCreateCardController } from "../factories/Card/controller";
import { auth } from "../middleware";

const cardRouter = Router();

cardRouter.post("/", auth, RouteAdapter(MakeCreateCardController()));

export {cardRouter};