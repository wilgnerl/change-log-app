import { ListAllCardsWithFilterController } from "../../../../module/Card/controller";
import { Controller } from "../../../../shared/protocols";
import { MakeListAllCardsWithFilterUseCase } from "../usecase";

export const MakeListAllCardsWithFilterController = (): Controller => {
	const controller = new ListAllCardsWithFilterController(
		MakeListAllCardsWithFilterUseCase()
	);

	return controller;
};