import { ListCardsController } from "../../../../module/Card/controller";
import { Controller } from "../../../../shared/protocols";
import { MakeListCardsUseCase } from "../usecase";

export const MakeListCardsController = (): Controller => {
	const controller = new ListCardsController(
		MakeListCardsUseCase()
	);

	return controller;
};