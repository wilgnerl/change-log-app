import { DeleteCardController } from "../../../../module/Card/controller";
import { Controller } from "../../../../shared/protocols";
import { MakeDeleteCardUseCase } from "../usecase";

export const MakeDeleteCardController = (): Controller => {
	const controller = new DeleteCardController(
		MakeDeleteCardUseCase()
	);

	return controller;
};