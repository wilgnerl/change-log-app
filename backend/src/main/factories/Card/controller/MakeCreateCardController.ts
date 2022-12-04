import { CreateCardController } from "../../../../module/Card/controller";
import { Controller } from "../../../../shared/protocols";
import { MakeCreateCardUseCase } from "../usecase";

export const MakeCreateCardController = (): Controller => {
	const controller = new CreateCardController(
		MakeCreateCardUseCase()
	);

	return controller;
};