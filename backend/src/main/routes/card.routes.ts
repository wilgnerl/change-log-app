import { Router } from "express";
import { RouteAdapter } from "../adapters";
import { MakeCreateCardController, MakeDeleteCardController, MakeListCardsController, MakeUpdateCardController } from "../factories/Card/controller";
import { auth } from "../middleware";

const cardRouter = Router();

cardRouter.post("/", auth, RouteAdapter(MakeCreateCardController()));
cardRouter.put("/:cardId", auth, RouteAdapter(MakeUpdateCardController()));
cardRouter.get("/", auth, RouteAdapter(MakeListCardsController()));
cardRouter.delete("/:cardId", auth, RouteAdapter(MakeDeleteCardController()));

export {cardRouter};