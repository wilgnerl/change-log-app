import { UpdateCardController } from "../../../../module/Card/controller";
import { Controller } from "../../../../shared/protocols";
import { MakeUpdateCardUseCase } from "../usecase";

export const MakeUpdateCardController = (): Controller => {
	const controller = new UpdateCardController(
		MakeUpdateCardUseCase()
	);

	return controller;
};