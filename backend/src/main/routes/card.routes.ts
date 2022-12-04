import { Router } from "express";
import { RouteAdapter } from "../adapters";
import { MakeCreateCardController, MakeDeleteCardController } from "../factories/Card/controller";
import { auth } from "../middleware";

const cardRouter = Router();

cardRouter.post("/", auth, RouteAdapter(MakeCreateCardController()));
cardRouter.delete("/:cardId", auth, RouteAdapter(MakeDeleteCardController()));

export {cardRouter};