import { Router } from "express";
import { RouteAdapter } from "../adapters";
import { MakeAddNewDescriptionController, MakeCreateCardController, MakeDeleteCardController, MakeListAllCardsWithFilterController, MakeListCardsController, MakeUpdateCardController } from "../factories/Card/controller";
import { auth } from "../middleware";

const cardRouter = Router();

cardRouter.post("/", auth, RouteAdapter(MakeCreateCardController()));
cardRouter.put("/:cardId", auth, RouteAdapter(MakeUpdateCardController()));
cardRouter.patch("/", auth, RouteAdapter(MakeAddNewDescriptionController()));
cardRouter.get("/", auth, RouteAdapter(MakeListCardsController()));
cardRouter.get("/filter", auth, RouteAdapter(MakeListAllCardsWithFilterController()));
cardRouter.delete("/:cardId", auth, RouteAdapter(MakeDeleteCardController()));

export {cardRouter};